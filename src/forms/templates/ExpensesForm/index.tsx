import { MouseEvent } from 'react';
import { observer } from 'mobx-react-lite';
import { Button } from 'components';
import { useStore, useValidateForm } from 'hooks';
import { minCharacters, maxCharacters, required, Input } from 'forms';

export const ExpensesForm = observer(() => {
  const { expensesStore: {formDataStore, listStore} } = useStore();
  const { title, plnAmount } = formDataStore.formData;
  const validationData = [
    {
      name: 'expenseTitle',
      value: title,
      validators: [required, minCharacters(5), maxCharacters(15)],
    },
    {
      name: 'plnAmount',
      value: plnAmount,
      validators: [required],
    },
  ];
  const { validatedFields, validate } = useValidateForm(validationData);
  const handleSubmit = (e: MouseEvent<HTMLElement>) => {
    e.preventDefault();
    const isFormValid = validate();
    if (isFormValid) {
      listStore.addExpense(title, +plnAmount);
      formDataStore.changeTitle('');
      formDataStore.changePlnAmount('');
    };
  };
  return (
    <form>
      <Input 
        name='expenseTitle'
        label='Title of transaction'
        type='text'
        value={formDataStore.formData.title}
        errorMessage={validatedFields[0]?.errorMessage}
        handleChange={e => formDataStore.changeTitle(e.target.value)}
      />
      <Input 
        name='plnAmount'
        label='Amount (in PLN)'
        type='text'
        value={formDataStore.formData.plnAmount}
        errorMessage={validatedFields[1]?.errorMessage}
        handleChange={e => formDataStore.changePlnAmount(e.target.value)}
      />
      <Button onClick={handleSubmit}>add</Button>
    </form>
  )
});