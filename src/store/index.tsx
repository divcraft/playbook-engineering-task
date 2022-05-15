import { ExpensesStore } from './expensesStore';
import { CurrencyRate } from './currencyRateStore';

export class RootStore {
  expensesStore: ExpensesStore;
  currencyRate: CurrencyRate;
  constructor() {
    this.expensesStore = new ExpensesStore();
    this.currencyRate = new CurrencyRate();
  };
};

export const rootStore = new RootStore();
