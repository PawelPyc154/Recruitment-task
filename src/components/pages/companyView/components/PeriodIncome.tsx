import React from 'react';
import { IncomeType } from '../../../context/GetCompanies';
import TotalIncome from './TotalIncome';
import AverageIncome from './AverageIncome';

export interface PeriodIncomeProps {
  incomes: IncomeType[];
  periodTime: number[];
}

const PeriodIncome: React.FC<PeriodIncomeProps> = ({ incomes, periodTime }) => {
  const [firstIncomeDate, lastIncomeDate] = periodTime;
  const periodIncome = incomes.filter(
    (item) => new Date(item.date).getTime() < lastIncomeDate && new Date(item.date).getTime() > firstIncomeDate,
  );
  return (
    <>
      <AverageIncome periodIncome={periodIncome} />
      <TotalIncome periodIncome={periodIncome} />
    </>
  );
};

export default PeriodIncome;
