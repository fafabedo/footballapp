import {Competition} from '@app/api-platform/interfaces/competition';

export interface CompetitionSeason {
  '@id'?: string;
  id: string;
  competition?: Competition;
  archive?: boolean;
  startSeason?: Date;
  endSeason?: Date;
}
