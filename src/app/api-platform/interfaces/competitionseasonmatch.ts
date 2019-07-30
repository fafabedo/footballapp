import {CompetitionSeasonMatchTeam} from '@app/api-platform/interfaces/competitionseasonmatchteam';
import {MatchStage} from '@app/api-platform/interfaces/matchstage';

export interface CompetitionSeasonMatch {
  '@id'?: string;
  id: string;
  attendance?: number;
  competitionSeasonMatchTeams?: CompetitionSeasonMatchTeam[];
  isProcessed?: boolean;
  isPlayed?: boolean;
  matchDatetime?: Date;
  matchDay?: number;
  matchStage?: MatchStage;
  matchGroup?: string;
}
