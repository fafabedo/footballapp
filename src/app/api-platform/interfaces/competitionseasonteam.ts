import {CompetitionSeasonTeamPlayer} from '@app/api-platform/interfaces/competitionseasonteamplayer';
import {Team} from '@app/api-platform/interfaces/team';

export interface CompetitionSeasonTeam {
  '@id'?: string;
  id: string;
  team?: Team;
  competitionSeasonTeamPlayers?: CompetitionSeasonTeamPlayer;
  groupName?: string;
}
