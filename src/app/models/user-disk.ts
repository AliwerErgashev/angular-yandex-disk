import { Disk } from './disk';
import { SystemFolders } from './system-folders';
import { User } from './user';

export interface UserDisk {
  Disk?: Disk;
  SystemFolders?: SystemFolders;
  User?: User;
  revision?: number;
}
