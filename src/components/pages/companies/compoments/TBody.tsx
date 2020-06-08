import React, { useContext } from 'react';
import { TableBody, TableCell, TableRow } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { columns } from '../utils/columns';
import { CompaniesContext } from '../../../context/GetCompanies';
import Loader from '../../Loader';
import Error from '../../Error';
import styled from '../../../../utils/styled-components';

export interface TBodyProps {
  nameInput: string;
  page: number;
  rowsPerPage: number;
}

const TBody: React.FC<TBodyProps> = ({ nameInput, page, rowsPerPage }) => {
  const { error, companies } = useContext(CompaniesContext);
  const history = useHistory();
  const handleRedirect = (id: number) => {
    history.push(`/companies/${id}`);
  };

  return (
    <TableBodyStyled>
      {companies.length === 0 && !error && (
        <tr>
          <td>
            <Loader />
          </td>
        </tr>
      )}
      {error && (
        <tr>
          <td>
            <Error />
          </td>
        </tr>
      )}
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
    </TableBodyStyled>
  );
};

export default TBody;

const TableRowStyled = styled(TableRow)`
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.tableRow} !important;
  }
`;
const TableCellStyled = styled(TableCell)`
  &.MuiTableCell-root {
    color: ${({ theme }) => theme.textPrimary};
    border-color: ${({ theme }) => theme.border};
  }
`;
const TableBodyStyled = styled(TableBody)`
  position: relative;
`;
