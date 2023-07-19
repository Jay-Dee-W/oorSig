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
export const Table: React.FC<TableProps> = ({ columns, data }) => {
  return (
    <StyledTable w="full">
      <thead>
        <x.tr backgroundColor="gray-200">
          {columns.map(column => (
            <x.th key={column.key} style={column.style}>
              {column.header}
            </x.th>
          ))}
        </x.tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            {columns.map(column => (
              <x.td key={column.key} style={column.style}>
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
