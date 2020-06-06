import { IncomeType } from '../components/context/GetCompanies';

const sumIncome = (incomes: IncomeType[]) => incomes.reduce((a: number, b: IncomeType) => a + Number(b.value), 0);

export default sumIncome;
