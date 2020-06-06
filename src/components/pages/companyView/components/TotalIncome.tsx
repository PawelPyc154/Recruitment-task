import React from 'react';
import { IncomeType } from '../../../context/GetCompanies';
import sumIncome from '../../../../utils/sumIncome';

export interface TotalIncomeProps {
  periodIncome: IncomeType[];
}

const TotalIncome: React.FC<TotalIncomeProps> = ({ periodIncome }) => (
  <p>
    Total income:
    <b>{` ${sumIncome(periodIncome).toFixed(2)}`}</b>
  </p>
);

export default TotalIncome;
