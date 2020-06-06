import React from 'react';
import styled from 'styled-components';
import { TiLocation } from 'react-icons/ti';
import { CompanyWithIncomesType } from '../../../context/GetCompanies';
import Incomes from './Incomes';

export interface CompanyContentProps {
  company: CompanyWithIncomesType;
}

const CompanyContent: React.FC<CompanyContentProps> = ({ company }) => (
  <>
    <Header>
      {company.id}
      <H1>{company.name}</H1>
      <LocationWrapper>
        <TiLocationIcone />
        <Span>{company.city}</Span>
      </LocationWrapper>
    </Header>
    <Incomes incomes={company.incomes} />
  </>
);

export default CompanyContent;

const Header = styled.header`
  border-bottom: 1px solid #313131;
`;
const H1 = styled.h1`
  text-align: center;
`;
const Span = styled.span`
  text-align: center;
`;
const LocationWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: gray;
  margin-bottom: 10px;
`;
const TiLocationIcone = styled(TiLocation)`
  font-size: 30px;
`;
