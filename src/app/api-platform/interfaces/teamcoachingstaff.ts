import {CoachingStaff} from '@app/api-platform/interfaces/coachingstaff';
import {Team} from '@app/api-platform/interfaces/team';

export interface TeamCoachingStaff {
  '@id'?: string;
  id: string;
  team?: Team;
  coachingStaff?: CoachingStaff;
}
