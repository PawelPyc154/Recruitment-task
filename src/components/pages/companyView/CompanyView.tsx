import React, { useContext } from 'react';
import { Paper } from '@material-ui/core';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { TiLocation } from 'react-icons/ti';
import { CompaniesContext, IncomeType } from '../../context/GetCompanies';
import SearchByDate from './SearchByDate';

const CompanyView: React.FC = () => {
  const { companies } = useContext(CompaniesContext);
  const { id } = useParams();

  const company = companies.find((item) => item.id === +id);
  //   console.log(company?.incomes.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()));

  const averageIncome = (incomes: IncomeType[]) =>
    (incomes.reduce((prev, current) => prev + +current.value, 0) / incomes.length).toFixed(2);

  const splitIncomebyMonth = (incomes: IncomeType[]) =>
    incomes
      .map((item) => ({ ...item, date: item.date.substring(0, 7) }))
      .reduce((prev: { [date: string]: IncomeType[] }, current) => {
        if (!prev[current.date]) {
          prev[current.date] = [];
        }
        prev[current.date].push(current);
        return prev;
      }, {});

  const getLastMonthName = (incomes: IncomeType[]) =>
    incomes.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())[0].date.substring(0, 7);

  const sumOfLastMonthIncomes = (incomes: IncomeType[]) =>
    splitIncomebyMonth(incomes)[getLastMonthName(incomes)].reduce((prev, current) => prev + +current.value, 0);

  if (company) {
    sumOfLastMonthIncomes(company.incomes);
  }

  return (
    <Container>
      <PaperStyled>
        {company ? (
          <>
            <Header>
              {company.id}
              <H1>{company.name}</H1>
              <LocationWrapper>
                <TiLocationIcone />
                <Span>{company.city}</Span>
              </LocationWrapper>
            </Header>

            <Section>
              <p>
                Total Income: <b> {company.totalIncome}</b>
              </p>
              <p>
                Average income: <b>{averageIncome(company.incomes)}</b>
              </p>
              <p>
                Last month income: <b>{sumOfLastMonthIncomes(company.incomes)} </b>
              </p>
            </Section>
          </>
        ) : (
          <div>Loading...</div>
        )}
      </PaperStyled>
    </Container>
  );
};

export default CompanyView;

const PaperStyled = styled(Paper)`
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  height: 100%;
  &.MuiPaper-root {
    background-color: #252525;
    border: 1px solid #313131;
    color: white;
    padding: 10px;
  }
`;

const Container = styled.main`
  height: 100vh;
  padding: 10px;
`;
const Header = styled.header`
  border-bottom: 1px solid #313131;
`;
const Section = styled.section`
  border-bottom: 1px solid #313131;
  padding: 10px 0;
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
