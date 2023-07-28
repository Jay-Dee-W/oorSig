import React, { CSSProperties } from 'react';
import styled, { x } from '@xstyled/emotion';

interface TableColumn {
  key: string;
  header: string;
  style?: CSSProperties;
  render?: (value: any) => React.ReactNode;
}
interface TableProps {
  columns: TableColumn[];
  data: any[];
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
`;
export const Table: React.FC<TableProps> = ({ columns, data }) => {
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
            {data.map((item, index) => (
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
    </TableContent>
  );
};
