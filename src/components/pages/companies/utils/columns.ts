export interface Column {
  id: 'id' | 'city' | 'totalIncome' | 'name';
  label: string;
  minWidth?: number;
  align?: 'right';
}

export const columns: Column[] = [
  { id: 'id', label: 'id', minWidth: 30 },
  { id: 'name', label: 'name', minWidth: 100 },
  { id: 'city', label: 'city', minWidth: 100, align: 'right' },
  { id: 'totalIncome', label: ' total income', minWidth: 100, align: 'right' },
];
