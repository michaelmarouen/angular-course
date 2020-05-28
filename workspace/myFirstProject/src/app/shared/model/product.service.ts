import { Injectable } from '@angular/core';
import { IProduits } from './product-list-interface';
import { HttpClient } from '@angular/common/http';
import { Product } from './product';
import { map, tap } from 'rxjs/operators'
import { Observable, BehaviorSubject } from 'rxjs';
import { $ } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private _products: BehaviorSubject<IProduits[]> = new BehaviorSubject<IProduits[]>([])
  public products$: Observable<IProduits[]> = this._products.asObservable()

  constructor(private http: HttpClient) {
    this.fetch()
    
  }

  public fetch() {
    this.http.get<IProduits[]>('http://localhost:3000/products').pipe(
      map(products => products.map(product => new Product(product))),
      tap(product => console.log(`Products (${product.length})`))
    ).subscribe()
  }

 /* getProducts(): IProduits []{
    return this.products;
  }*/

  public getProducts$(): Observable<IProduits[]>{
    return this.products$
  }
}
