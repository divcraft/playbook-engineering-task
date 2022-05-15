import { FunctionComponent } from 'react';
import { TableBodyModel } from './types';

export const TableBody: FunctionComponent<TableBodyModel> = ({bodyList}) => {
  return (
    <tbody>
      {bodyList.map((expense) => (
        <tr key={expense.title} >
          {Object.values(expense).map((item: any) => (
            <td key={item} >{item}</td>
          ))}
        </tr>
      ))}
    </tbody>
  )
};