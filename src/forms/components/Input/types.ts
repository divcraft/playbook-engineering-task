import { ChangeEvent, HTMLInputTypeAttribute } from 'react';

export interface InputModel {
  name: string; 
  label?: string; 
  type: HTMLInputTypeAttribute;
  value: string | number;
  placeholder?: string;
  errorMessage?: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
}