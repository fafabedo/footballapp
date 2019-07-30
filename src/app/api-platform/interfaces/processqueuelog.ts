import {ProcessQueueOperation} from '@app/api-platform/interfaces/processqueueoperation';

export interface ProcessQueueLog {
  '@id'?: string;
  id: string;
  data?: any;
  processQueueOperation?: ProcessQueueOperation;
  type?: string;
}
