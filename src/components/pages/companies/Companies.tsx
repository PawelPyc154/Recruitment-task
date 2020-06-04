import React, { useContext, useState } from 'react';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TextField from '@material-ui/core/TextField';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { CompaniesContext } from '../../context/GetCompanies';

interface Column {
  id: 'id' | 'city' | 'totalIncome' | 'name';
  label: string;
  minWidth?: number;
  align?: 'right';
  format?: (value: number) => string;
}

const columns: Column[] = [
  { id: 'id', label: 'id', minWidth: 30 },
  { id: 'name', label: 'name', minWidth: 100 },
  { id: 'city', label: 'city', minWidth: 100, align: 'right' },
  { id: 'totalIncome', label: ' total income', minWidth: 100, align: 'right' },
];

const Companies: React.FC = () => {
  const [page, setPage] = useState(0);
  const rowsPerPage = 30;
  const { companies } = useContext(CompaniesContext);
  const [nameInput, setNameInput] = useState('');
  const history = useHistory();

  const handleChangePage = (event: React.MouseEvent<HTMLButtonElement, MouseEvent> | null, newPage: number) => {
    setPage(newPage);
  };
  const handleChangeSearchByName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNameInput(event.target.value);
  };
  const handleRedirect = (id: number) => {
    history.push(`/companies/${id}`);
  };

  return (
    <Container>
      <Paper>
        <TextField
          id="standard-basic"
          label="Search by name"
          style={{ margin: '0px 0 0 15px' }}
          value={nameInput}
          onChange={handleChangeSearchByName}
        />

        <TableContainerStyled>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell key={column.id} align={column.align} style={{ minWidth: column.minWidth }}>
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {companies
                .sort((a, b) => b.totalIncome - a.totalIncome)
                .filter((item) => item.name.includes(nameInput))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => (
                  <TableRowStyled onClick={() => handleRedirect(1)} hover role="checkbox" tabIndex={-1} key={row.id}>
                    {columns.map((column) => (
                      <TableCell key={column.id} align={column.align}>
                        {row[column.id]}
                      </TableCell>
                    ))}
                  </TableRowStyled>
                ))}
            </TableBody>
          </Table>
        </TableContainerStyled>
        <TablePagination
          rowsPerPageOptions={[rowsPerPage]}
          component="div"
          count={companies.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
        />
      </Paper>
    </Container>
  );
};

export default Companies;

const Container = styled.main`
  width: 100%;
  height: 100vh;
  padding: 10px;
`;

const TableContainerStyled = styled(TableContainer)`
  &.MuiTableContainer-root {
    height: calc(100vh - 120px);
    overflow-y: scroll;
  }
`;
const TableRowStyled = styled(TableRow)`
  cursor: pointer;
  &:hover {
    background-color: gray !important;
  }
`;
