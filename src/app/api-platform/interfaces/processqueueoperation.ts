import {ProcessQueue} from '@app/api-platform/interfaces/processqueue';
import {ProcessQueueLog} from '@app/api-platform/interfaces/processqueuelog';

export interface ProcessQueueOperation {
  '@id'?: string;
  id: string;
  processQueue?: ProcessQueue;
  status?: string;
  processQueueLogs?: ProcessQueueLog[];
  batchLimit?: number;
  processedItems?: number;
  created?: Date;
  updated?: Date;
}
