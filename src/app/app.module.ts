import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ContactsComponent } from './contacts/contacts.component';
//import { RouterModule, Routes } from '@angular/router';
import { Error404Component } from './error404/error404.component';
import { ProductComponent } from './product/product.component';
import { NewProductComponent } from './new-product/new-product.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
//import { AdminlayoutComponent } from './adminlayout/adminlayout.component';
// const appRoutes: Routes = [
//   { path: 'home', component: HomeComponent },
//   { path: 'products', component: ProductComponent },
//   { path: 'contact', component: ContactsComponent },
//   { path: '*', redirectTo: '', pathMatch: 'full', component: HomeComponent },
//   { path: 'newproduct', component: NewProductComponent },
//   //{ path: '**', pathMatch: 'full', component: Error404Component },
// ];
@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactsComponent,
    Error404Component,
    ProductComponent,
    NewProductComponent,
    HomeComponent,
    PagenotfoundComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //RouterModule.forRoot(appRoutes),
    HttpClientModule,
    ReactiveFormsModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
