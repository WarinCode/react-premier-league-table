import { ReactElement, FC } from 'react'
import { TableConentProps } from '../types';

const TableConent: FC<TableConentProps> = ({ children }): ReactElement => {
  return (
    <tbody>{children}</tbody>
  )
}

export default TableConent;