import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { CocktailComponent } from './cocktail/cocktail.component';
import { ContactComponent } from './contact/contact.component';
import { PublicRoutingModule } from './public-routing.module';
import { PlayoutComponent } from './playout/playout.component';
import { PublicHeaderComponent } from './public-header/public-header.component';

//import { RouterModule, Routes } from '@angular/router';

//const publicRoutes: Routes = [];

@NgModule({
  declarations: [HomeComponent, CocktailComponent, ContactComponent, PlayoutComponent, PublicHeaderComponent],
  imports: [CommonModule, PublicRoutingModule],
})
export class PublicModule {}
