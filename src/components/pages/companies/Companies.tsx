import React, { useContext, useState } from 'react';
import Table from '@material-ui/core/Table';
import TableContainer from '@material-ui/core/TableContainer';
import TablePagination from '@material-ui/core/TablePagination';
import styled from 'styled-components';
import { CompaniesContext } from '../../context/GetCompanies';
import THead from './compoments/THead';
import TBody from './compoments/TBody';
import FilterByName from './compoments/FilterByName';

const Companies: React.FC = () => {
  const [page, setPage] = useState(0);
  const rowsPerPage = 30;
  const { companies } = useContext(CompaniesContext);
  const [nameInput, setNameInput] = useState('');

  const handleChangePage = (event: React.MouseEvent<HTMLButtonElement, MouseEvent> | null, newPage: number) => {
    setPage(newPage);
  };

  return (
    <Container>
      <Paper>
        <FilterByName nameInput={nameInput} setNameInput={setNameInput} />
        <TableContainerStyled>
          <Table stickyHeader aria-label="sticky table">
            <THead />
            <TBody nameInput={nameInput} page={page} rowsPerPage={rowsPerPage} />
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
  padding: 5px;
  width: 100%;
  && .MuiTypography-colorInherit {
    color: white;
  }
  && .MuiButtonBase-root {
    color: white;
  }
  && .Mui-disabled {
    color: gray;
  }
`;
const TableContainerStyled = styled(TableContainer)`
  &.MuiTableContainer-root {
    height: calc(100vh - 120px);
    overflow-y: scroll;
    @media screen and (min-width: 500px) {
      &::-webkit-scrollbar {
        width: 5px;
      }
      &::-webkit-scrollbar-track {
        background: #202020;
      }
      &::-webkit-scrollbar-thumb {
        background: grey;
      }
    }
  }
`;
const Paper = styled.div`
  background-color: #202020;
  border: 1px solid #313131;
  width: 100%;
`;
