import React, { CSSProperties, useState, useCallback } from 'react';
import styled, { x } from '@xstyled/emotion';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

interface TableColumn {
  key: string;
  header: string;
  style?: CSSProperties;
  render?: (value: any) => React.ReactNode;
}

interface TableProps {
  columns: TableColumn[];
  data: any[];
  numberOfRows?: number;
  paginate?: () => void;
  hasNext?: boolean;
}

const TableContainer = styled.div`
  overflow-x: auto;
`;
const TableContent = styled.div`
  display: grid;
  overflow-x: auto;
`;

const StyledTable = styled(x.table)`
  border-collapse: collapse;
  font-size: base;
  border-radius: 0.2rem;
  min-width: 100%;
  thead {
    text-align: left;
    background-color: gray-300;
  }

  th,
  td {
    padding: 0.4rem;
    background-color: gray-300;
    border-bottom: 0.01rem solid;
    border-color: gray-100;
  }

  th {
    background-color: gray-200;
  }
};
`;
const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2rem;
    height: 2rem;
    border: 1px solid gray;
    border-radius: 50%;
    background-color: white;
    color: gray;
    margin: 0 0.3rem;
    cursor: pointer;
    font-size: 0.9rem;
    transition: background-color 0.3s, color 0.3s;

    &:hover:not(:disabled) {
      background-color: gray;
      color: white;
    }

    &:disabled {
      cursor: not-allowed;
      opacity: 0.6;
    }
  }
`;
export const Table: React.FC<TableProps> = ({
  columns,
  data,
  numberOfRows = 10,
  paginate,
  hasNext,
}) => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(data.length / numberOfRows);

  const startIndex = (currentPage - 1) * numberOfRows;
  const endIndex = Math.min(startIndex + numberOfRows, data.length);
  const currentPageData = data.slice(startIndex, endIndex);

  const goToPage = (page: number) => {
    setCurrentPage(page);
  };

  const goToNextPage = useCallback(() => {
    setCurrentPage(prevPage => prevPage + 1);
    if (hasNext) {
      if (paginate) paginate();
    }
  }, [paginate, hasNext]);

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(prevPage => prevPage - 1);
    }
  };

  return (
    <TableContent>
      <TableContainer>
        <StyledTable w="full">
          <thead>
            <x.tr backgroundColor="gray-200">
              {columns.map((column, index) => (
                <x.th key={index} style={column.style}>
                  {column.header}
                </x.th>
              ))}
            </x.tr>
          </thead>
          <tbody>
            {currentPageData.map((item, index) => (
              <tr key={index}>
                {columns.map((column, index) => (
                  <x.td key={index} style={column.style}>
                    {column.render
                      ? column.render(item[column.key])
                      : item[column.key]}
                  </x.td>
                ))}
              </tr>
            ))}
          </tbody>
        </StyledTable>
      </TableContainer>
      {(data.length > numberOfRows || hasNext) && (
        <PaginationContainer>
          <x.button onClick={goToPreviousPage} disabled={currentPage === 1}>
            <FaChevronLeft />
          </x.button>
          {Array.from({ length: totalPages }, (_, index) => index + 1).map(
            page => (
              <x.button
                key={page}
                onClick={() => goToPage(page)}
                disabled={page === currentPage}
              >
                {page}
              </x.button>
            )
          )}
          <x.button
            onClick={goToNextPage}
            disabled={!hasNext && currentPage === totalPages}
          >
            <FaChevronRight />
          </x.button>
        </PaginationContainer>
      )}
    </TableContent>
  );
};
