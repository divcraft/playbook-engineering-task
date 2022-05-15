import { FunctionComponent } from 'react';
import { Headline1Model } from './types';
import styles from './style.module.scss';

export const Headline1: FunctionComponent<Headline1Model> = ({children}) => {
  return (
    <h1 className={styles.headline1} >
      {children}
    </h1>
  );
};