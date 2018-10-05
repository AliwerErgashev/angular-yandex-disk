
import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DiskService extends BaseService {

  constructor(protected http: HttpClient) {
    super(http, '/');
  }

  async getUserDiskInfo() {
    try {
      return await this.http.get(this.baseurl).toPromise();
    } catch (error) {
      console.error(error);
    }
  }
}
