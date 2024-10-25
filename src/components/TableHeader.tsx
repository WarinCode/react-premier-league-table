import { ReactElement, FC } from "react";
import uuid from "react-uuid";
import { TableHeaderProps } from "../types";

const TableHeader: FC<TableHeaderProps> = ({ ...attributes }): ReactElement => {
  const headers: string[] = [
    "Position",
    "Club",
    "Played",
    "Won",
    "Drawn",
    "Lost",
    "GF",
    "GA",
    "GD",
    "Points",
  ];

  return (
    <thead {...attributes}>
      <tr>
        {headers.map((value: string) => (
          <th
            key={uuid()}
            className={`${
              value === "Club" ? "text-start w-[350px]" : "text-center"
            } text-primary tracking-wider text-xs opacity-75`}
          >
            {value}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;
