import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/shared/model/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent  {
  public title: string = "Détails produits"
  
  constructor(private router: Router, public productService : ProductService, public route: ActivatedRoute){
    let currentId$ = route.paramMap.pipe(
      map((param: ParamMap) => param.get('id')), // Retrieve the param with key 'id'
      filter((id?: string) => id !== null), // Filter to not getting null value
      map((id: string) => Number(id)) // Cast the param (string) into a number
    )

  }

  goToProducts(){
    this.router.navigate(['/products'])
  }
}
