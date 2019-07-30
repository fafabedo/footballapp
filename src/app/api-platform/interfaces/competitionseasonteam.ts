import {Team} from '@app/api-platform/interfaces/team';

export interface CompetitionSeasonTeam {
  '@id'?: string;
  id: string;
  team?: Team;
  groupName?: string;
}
