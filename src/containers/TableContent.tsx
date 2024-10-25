import { ReactElement, FC } from 'react'
import { TableContentProps } from '../types';

const TableContent: FC<TableContentProps> = ({ children }): ReactElement => {
  return (
    <tbody>{children}</tbody>
  )
}

export default TableContent;