import { TestBed } from '@angular/core/testing';

import { SaveUsersDataService } from './save-users-data.service';

describe('SaveUsersDataService', () => {
  let service: SaveUsersDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SaveUsersDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
