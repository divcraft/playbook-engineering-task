export const plnToEur = (pln: number, eur: string) => {
  return +(pln / +eur).toFixed(2);
};