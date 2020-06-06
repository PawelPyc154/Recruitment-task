import React, { useContext } from 'react';
import { TableBody, TableCell, TableRow } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { columns } from '../utils/columns';
import { CompaniesContext } from '../../../context/GetCompanies';

export interface TBodyProps {
  nameInput: string;
  page: number;
  rowsPerPage: number;
}

const TBody: React.FC<TBodyProps> = ({ nameInput, page, rowsPerPage }) => {
  const { companies } = useContext(CompaniesContext);
  const history = useHistory();
  const handleRedirect = (id: number) => {
    history.push(`/companies/${id}`);
  };

  return (
    <TableBody>
      {companies
        .sort((a, b) => b.totalIncome - a.totalIncome)
        .filter((item) => item.name.includes(nameInput))
        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
        .map((row) => (
          <TableRowStyled onClick={() => handleRedirect(row.id)} hover role="checkbox" tabIndex={-1} key={row.id}>
            {columns.map((column) => (
              <TableCellStyled key={column.id} align={column.align}>
                {row[column.id]}
              </TableCellStyled>
            ))}
          </TableRowStyled>
        ))}
    </TableBody>
  );
};

export default TBody;

const TableRowStyled = styled(TableRow)`
  cursor: pointer;
  &:hover {
    background-color: #313131 !important;
  }
`;
const TableCellStyled = styled(TableCell)`
  &.MuiTableCell-root {
    color: white;
    border-color: #313131;
  }
`;
