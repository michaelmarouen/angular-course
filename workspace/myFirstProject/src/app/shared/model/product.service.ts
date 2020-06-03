import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'
import { Observable, BehaviorSubject } from 'rxjs';
import { Product } from './product';
import { IProduits } from './product-list-interface';

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
      map(products => products.map(product => new Product(product)))
    ).subscribe(products => this._products.next(products))
  }

 /* getProducts(): IProduits []{
    return this.products;
  }*/

  public getProducts$(): Observable<IProduits[]>{
    return this.products$
  }

  public getProductById$(id: number): Observable<IProduits>{    
    let produit =  this.products$.pipe(
      map(products => products.find(product => product.id === id))
    )
    return produit;
  }
}
