import {CompetitionSeason} from '@app/api-platform/interfaces/competitionseason';
import {CompetitionSeasonTableItem} from '@app/api-platform/interfaces/competitionseasontableitem';

export interface CompetitionSeasonTable {
  '@id'?: string;
  id: string;
  competitionSeason?: CompetitionSeason;
  timestamp?: Date;
  competitionSeasonTableItems?: Array<CompetitionSeasonTableItem>;
  isProcessed?: boolean;
  groupName?: string;
  matchDay?: number;
}
