import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  //title = 'angularYoussfi';
  listMenu: Array<any> = [
    {
      label: 'home',
      icone: 'houses',
      path: '/home',
    },
    {
      label: 'products',
      icone: 'search',
      path: '/products',
    },
    {
      label: 'New product',
      icone: 'save',
      path: '/newproduct',
    },
    {
      label: 'Contact',
      icone: 'envelope',
      path: '/contact',
    },
    {
      label: 'public access',
      icone: 'public-adress-loudspeaker',
      path: '/public',
    },
  ];
  currentMenu: any;
  setCurrentMenu(Menu: any) {
    this.currentMenu = Menu;
  }
  // labelMenu: Array<string> = ['Home', 'product', 'New product'];
  text = 'hello angular';
  name: string = '';
  counter: number = 0;
  constructor(private router: Router) {}
  increment() {
    this.counter++;
  }
  decrement() {
    this.counter--;
  }
  onContact() {
    this.router.navigate(['contact']);
  }
}
