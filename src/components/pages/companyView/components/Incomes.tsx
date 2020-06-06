import React, { useState } from 'react';
import styled from 'styled-components';
import FilterByDate from './FilterByDate';
import { IncomeType } from '../../../context/GetCompanies';
import PeriodIncome from './PeriodIncome';
import Chart from './Chart';
import LastMonthIncome from './LastMonthIncome';

export interface IncomesProps {
  incomes: IncomeType[];
}

const Incomes: React.FC<IncomesProps> = ({ incomes }) => {
  const sortByDate = incomes.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  const splitIncomebyMonth = incomes
    .map((item) => ({ ...item, date: item.date.substring(0, 7) }))
    .reduce((prev: { [date: string]: IncomeType[] }, current) => {
      if (!prev[current.date]) {
        prev[current.date] = [];
      }
      prev[current.date].push(current);
      return prev;
    }, {});

  const lastMonthName = sortByDate[0].date.substring(0, 7);

  const firstIncomeDate = new Date(sortByDate[incomes.length - 1].date).getTime();
  const lastIncomeDate = new Date(sortByDate[0].date).getTime();

  const [periodTime, setPeriodTime] = useState<number[]>([firstIncomeDate, lastIncomeDate]);

  return (
    <Section>
      <FilterByDate
        firstDate={firstIncomeDate}
        lastDate={lastIncomeDate}
        periodTime={periodTime}
        setPeriodTime={setPeriodTime}
      />
      <LastMonthIncome lastMonthIncome={splitIncomebyMonth[lastMonthName]} />
      <PeriodIncome incomes={incomes} periodTime={periodTime} />
      <Chart incomes={splitIncomebyMonth} />
    </Section>
  );
};

export default Incomes;

const Section = styled.section`
  flex-grow: 1;
  padding: 0 5px;
  display: flex;
  flex-direction: column;
`;
