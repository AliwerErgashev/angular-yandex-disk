import { Resource } from './resource';

export interface ResourceList {
  sort?: string;
  items: Array<Resource>;
  limit?: number;
  offset?: number;
  path?: string;
  total?: number;
}
