import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CocktailRoutingModule } from './cocktail-routing.module';
import { CocktailDeleteComponent } from './cocktail-delete/cocktail-delete.component';
import { CocktailAddComponent } from './cocktail-add/cocktail-add.component';
import { CocktailEditComponent } from './cocktail-edit/cocktail-edit.component';
import { CocktailIndexComponent } from './cocktail-index/cocktail-index.component';


@NgModule({
  declarations: [
    CocktailDeleteComponent,
    CocktailAddComponent,
    CocktailEditComponent,
    CocktailIndexComponent
  ],
  imports: [
    CommonModule,
    CocktailRoutingModule
  ]
})
export class CocktailModule { }
