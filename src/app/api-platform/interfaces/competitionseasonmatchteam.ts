import {Team} from '@app/api-platform/interfaces/team';
import {CompetitionSeasonMatch} from '@app/api-platform/interfaces/competitionseasonmatch';

export interface CompetitionSeasonMatchTeam {
  '@id'?: string;
  id: string;
  team?: Team;
  score?: number;
  label?: string;
  formula?: string;
  isHome?: boolean;
  isVictory?: boolean;
  isDraw?: boolean;
  competitionSeasonMatchResult?: CompetitionSeasonMatch;
}
