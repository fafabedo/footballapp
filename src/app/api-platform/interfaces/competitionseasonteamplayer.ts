import {CompetitionSeasonTeam} from '@app/api-platform/interfaces/competitionseasonteam';
import {Player} from '@app/api-platform/interfaces/player';

export interface CompetitionSeasonTeamPlayer {
  '@id'?: string;
  id: string;
  competitionSeasonTeam?: CompetitionSeasonTeam;
  player?: Player;
}
