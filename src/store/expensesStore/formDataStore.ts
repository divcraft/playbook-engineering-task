import { makeObservable, observable, action } from 'mobx';
import { controlCurrency } from 'helpers';

export interface ExpenseFormModel {
  title: string;
  plnAmount: string;
  isValid: boolean;
};

export class ExpensesFormData {
  formData: ExpenseFormModel = {
    title: '',
    plnAmount: '',
    isValid: false,
  };
  constructor() {
    makeObservable(this, {
      formData: observable,
      changeTitle: action,
      changePlnAmount: action,
    })
  };
  changeTitle(value: string) {
    this.formData = {
      ...this.formData, 
      title: value
    };
  };
  changePlnAmount(value: string) {
    const isCurrency = controlCurrency(value, 2);
    if (isCurrency) {
      this.formData = {
        ...this.formData, 
        plnAmount: value
      };
    };
  };
};
