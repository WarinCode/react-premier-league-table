import { ReactElement, FC } from 'react'
import { TableRowProps } from '../types'

const TableRow: FC<TableRowProps> = ({ children, attributes }): ReactElement => {
  return (
    <tr {...attributes}>{children}</tr>
  )
}

export default TableRow