import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SaveUsersDataService {
  constructor() {}
  saveData(data: {}) {
    console.log(data);
  }
  getData() {
    console.log('getting data....');
  }
}
