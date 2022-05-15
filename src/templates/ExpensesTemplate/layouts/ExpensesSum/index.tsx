import { observer } from 'mobx-react-lite';
import { useStore } from 'hooks';
import { Paragraph } from 'components';
// import { plnToEur } from 'helpers';

export const ExpensesSum = observer(() => {
  const { expensesStore: {listStore}, conversionRate } = useStore();
  const eurRate = conversionRate.currencyValues.eur;
  let plnSum = 0; 
  listStore.list.map(item =>  plnSum = plnSum + item.plnAmount);
  return (
    <Paragraph>Sum: {plnSum} PLN ({plnToEur(plnSum, eurRate)} EUR)</Paragraph>
  );
});