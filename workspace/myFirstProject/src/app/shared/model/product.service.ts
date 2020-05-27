import { Injectable } from '@angular/core';
import { IProduits } from './product-list-interface';
import { HttpClient } from '@angular/common/http';
import { Product } from './product';
import { map, tap } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  public products: IProduits[]= []

  constructor(private http: HttpClient) {}

  public fetch(){
      this.http.get<IProduits[]>('http://localhost:3000/products').pipe(
            map(products => products.map(product => new Product(product))),
            tap(product => console.log(`Products (${product.length})`))      
        ).subscribe()
  }

  getProducts(): IProduits []{
    return this.products;
  }
 
}
