import React from 'react';

import { IncomeType } from '../../../context/GetCompanies';
import sumIncome from '../../../../utils/sumIncome';

export interface LastMonthIncomeProps {
  lastMonthIncome: IncomeType[];
}

const LastMonthIncome: React.FC<LastMonthIncomeProps> = ({ lastMonthIncome }) => (
  <p>
    Last month income:
    <b>{` ${sumIncome(lastMonthIncome).toFixed(2)}`}</b>
  </p>
);

export default LastMonthIncome;
