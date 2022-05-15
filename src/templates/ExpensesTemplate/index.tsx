import { ExpensesTable, ExpensesSum } from './layouts';
import { ExpensesForm, EurConversionForm } from 'forms';
import { Headline1 } from 'components';
import styles from './style.module.scss';

export const ExpensesTemplate = () => {
  return (
    <div className={styles.expensesContainer} >
      <Headline1>List of expenses</Headline1>
      {/* <EurConversionForm /> */}
      <ExpensesForm />
      <ExpensesTable />
      <ExpensesSum />
    </div>
  )
};