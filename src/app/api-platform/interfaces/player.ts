import {Agent} from '@app/api-platform/interfaces/agent';
import {PlayerPosition} from '@app/api-platform/interfaces/playerposition';
import {PlayerContract} from '@app/api-platform/interfaces/playercontract';

export interface Player {
  '@id'?: string;
  id: string;
  name?: string;
  shortname: string;
  uuid?: string;
  birthday?: Date;
  placeOfBirth?: string;
  height?: number;
  url?: any;
  code?: string;
  picture?: string;
  foot?: string;
  outfitter?: string;
  agent?: Agent;
  playerPositions?: PlayerPosition;
  playerContracts?: PlayerContract;
  metadata?: any;
}
