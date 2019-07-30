import {Country} from '@app/api-platform/interfaces/country';
import {Federation} from '@app/api-platform/interfaces/federation';
import {TeamType} from '@app/api-platform/interfaces/teamtype';
import {CompetitionType} from '@app/api-platform/interfaces/competitiontype';

export interface Competition {
  '@id'?: string;
  id: string;
  name?: string;
  country?: Country;
  federation?: Federation;
  image?: string;
  slug?: string;
  isFeatured?: boolean;
  leagueLevel?: number;
  numberTeams?: number;
  teamType?: TeamType;
  competitionType?: CompetitionType;
  isYouthCompetition?: boolean;
}
