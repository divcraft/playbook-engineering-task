import { FunctionComponent } from 'react';
import { ParagraphModel } from './types';
import styles from './style.module.scss';

export const Paragraph: FunctionComponent<ParagraphModel> = ({children}) => {
  return (
    <p className={styles.paragraph} >
      {children}
    </p>
  );
};