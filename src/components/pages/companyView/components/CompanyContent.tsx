import React from 'react';
import { TiLocation } from 'react-icons/ti';
import { CompanyWithIncomesType } from '../../../context/GetCompanies';
import Incomes from './Incomes';
import styled from '../../../../utils/styled-components';

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
  border-bottom: 1px solid ${({ theme }) => theme.border};
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
  color: ${({ theme }) => theme.textSecondary};
  margin-bottom: 10px;
`;
const TiLocationIcone = styled(TiLocation)`
  font-size: 30px;
`;
