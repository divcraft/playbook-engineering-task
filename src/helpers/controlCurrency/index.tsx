export const controlCurrency = (currencyValue: string, decimalNumberLimit?: number) => {
  const hasCorrectSigns = () => {
    const validatedSigns = currencyValue.split('').map(sign => !!sign.match(/[0-9.]/i));
    return validatedSigns.filter(sign => sign === false).length === 0;
  };
  const hasOnePoint = () => {
    return currencyValue.indexOf('.') === currencyValue.lastIndexOf('.');
};
  const startsWithPositive = () => {
    return currencyValue.length > 0 ? !!currencyValue[0]?.match(/[1-9]/i) : true;
  };
  const hasSpaceForDecimals = () => {
    if (!decimalNumberLimit) return true;
    if (!currencyValue.includes('.')) return true;
    if (currencyValue.indexOf('.') + decimalNumberLimit + 1 < currencyValue.length) return false;
    return true;
  };

  const isCurrency = (
    hasCorrectSigns() && 
    hasOnePoint() && 
    startsWithPositive() &&
    hasSpaceForDecimals()
  );
  return isCurrency;
};