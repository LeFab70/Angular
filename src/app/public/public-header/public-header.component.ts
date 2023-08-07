import { Component } from '@angular/core';

@Component({
  selector: 'app-public-header',
  templateUrl: './public-header.component.html',
  styleUrls: ['./public-header.component.css'],
})
export class PublicHeaderComponent {
  ListMenuPublic: Array<any> = [
    {
      label: 'home public',
      icone: 'houses',
      path: '/public/home',
    },

    {
      label: 'cocktail',
      icone: 'save',
      path: '/public/cocktail',
    },
    {
      label: 'Contact public',
      icone: 'envelope',
      path: '/public/contact',
    },
  ];
  currentMenu: any;
  setCurrentMenu(Menu: any) {
    this.currentMenu = Menu;
  }
}
