import {CompetitionSeasonTeam} from '@app/api-platform/interfaces/competitionseasonteam';
import {Competition} from '@app/api-platform/interfaces/competition';

export interface CompetitionSeason {
  '@id'?: string;
  id: string;
  competition?: Competition;
  archive?: boolean;
  competitionSeasonTeams?: CompetitionSeasonTeam;
  metadata?: any;
}
