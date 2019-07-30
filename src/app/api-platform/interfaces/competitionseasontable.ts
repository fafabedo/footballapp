import {CompetitionSeasonTableItem} from '@app/api-platform/interfaces/competitionseasontableitem';

export interface CompetitionSeasonTable {
  '@id'?: string;
  id: string;
  timestamp?: Date;
  competitionSeasonTableItems?: Array<CompetitionSeasonTableItem>;
  isProcessed?: boolean;
  groupName?: string;
  matchDay?: number;
}
