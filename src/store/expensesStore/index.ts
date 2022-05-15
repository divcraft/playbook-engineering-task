import { ExpensesList } from './listStore';
import { ExpensesFormData } from './formDataStore';

export class ExpensesStore {
  listStore: ExpensesList;
  formDataStore: ExpensesFormData;
  constructor() {
    this.listStore = new ExpensesList();
    this.formDataStore = new ExpensesFormData();
  };
};