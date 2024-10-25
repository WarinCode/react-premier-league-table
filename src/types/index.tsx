export * from "./props";

namespace PremierLeague {
  export interface TeamInformation {
    name: string;
    logo: string;
    abbreviation: string;
  }

  export interface TeamStats {
    wins: number;
    losses: number;
    ties: number;
    gamesPlayed: number;
    goalsFor: number;
    goalsAgainst: number;
    points: number;
    rank: number;
    goalDifference: number;
  }

  export interface Team {
    team: Readonly<TeamInformation>;
    stats: Readonly<TeamStats>;
  }

  export type Teams = Team[];

  export interface LeagueQualification {
    leagueName: string;
    color: string;
  }
}

export default PremierLeague;
