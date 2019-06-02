import {Country} from '@app/api-platform/interfaces/country';
import {TeamType} from '@app/api-platform/interfaces/teamtype';

export interface Team {
  '@id'?: string;
  id: string;
  name?: string;
  shortname?: string;
  code?: string;
  country?: Country;
  image?: string;
  slug?: string;
  teamType?: TeamType;
  isYouthTeam?: boolean;
}
