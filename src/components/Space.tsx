import { ReactElement, FC } from "react";
import { SpaceProps } from "../types";
import TableRow from "../containers/TableRow";
import TableDataCell from "../containers/TableDataCell";

const Space: FC<SpaceProps> = ({ ...attributes }): ReactElement => {
  return (
    <TableRow attributes={attributes}>
      <TableDataCell>
        <br />
      </TableDataCell>
    </TableRow>
  );
};

export default Space;
