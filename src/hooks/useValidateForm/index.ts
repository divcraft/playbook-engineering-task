import { useState } from 'react';

interface FieldDataModel {
  name: string;
  value: string;
  validators: ((value: string) => {
    isValid: boolean;
    message: string;
})[];
};


interface ValidationItemModel {
  isValid: boolean;
  errorMessage: string;
};

export const useValidateForm = (fieldsData: FieldDataModel[]) => {
  const [validatedFields, setValidatedFields] = useState<ValidationItemModel[]>([]);
  const validate = () => {
    const newValidatedFields: ValidationItemModel[] = fieldsData.map(field => {
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