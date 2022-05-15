import { FunctionComponent } from 'react';
import { TableHeadModel } from './types';

export const TableHead: FunctionComponent<TableHeadModel> = ({headerList}) => {
  return (
  <thead>
    <tr>
      {headerList.map(header => (
        <th key={header} >{header}</th>
      ))}
    </tr>
  </thead>
  )
};