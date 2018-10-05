import { TestBed } from '@angular/core/testing';

import { OauthInterceptorService } from './oauth-interceptor.service';

describe('OauthInterceptorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OauthInterceptorService = TestBed.get(OauthInterceptorService);
    expect(service).toBeTruthy();
  });
});
