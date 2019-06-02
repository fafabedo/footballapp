import {Federation} from '@app/api-platform/interfaces/federation';

export interface Country {
  '@id'?: string;
  id: string;
  name?: string;
  code?: string;
  active?: boolean;
  federation?: Federation;
  image?: string;
}
