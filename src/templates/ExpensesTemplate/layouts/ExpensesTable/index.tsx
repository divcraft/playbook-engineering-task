import { observer } from 'mobx-react-lite';
// import { TableHead, TableBody, Button } from 'components';
import { useStore } from 'hooks';
// import { plnToEur } from 'helpers';
import styles from './style.module.scss';

export const ExpensesTable = observer(() => {
  const { expensesStore: {listStore}, currencyRate } = useStore();
  const handleRemove = (id: number) => {
    listStore.removeExpense(id);
  };
  const headerList = [
    'Title',
    'Amount (PLN)',
    'Amount (EUR)',
    'Options',
  ];
  const euroValue = currencyRate.currencyValues.eur;
  const bodyList = listStore.list.map(expense => ({
    title: expense.title,
    plnAmount: expense.plnAmount,
    eurAmount: plnToEur(expense.plnAmount, euroValue),
    options: (
      <Button onClick={() => handleRemove(expense.id)}>remove</Button>
    ),
  }))
  return (
    <table className={styles.tableContainer} >
      <TableHead headerList={headerList} />
      <TableBody bodyList={bodyList} />
    </table>
  )
});