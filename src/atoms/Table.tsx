import React from 'react';
import styled, { x } from '@xstyled/emotion';

interface TableColumn {
  key: string;
  header: string;
  render?: (value: any) => React.ReactNode;
}
interface TableProps {
  columns: TableColumn[];
  data: any[];
  alignLastColumn?: 'left' | 'center' | 'right';
  firstColumnLeftPadding?: string | number;
}
const StyledTable = styled(x.table)`
  border-collapse: collapse;
  font-size: base;
  border-radius: 0.2rem;
  overflow: hidden;
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
export const Table: React.FC<TableProps> = ({
  columns,
  data,
  alignLastColumn = 'left',
  firstColumnLeftPadding = '0',
}) => {
  return (
    <StyledTable w="full">
      <thead>
        <x.tr textAlign="left" backgroundColor="gray-200">
          {columns.map(column => (
            <x.th key={column.key}>{column.header}</x.th>
          ))}
        </x.tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            {columns.map((column, columnIndex) => (
              <x.td
                key={column.key}
                style={{
                  textAlign:
                    columnIndex === columns.length - 1
                      ? alignLastColumn
                      : undefined,
                  paddingLeft:
                    columnIndex === 0 ? firstColumnLeftPadding : undefined,
                }}
              >
                {column.render
                  ? column.render(item[column.key])
                  : item[column.key]}
              </x.td>
            ))}
          </tr>
        ))}
      </tbody>
    </StyledTable>
  );
};
