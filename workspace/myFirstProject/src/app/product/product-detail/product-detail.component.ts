import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent  {
  public title: string = "Détails produits"
  constructor(private router: Router){}

  goToProducts(){
    this.router.navigate(['/products'])
  }
}
