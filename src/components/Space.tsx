import { ReactElement } from "react";
import TableRow from "../containers/TableRow";
import TableDataCell from "../containers/TableDataCell";

const Space = (): ReactElement => {
  return (
    <TableRow>
      <TableDataCell>
        <br />
      </TableDataCell>
    </TableRow>
  );
};

export default Space;
