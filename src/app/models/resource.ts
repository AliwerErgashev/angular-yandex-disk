import { ShareInfo } from './share-info';
import { ResourceList } from './resource-list';

export interface Resource {
  resource_id?: string;
  antivirus_status?: any;
  share?: ShareInfo;
  file?: string;
  size?: number;
  _embedded?: ResourceList;
  custom_properties?: object;
  media_type?: string;
  sha256?: string;
  type?: string;
  mime_type?: string;
  revision?: number;
  public_url?: string;
  path?: string;
  md5?: string;
  public_key?: string;
  preview?: string;
  name?: string;
  created?: string;
  modified?: string;
}
