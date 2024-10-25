import { ReactElement, FC } from 'react'
import { TableDataCellProps } from '../types'

const TableDataCell: FC<TableDataCellProps> = ({ children, attributes }): ReactElement => {
  return (
    <td {...attributes}>{children}</td>
  )
}

export default TableDataCell;