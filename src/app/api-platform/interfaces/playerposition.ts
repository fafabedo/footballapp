import {Player} from '@app/api-platform/interfaces/player';

export interface PlayerPosition {
  '@id'?: string;
  id: string;
  player?: Player;
  position?: Position;
}
