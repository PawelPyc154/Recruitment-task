import React from 'react';
import styled from 'styled-components';
import { IncomeType } from '../../../context/GetCompanies';
import sumIncome from '../../../../utils/sumIncome';

export interface AverageIncomeProps {
  periodIncome: IncomeType[];
}

const AverageIncome: React.FC<AverageIncomeProps> = ({ periodIncome }) => {
  const averageIncome = (income: IncomeType[]) => {
    const average = sumIncome(income) / income.length;
    return Number.isNaN(average) ? '0.00' : average.toFixed(2);
  };
  return (
    <P>
      Average income:
      <b>{` ${averageIncome(periodIncome)}`}</b>
    </P>
  );
};

export default AverageIncome;

const P = styled.p`
  margin: 10px 0;
`;
