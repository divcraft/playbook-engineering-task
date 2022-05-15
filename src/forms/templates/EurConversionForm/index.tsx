import { observer } from 'mobx-react-lite';
import { Input } from 'forms';
import { useStore } from 'hooks';

export const EurConversionForm = observer(() => {
  const { currencyRate: {changeEur, currencyValues} } = useStore();
  const eurValue = currencyValues.eur;
  return (
    <Input
      name="eurConversion"
      label="Euro value"
      placeholder='eur'
      type="text"
      value={eurValue}
      handleChange={(e) => changeEur(e.target.value)}
    />
  );
});