export interface FieldDataModel {
  name: string;
  value: string;
  validators: ((value: string) => {
    isValid: boolean;
    message: string;
})[];
};

export interface ValidatedFieldModel {
  isValid: boolean;
  errorMessage: string;
};