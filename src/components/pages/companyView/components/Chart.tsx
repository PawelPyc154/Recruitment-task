import React from 'react';
import { HorizontalBar } from 'react-chartjs-2';
import styled from 'styled-components';
import { IncomeType } from '../../../context/GetCompanies';
import sumIncome from '../../../../utils/sumIncome';

export interface ChartProps {
  incomes: {
    [date: string]: IncomeType[];
  };
}

const Chart: React.FC<ChartProps> = ({ incomes }) => {
  const patternColor = (arrayColors: string[], length: number) => {
    let arry: string[] = [];
    for (let i = 0; arry.length < length; i++) {
      arry = [...arry, ...arrayColors];
    }
    arry.slice(length);
    return arry;
  };
  const backgroundColor = patternColor(
    [
      'rgba(255, 99, 132, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(255, 206, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(153, 102, 255, 0.2)',
      'rgba(255, 159, 64, 0.2)',
    ],
    Object.keys(incomes).length,
  );
  const borderColor = patternColor(
    [
      'rgba(255, 99, 132, 1)',
      'rgba(54, 162, 235, 1)',
      'rgba(255, 206, 86, 1)',
      'rgba(75, 192, 192, 1)',
      'rgba(153, 102, 255, 1)',
      'rgba(255, 159, 64, 1)',
    ],
    Object.keys(incomes).length,
  );

  const data = {
    labels: Object.keys(incomes),
    datasets: [
      {
        label: 'My First dataset',
        data: Object.entries(incomes).map(([, v]) => sumIncome(v), 0),
        backgroundColor,
        borderColor,
        borderWidth: 2,
      },
    ],
  };

  const options = {
    title: {
      display: true,
      text: 'Monthly incomes',
      fontSize: 30,
    },
    legend: {
      display: false,
    },
    responsive: true,
    maintainAspectRatio: true,
  };

  return (
    <Container>
      <HorizontalBar data={data} height={100} width={0} options={options} />
    </Container>
  );
};

export default Chart;

const Container = styled.div`
  height: 550px;
`;
