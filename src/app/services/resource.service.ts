import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class ResourceService extends BaseService {

  constructor(protected http: HttpClient) {
    super(http, '/resources');
  }

  async getFolders({ ...params }) {

    try {
      return await this.http.get(this.baseurl, { params: super.convert(params) }).toPromise();
    } catch (error) {
      console.error(error);
    }
  }

}
