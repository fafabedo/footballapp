import {Competition} from '@app/api-platform/interfaces/competition';
import {Country} from '@app/api-platform/interfaces/country';
import {TeamCoachingStaff} from '@app/api-platform/interfaces/teamcoachingstaff';
import {TeamAward} from '@app/api-platform/interfaces/teamaward';
import {TeamType} from '@app/api-platform/interfaces/teamtype';

export interface Team {
  '@id'?: string;
  id: string;
  name?: string;
  competition?: Competition;
  shortname?: string;
  code?: string;
  country?: Country;
  image?: string;
  slug?: string;
  teamCoachingStaff?: TeamCoachingStaff;
  teamAwards?: TeamAward;
  teamType?: TeamType;
  isYouthTeam?: boolean;
}
