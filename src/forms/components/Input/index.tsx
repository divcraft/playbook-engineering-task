import { FunctionComponent } from 'react';
import styles from './style.module.scss';
import { InputModel } from "./types";

export const Input: FunctionComponent<InputModel> = ({
  label,
  type,
  name,
  errorMessage,
  value,
  handleChange,
}) => {
  return (
    <div className={styles.container}>
      <label className={styles.label}>{label}</label>
      <input 
        className={styles.input} 
        type={type} 
        name={name} 
        value={value} 
        onChange={handleChange} 
      />
      {errorMessage && (
        <span className={styles.error}>{errorMessage}</span>
      )}
    </div>
  );
};