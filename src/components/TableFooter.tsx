import { ReactElement, FC } from "react";
import { TableFooterProps } from "../types";
import TableRow from "../containers/TableRow";
import TableDataCell from "../containers/TableDataCell";
import PremierLeague from "../types";
import Space from "./Space";

const leagues: PremierLeague.LeagueQualification[] = [
  {
    leagueName: "Champions League qualification",
    color: "bg-blue-600",
  },
  {
    leagueName: "Europa League Qualification",
    color: "bg-orange-500",
  },
  {
    leagueName: "Conference League qualification",
    color: "bg-green-500",
  },
];

const TableFooter: FC<TableFooterProps> = ({ ...attributes }): ReactElement => {
  return (
    <tfoot {...attributes}>
      <Space/>
      <TableRow attributes={{ className: "w-full" }}>
        <TableDataCell attributes={{ colSpan: 10 }}>
          <h4 className="font-bold">European Qualification Key</h4>
        </TableDataCell>
      </TableRow>
      <TableRow>
        <TableDataCell attributes={{ colSpan: 10 }}>
          <div className="flex items-center">
            {leagues.map(
              (
                { leagueName, color }: PremierLeague.LeagueQualification,
                idx: number
              ): ReactElement => (
                <span
                  key={leagueName}
                  className={`flex items-center ${idx === 1 ? "mx-6" : ""}`}
                >
                  <div
                    className={`league-qualification h-10 w-2 ${color} me-2`}
                  ></div>
                  <p className="font-thin text-sm">{leagueName}</p>
                </span>
              )
            )}
          </div>
        </TableDataCell>
      </TableRow>
    </tfoot>
  );
};

export default TableFooter;
