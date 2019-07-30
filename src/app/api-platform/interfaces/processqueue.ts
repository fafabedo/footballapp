import {ProcessQueueOperation} from '@app/api-platform/interfaces/processqueueoperation';

export interface ProcessQueue {
  '@id'?: string;
  id: string;
  type?: string;
  className?: string;
  parameter?: any;
  frequency?: string;
  processQueueOperations?: ProcessQueueOperation;
  created?: Date;
  updated?: Date;
}
