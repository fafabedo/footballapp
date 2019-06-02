import {TeamCoachingStaff} from '@app/api-platform/interfaces/teamcoachingstaff';

export interface CoachingStaff {
  '@id'?: string;
  id: string;
  coachName?: string;
  secondCoach?: string;
  fitnessCoach?: string;
  technicalAssistants?: string;
  matchAnalysts?: string;
  gkCoaches?: string;
  clubManager?: string;
  teamManager?: string;
  startedAt?: Date;
  endedAt?: Date;
  archive?: boolean;
  teamCoachingStaff?: TeamCoachingStaff;
}
