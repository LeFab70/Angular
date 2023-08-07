import * as rxops from 'rxjs/operators';
import { ProductsService } from './../services/products.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable, async } from 'rxjs';
import { Product } from 'src/data/Products';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  // url: string = 'http://localhost:3000';
  public keysword!: string;
  public products: Array<Product> = [];
  public productsFind: Array<Product> = [];
  // products$!: Observable<Array<Product>>;
  // {
  //   id: 1,
  //   name: '🖥  computer',
  //   price: 1200,
  //   checked: false,
  // },
  // {
  //   id: 2,
  //   name: '🖱  mouse',
  //   price: 200,
  //   checked: true,
  // },
  // {
  //   id: 3,
  //   name: '⌨ keyboard',
  //   price: 500,
  //   checked: false,
  // },

  //constructor(private httpClient: HttpClient) {}
  constructor(private productsService: ProductsService) {}
  ngOnInit() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getProduct();
  }

  onCheckedProduct(product: Product) {
    // this.httpClient
    //   .patch<Product>(this.url + '/products/' + product.id, {
    //     checked: !product.checked,
    //   })
    this.productsService.updatedProduct(product).subscribe({
      next: (updateProduct) => {
        product.checked = !product.checked;
        //this. getProduct() ////
        /* Ici onrecharge la page,totalement a eviter car fait des rendu cote serveur c ki rend ux mauvais */
      },
      error: (err) => console.log(err),
    });

    //console.log(this.url + '/products/' + product.id);
  }
  getProduct() {
    // this.httpClient.get<Array<Product>>(this.url + '/products')
    this.productsService.getProducts().subscribe({
      next: (data) => (
        (this.products = data), (this.productsFind = [...this.products])
      ),
      error: (err) => console.log(err),
    }); //ici plus besoin de subcribe on le fera avec le pipe asyn dans la vue

    // this.products$ = this.productsService.getProducts();
  }
  handleDeleteProduct(product: Product) {
    // copyOfProducts: Array<Product> = this.products$.pipe();
    if (
      confirm(`etes-vous sur de vouloir supprimer le produit ${product.name} ?`)
    )
      this.productsService.deleteProduct(product).subscribe({
        next: (data) => {
          this.products = this.products.filter(
            (productToDisplay) => productToDisplay.id !== product.id
          );
          //this.getProduct();
        },
        error: (err) => console.log(err),
      });
    console.log(product);
  }
  handleSearchProduct() {
    let productFind: Product[] | undefined = this.productsService.searchProduct(
      this.keysword,
      this.products
    );
    console.log(productFind);
    if (productFind) {
      this.productsFind = [];
      this.productsFind = [...productFind];
    } else {
      this.productsFind = [...this.products];
    }
  }
}
