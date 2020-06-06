import React, { useContext } from 'react';
import { Paper } from '@material-ui/core';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { CompaniesContext } from '../../context/GetCompanies';
import CompanyContent from './components/CompanyContent';
import Loader from '../Loader';

const CompanyView: React.FC = () => {
  const { companies } = useContext(CompaniesContext);
  const { id } = useParams();
  const company = companies.find((item) => item.id === +id);

  return (
    <Container>
      <PaperStyled>{company ? <CompanyContent company={company} /> : <Loader />}</PaperStyled>
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
    background-color: #252525;
    border: 1px solid #313131;
    color: white;
    padding: 10px;
  }
`;
const Container = styled.main`
  display: flex;
  align-items: center;
  min-height: 100vh;
`;
