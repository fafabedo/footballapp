import {Agent} from '@app/api-platform/interfaces/agent';
import {PlayerPosition} from '@app/api-platform/interfaces/playerposition';
import {PlayerContract} from '@app/api-platform/interfaces/playercontract';
import {PlayerMarketValue} from '@app/api-platform/interfaces/playermarketvalue';

export interface Player {
  '@id'?: string;
  id: string;
  name?: string;
  shortname: string;
  birthday?: Date;
  height?: number;
  picture?: string;
  foot?: string;
  outfitter?: string;
  agent?: Agent;
  playerPositions?: PlayerPosition;
  playerContracts?: PlayerContract;
  jerseyNumber?: number;
  playerMarketValues?: PlayerMarketValue;
  placeOfBirth?: string;
  fullName?: string;
}
