import {Player} from '@app/api-platform/interfaces/player';

export interface CompetitionSeasonTeamPlayer {
  '@id'?: string;
  id: string;
  player?: Player;
}
