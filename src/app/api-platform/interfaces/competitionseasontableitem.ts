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
  matchesWon?: number;
  matchesDrawn?: number;
  matchesLost?: number;
  homeWon?: number;
  homeDrawn?: number;
  homeLost?: number;
  awayWon?: number;
  awayDrawn?: number;
  awayLost?: number;
  goalsFor?: number;
  goalsAgainst?: number;
}
