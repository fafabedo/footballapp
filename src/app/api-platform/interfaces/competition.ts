import {Country} from '@app/api-platform/interfaces/country';
import {CompetitionSeason} from '@app/api-platform/interfaces/competitionseason';
import {Federation} from '@app/api-platform/interfaces/federation';
import {TeamType} from '@app/api-platform/interfaces/teamtype';
import {CompetitionType} from '@app/api-platform/interfaces/competitiontype';

export interface Competition {
  '@id'?: string;
  id: string;
  code?: string;
  name?: string;
  leagueLevel?: number;
  country?: Country;
  numberTeams?: number;
  competitionSeasons?: CompetitionSeason;
  federation?: Federation;
  teamType?: TeamType;
  image?: string;
  slug?: string;
  competitionType?: CompetitionType;
  isYouthCompetition?: boolean;
  metadata?: any;
  tmkCode?: string;
}
