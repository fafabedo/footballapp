export interface CachePage {
  '@id'?: string;
  id: string;
  cacheId?: string;
  data?: string;
  created?: Date;
  expire?: boolean;
  collection?: string;
  lifetime?: number;
  pathUrl?: string;
}
