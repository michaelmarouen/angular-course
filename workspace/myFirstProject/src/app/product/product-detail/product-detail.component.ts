import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { switchMap, filter, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ProductService } from 'src/app/shared/model/product.service';
import { IProduits } from 'src/app/shared/model/product-list-interface';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent  {
  public title: string = "Détails produits"
  public product$: Observable<IProduits>

  constructor(private router: Router, public productService : ProductService, public route: ActivatedRoute){
    let currentId$ = route.paramMap.pipe(
      map((param) => param.get('id')), // Retrieve the param with key 'id'
      filter((id?: string) => id !== null), // Filter to not getting null value
      map((id: string) => Number(id)) // Cast the param (string) into a number,      
    )
    this.product$ = currentId$.pipe(
      switchMap((id: number) => productService.getProductById$(id)) // productService.getProductById doesn't exists, we'll create it next
    )
  }
  goToProducts(){
    this.router.navigate(['/products'])
  }
}
