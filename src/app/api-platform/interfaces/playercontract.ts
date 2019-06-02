import {Player} from '@app/api-platform/interfaces/player';
import {Team} from '@app/api-platform/interfaces/team';

export interface PlayerContract {
  '@id'?: string;
  id: string;
  player?: Player;
  team?: Team;
  startAt?: Date;
  endAt?: Date;
  archive?: boolean;
  annualSalary?: any;
  joinedToTeamAt?: Date;
}
