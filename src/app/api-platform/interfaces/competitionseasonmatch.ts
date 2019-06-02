import {CompetitionSeasonMatchTeam} from '@app/api-platform/interfaces/competitionseasonmatchteam';
import {CompetitionSeason} from '@app/api-platform/interfaces/competitionseason';
import {MatchStage} from '@app/api-platform/interfaces/matchstage';

export interface CompetitionSeasonMatch {
  '@id'?: string;
  id: string;
  metadata?: any;
  attendance?: number;
  competitionSeasonMatchTeams?: CompetitionSeasonMatchTeam;
  isProcessed?: boolean;
  isPlayed?: boolean;
  competitionSeason?: CompetitionSeason;
  matchDatetime?: Date;
  matchDay?: number;
  matchStage?: MatchStage;
  matchGroup?: string;
}
