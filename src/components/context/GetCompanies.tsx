import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import sumIncome from '../../utils/sumIncome';

export interface IncomeType {
  value: string;
  date: string;
}
export interface CompanyWithIncomesType {
  name: string;
  id: number;
  city: string;
  totalIncome: number;
  incomes: IncomeType[];
}
export interface CompanyType {
  name: string;
  id: number;
  city: string;
}

export const CompaniesContext = createContext(
  {} as {
    companies: CompanyWithIncomesType[];
  },
);

const GetCompanies: React.FC = ({ children }) => {
  const [companies, setCompanies] = useState<CompanyWithIncomesType[]>([]);

  const getCompaniesWithIncomes = async () => {
    try {
      const resCompanies = await axios.get('https://recruitment.hal.skygate.io/companies');
      const CompaniesWithIncomes = await resCompanies.data.reduce(
        async (previousValue: CompanyType[], currentValue: CompanyType) => {
          const resIncomes = await axios.get(`https://recruitment.hal.skygate.io/incomes/${currentValue.id}`);
          return [
            ...(await previousValue),
            { ...currentValue, incomes: resIncomes.data.incomes, totalIncome: sumIncome(resIncomes.data.incomes) },
          ];
        },
        [],
      );
      setCompanies(CompaniesWithIncomes);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getCompaniesWithIncomes();
  }, []);

  return <CompaniesContext.Provider value={{ companies }}>{children}</CompaniesContext.Provider>;
};

export default GetCompanies;
