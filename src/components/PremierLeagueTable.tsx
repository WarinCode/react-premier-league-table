import { ReactElement, FC } from "react";
import PremierLeague, { PremierLeagueTableProps } from "../types";
import Caption from "./Caption";
import TableHeader from "./TableHeader";
import TableContent from "../containers/TableContent";
import TableRow from "../containers/TableRow";
import TableDataCell from "../containers/TableDataCell";
import TableFooter from "./TableFooter";
import premierleague from "/premierleague.png";

const PremierLeagueTable: FC<PremierLeagueTableProps> = ({
  teams,
}): ReactElement => {
  return (
    <table className="w-full text-primary table-fixed">
      <Caption
        attributes={{ className: "text-start mb-3" }}
        imageAttributes={{
          src: premierleague,
          className: "w-[150px] h-[30px]",
        }}
      />
      <TableHeader className="sticky top-0 z-10 h-12 border-b-[1px] border-x-[6px] border-x-transparent border-b-gray-300 bg-slate-50" />
      <TableContent>
        {teams.map(
          ({
            team: { name, logo },
            stats: {
              rank,
              gamesPlayed,
              wins,
              ties,
              losses,
              goalsFor,
              goalsAgainst,
              goalDifference,
              points,
            },
          }: PremierLeague.Team): ReactElement => (
            <TableRow
              key={name}
              attributes={{
                className: `h-16 border-b-[1px] border-gray-200 tracking-wide text-center
                ${rank == 17 ? "border-red-400 " : ""}
                ${rank <= 4 ? "border-s-[6px] border-s-blue-600" : ""} ${
                  rank == 5 ? "border-s-[6px] border-s-orange-500" : ""
                } ${rank == 6 ? "border-s-[6px] border-s-green-500" : ""}`,
              }}
            >
              <TableDataCell attributes={{ className: "text-center" }}>
                <h4 className="font-thin inline me-6">{rank}</h4>
                <div className="w-1 h-1 rounded-full bg-primary inline-block mb-1 me-2 opacity-60"></div>
              </TableDataCell>
              <TableDataCell
                attributes={{
                  className: "hover:cursor-pointer hover:underline text-start",
                }}
              >
                <img src={logo} alt={name} className=" w-9 h-9 me-4 inline" />
                <h2 className="font-bold tracking-wide inline">{name}</h2>
              </TableDataCell>
              <TableDataCell>
                <h4>{gamesPlayed}</h4>
              </TableDataCell>
              <TableDataCell>
                <h4>{wins}</h4>
              </TableDataCell>
              <TableDataCell>
                <h4>{ties}</h4>
              </TableDataCell>
              <TableDataCell>
                <h4>{losses}</h4>
              </TableDataCell>
              <TableDataCell>
                <h4>{goalsFor}</h4>
              </TableDataCell>
              <TableDataCell>
                <h4>{goalsAgainst}</h4>
              </TableDataCell>
              <TableDataCell>
                <h4>{goalDifference}</h4>
              </TableDataCell>
              <TableDataCell>
                <h4 className="font-bold">{points}</h4>
              </TableDataCell>
            </TableRow>
          )
        )}
      </TableContent>
      <TableFooter className="text-primary h-20 tracking-wider" />
    </table>
  );
};

export default PremierLeagueTable;
