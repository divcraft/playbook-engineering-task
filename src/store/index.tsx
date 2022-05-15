import { ExpensesStore } from './expensesStore';
import { ConversionRate } from './conversionRateStore';

export class RootStore {
  expensesStore: ExpensesStore;
  conversionRate: ConversionRate;
  constructor() {
    this.expensesStore = new ExpensesStore();
    this.conversionRate = new ConversionRate();
  };
};

export const rootStore = new RootStore();