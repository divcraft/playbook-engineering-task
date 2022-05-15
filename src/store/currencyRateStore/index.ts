import { makeObservable, observable, action } from 'mobx';
import { controlCurrency } from 'helpers';
import { CurrencyRateModel } from './types';

export class CurrencyRate {
  currencyValues: CurrencyRateModel = {
    eur: '4.382',
  };
  constructor() {
    makeObservable(this, {
      currencyValues: observable,
      changeEur: action.bound,
    })
  };
  changeEur(value: string) {
    const isValid = controlCurrency(value, 7);
    if (isValid) this.currencyValues = {
      ...this.currencyValues,
      eur: value,
    };
  };
};