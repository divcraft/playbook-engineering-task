import { makeObservable, observable, action } from 'mobx';
import { controlCurrency } from 'helpers';
import { FormDataModel } from './types';

export class ExpensesFormData {
  formData: FormDataModel = {
    title: '',
    plnAmount: '',
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
