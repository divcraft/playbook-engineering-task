import { observer } from 'mobx-react-lite';
import { Table, TableHead, TableBody, Button } from 'components';
import { useStore } from 'hooks';
import { plnToEur } from 'helpers';

export const ExpensesTable = observer(() => {
  const { expensesStore: {listStore}, currencyRate } = useStore();
  const euroValue = currencyRate.currencyValues.eur;
  const handleRemove = (id: number) => {
    listStore.removeExpense(id);
  };
  const headerList = [
    'Title',
    'Amount (PLN)',
    'Amount (EUR)',
    'Options',
  ];
  const bodyList = listStore.list.map(expense => ({
    title: expense.title,
    plnAmount: expense.plnAmount,
    eurAmount: plnToEur(expense.plnAmount, euroValue),
    options: (
      <Button onClick={() => handleRemove(expense.id)}>remove</Button>
    ),
  }))
  return (
    <Table>
      <TableHead headerList={headerList} />
      <TableBody bodyList={bodyList} />
    </Table>
  )
});