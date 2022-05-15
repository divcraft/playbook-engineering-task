import { makeObservable, observable, action } from 'mobx';
import { ExpenseModel } from './types';

export class ExpensesList {
  list: ExpenseModel[] = [];
  constructor() {
    makeObservable(this, {
      list: observable,
      addExpense: action,
      removeExpense: action,
    })
  };
  addExpense(title: string, plnAmount: number) {
    const newExpense: ExpenseModel = {
      id: this.list.length + 1,
      title,
      plnAmount,
    }
    this.list = [...this.list, newExpense];
  };
  removeExpense(id: number) {
    const newList = this.list
      .filter(expense => expense.id !== id)
      .map((expense, index) => ({
        ...expense,
        id: index + 1,
      }));
    this.list = newList;
  };
};