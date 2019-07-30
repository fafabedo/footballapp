import {Competition} from '@app/api-platform/interfaces/competition';
import {TeamAward} from '@app/api-platform/interfaces/teamaward';

export interface Award {
  '@id'?: string;
  id: string;
  name?: string;
  image?: string;
  competition?: Competition;
  teamAwards?: TeamAward;
}
