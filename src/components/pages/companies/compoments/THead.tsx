import React from 'react';
import { TableHead, TableRow, TableCell } from '@material-ui/core';
import { columns } from '../utils/columns';
import styled from '../../../../utils/styled-components';

const THead: React.FC = () => (
  <TableHead>
    <TableRow>
      {columns.map((column) => (
        <TableCellStyled key={column.id} align={column.align} style={{ minWidth: column.minWidth }}>
          {column.label}
        </TableCellStyled>
      ))}
    </TableRow>
  </TableHead>
);

export default THead;

const TableCellStyled = styled(TableCell)`
  &.MuiTableCell-root {
    background-color: ${({ theme }) => theme.tableRow};
    color: ${({ theme }) => theme.textPrimary};
    border-color: ${({ theme }) => theme.border};
  }
`;
