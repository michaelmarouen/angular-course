import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, tap } from 'rxjs/operators'
import { Observable, BehaviorSubject } from 'rxjs';
import { Product } from './product';
import { IProduits } from './product-list-interface';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  public httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }
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

  public getProducts$(): Observable<IProduits[]>{
    return this.products$
  }

  public getProductById$(id: number): Observable<IProduits>{    
    let produit =  this.products$.pipe(
      map(products => products.find(product => product.id === id))
    )
    return produit
  }

  public getEvaluationProductById$(id: number):Observable<any>{    
    let produit =  this.products$.pipe(
      map(products => products.find(product => product.id === id))
    )
    return produit
  }
  
  public save(product: IProduits): Observable<IProduits> {    
    if((product.id === null) || (product.id < 0)) { // Create a product
        return this.http.post<IProduits>('http://localhost:3000/products', product, this.httpOptions).pipe(
            tap(product => console.log(`New product: ${product.id}`)),
            tap(() => this.fetch())
        )
    } else { // Update a product
        return this.http.put<IProduits>(`http://localhost:3000/products/${product.id}`, product, this.httpOptions).pipe(
            tap(product => console.log(`Edit product: ${product.id}`)),
            tap(() => this.fetch())
        )
    }
  }
  
}
