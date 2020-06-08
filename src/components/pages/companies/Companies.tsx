import React, { useContext, useState } from 'react';
import Table from '@material-ui/core/Table';
import TableContainer from '@material-ui/core/TableContainer';
import TablePagination from '@material-ui/core/TablePagination';
import { CompaniesContext } from '../../context/GetCompanies';
import THead from './compoments/THead';
import TBody from './compoments/TBody';
import FilterByName from './compoments/FilterByName';
import styled from '../../../utils/styled-components';

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
    color: ${({ theme }) => theme.textPrimary};
  }
  && .MuiButtonBase-root {
    color: ${({ theme }) => theme.textPrimary};
  }
  && .Mui-disabled {
    color: ${({ theme }) => theme.textSecondary};
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
        background: ${({ theme }) => theme.backgroundSecondary};
      }
      &::-webkit-scrollbar-thumb {
        background: ${({ theme }) => theme.scrollbarThumb};
      }
    }
  }
`;
const Paper = styled.div`
  background-color: ${({ theme }) => theme.backgroundSecondary};
  border: 1px solid ${({ theme }) => theme.border};
  width: 100%;
`;
