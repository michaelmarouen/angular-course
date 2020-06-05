import { Component } from '@angular/core';
import { formatDate } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { map, filter, switchMap, tap } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { ProductService } from 'src/app/shared/model/product.service';
import { IProduits } from 'src/app/shared/model/product-list-interface';
import { Product } from 'src/app/shared/model/product';

const HTTP_URL_PATTERN: string =
  '^((http[s]?):\\/)\\/?([^:\\/\\s]+)((\\/\\w+)*)([\\w\\-\\.]+[^#?\\s]+)(.*)?(#[\\w\\-]+)?$'

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent{

  public title: string = "Détails produits"
  public productForm: FormGroup  
  private productSubscription: Subscription // We'll use to store the subscription to destroy it later
  public productEvaluation

  
  constructor(fb: FormBuilder, public route: ActivatedRoute, public productService: ProductService) { 
    this.productForm = fb.group({
      id: [null],
      productName: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(80)]],
      productCode: [''],
      releaseDate: [formatDate(new Date(), 'dd-MM-yyyy', 'en-US')],
      description: [''],
      price: [0, Validators.min(0)],
      starRating: [0, [Validators.min(0), Validators.max(5)]],
      imageUrl:['', Validators.pattern(HTTP_URL_PATTERN)],
      zoom : [0]
    })     

    let currentId$ = route.paramMap.pipe(
      map((param) => param.get('id')), // Retrieve the param with key 'id'
      filter((id?: string) => id !== null), // Filter to not getting null value
      map((id: string) => Number(id)) // Cast the param (string) into a number,      
    )
      
    this.productEvaluation = currentId$.pipe(
      switchMap((id: number) => productService.getProductById$(id)) // productService.getProductById doesn't exists, we'll create it next
    )

    this.productSubscription = currentId$.pipe(
      switchMap(id => productService.getProductById$(id)),
      filter(product => product instanceof Product)
    ).subscribe(
        product => this.productForm.setValue(product)
    )
    
  }
  public onSubmit() {
    if (this.productForm.valid) {
      let data: IProduits = this.productForm.value
      this.productService.save(data).subscribe(
        product => console.log(`My product was saved ${product.id}`)
      )
    }

  }

  ngOnDestroy() {
      this.productSubscription.unsubscribe()
  }
}
