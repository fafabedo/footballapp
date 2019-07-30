import {Team} from '@app/api-platform/interfaces/team';
import {Award} from '@app/api-platform/interfaces/award';
import {CompetitionSeason} from '@app/api-platform/interfaces/competitionseason';

export interface TeamAward {
  '@id'?: string;
  id: string;
  team?: Team;
  award?: Award;
  competitionSeason?: CompetitionSeason;
}
