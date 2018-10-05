import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  protected baseurl = `https://cloud-api.yandex.net/v1/disk${this.url}`;
  constructor(protected http: HttpClient, protected url: string) { }

  convert(params: Object): HttpParams {
    return Object.entries(params).reduce((param, [key, value]) => param.set(key, value), new HttpParams());
  }
}
