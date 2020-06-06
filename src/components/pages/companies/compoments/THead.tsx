import React from 'react';
import { TableHead, TableRow, TableCell } from '@material-ui/core';
import styled from 'styled-components';
import { columns } from '../utils/columns';

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
    background-color: #313131;
    color: white;
    border-color: #313131;
  }
`;
