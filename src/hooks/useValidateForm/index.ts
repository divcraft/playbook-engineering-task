import { useState } from 'react';
import { FieldDataModel, ValidatedFieldModel } from './types';

export const useValidateForm = (fieldsData: FieldDataModel[]) => {
  const [validatedFields, setValidatedFields] = useState<ValidatedFieldModel[]>([]);
  const validate = () => {
    const newValidatedFields: ValidatedFieldModel[] = fieldsData.map(field => {
      let isValid = true;
      let errorMessage = '';
      field.validators.forEach(validator => {
        const validationData = validator(field.value);
        if (isValid) isValid = validationData.isValid;
        if (!isValid && !errorMessage) errorMessage = validationData.message;
      });
      return {
        isValid,
        errorMessage
      };
    });  
    setValidatedFields(newValidatedFields);
    const isFormValid = newValidatedFields.filter(field => field.isValid === false).length === 0;
    return isFormValid;
  };
  return {
    validatedFields,
    validate
  };
};