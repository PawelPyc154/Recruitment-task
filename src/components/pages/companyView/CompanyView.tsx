import React, { useContext } from 'react';
import { Paper } from '@material-ui/core';
import { useParams } from 'react-router-dom';
import { CompaniesContext } from '../../context/GetCompanies';
import CompanyContent from './components/CompanyContent';
import Loader from '../Loader';
import Error from '../Error';
import styled from '../../../utils/styled-components';

const CompanyView: React.FC = () => {
  const { error, companies } = useContext(CompaniesContext);
  const { id } = useParams();
  const company = companies.find((item) => item.id === +id);

  return (
    <Container>
      <PaperStyled>
        {error && <Error />}
        {!error && !company && <Loader />}
        {!error && company && <CompanyContent company={company} />}
      </PaperStyled>
    </Container>
  );
};

export default CompanyView;

const PaperStyled = styled(Paper)`
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  min-height: 70vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  &.MuiPaper-root {
    background-color: ${({ theme }) => theme.backgroundSecondary};
    border: 1px solid ${({ theme }) => theme.border};
    color: ${({ theme }) => theme.textPrimary};
    padding: 10px;
  }
`;
const Container = styled.main`
  display: flex;
  align-items: center;
  min-height: 100vh;
`;
