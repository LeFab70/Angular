import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CocktailComponent } from './cocktail/cocktail.component';
import { ContactComponent } from './contact/contact.component';
import { PlayoutComponent } from './playout/playout.component';

const routes: Routes = [
  {
    path: '',
    component: PlayoutComponent,
    children: [

      //{ path: '', redirectTo: ' /public/home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'cocktail', component: CocktailComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'public', redirectTo: ' /home', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PublicRoutingModule {}
