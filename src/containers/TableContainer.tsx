import { ReactElement, FC } from "react";
import { TableContainerProps } from "../types";

const TableContainer: FC<TableContainerProps> = ({
  children,
}): ReactElement => {
  return <div>{children}</div>;
};

export default TableContainer;
