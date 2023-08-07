import { SaveUsersDataService } from './../save-users-data.service';
import { Component, Input } from '@angular/core';
//import { SaveUsersDataService } from '../save-users-data.service';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent {
  @Input() counterValeur: number = 0;
  constructor(private SaveUsersDataService: SaveUsersDataService) {}

  onSaveData(data: {}) {
    this.SaveUsersDataService.saveData(data);
  }
  onGetData() {
    this.SaveUsersDataService.getData();
  }
}
