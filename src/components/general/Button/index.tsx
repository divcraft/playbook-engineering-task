import { FunctionComponent } from 'react';
import { ButtonModel } from './types';
import styles from './style.module.scss';

export const Button: FunctionComponent<ButtonModel> = ({children, onClick}) => {
  return (
    <button 
      className={styles.button} 
      onClick={onClick}  
    >
      {children}
    </button>
  );
};