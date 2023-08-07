import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/data/Products';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  url: string = 'http://localhost:3000';
  constructor(private http: HttpClient) {}
  public getProducts(): Observable<Array<Product>> {
    return this.http.get<Array<Product>>(`${this.url}/products`);
  }
  public updatedProduct(product: Product): Observable<Product> {
    return this.http.patch<Product>(`${this.url}/products/${product.id}`, {
      checked: !product.checked,
    });
  }
  public deleteProduct(product: Product) {
    return this.http.delete<any>(`${this.url}/products/${product.id}`);
  }
  public saveProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(`${this.url}/products`, product);
  }
  public searchProduct(
    nameProduct: string,
    productList: Array<Product>
  ): Product[] | undefined {
    return productList.filter(
      (prod) => prod.name.toLowerCase() === nameProduct.toLowerCase()
    );
  }
}
