import { Injectable } from '@angular/core';
import { IProduits } from './product-list-interface';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  public products : IProduits;
  constructor() { }
}
