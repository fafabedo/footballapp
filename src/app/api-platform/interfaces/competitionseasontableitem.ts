import {CompetitionSeasonTable} from '@app/api-platform/interfaces/competitionseasontable';
import {Team} from '@app/api-platform/interfaces/team';

export interface CompetitionSeasonTableItem {
  '@id'?: string;
  id: string;
  position?: number;
  team?: Team;
  matches?: number;
  home?: number;
  away?: number;
  points?: number;
  competitionSeasonTable?: CompetitionSeasonTable;
  matchesWin?: number;
  matchesDraw?: number;
  matchesLost?: number;
  homeWin?: number;
  homeDraw?: number;
  homeLost?: number;
  awayWin?: number;
  awayDraw?: number;
  awayLost?: number;
  goalsFor?: number;
  goalsAgainst?: number;
}
