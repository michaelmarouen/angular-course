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
  constructor(private router: Router, public productService : ProductService, public route: ActivatedRoute){}

  goToProducts(){
    this.router.navigate(['/products'])
  }
}
