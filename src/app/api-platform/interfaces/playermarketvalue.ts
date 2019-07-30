import {Player} from '@app/api-platform/interfaces/player';
import {Team} from '@app/api-platform/interfaces/team';

export interface PlayerMarketValue {
  '@id'?: string;
  id: string;
  player?: Player;
  Team?: Team;
  value?: number;
  created?: Date;
  updated?: Date;
}
