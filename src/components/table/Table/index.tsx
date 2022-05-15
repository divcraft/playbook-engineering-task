import { FunctionComponent } from "react";
import { TableModel } from "./types";
import styles from './style.module.scss';

export const Table: FunctionComponent<TableModel> = ({children}) => {
  return (
    <table className={styles.tableContainer}>{children}</table>
  )
};