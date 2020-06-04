import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { formatDate } from '@angular/common';

const HTTP_URL_PATTERN: string =
  '^((http[s]?):\\/)\\/?([^:\\/\\s]+)((\\/\\w+)*)([\\w\\-\\.]+[^#?\\s]+)(.*)?(#[\\w\\-]+)?$'

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent{

  public productForm: FormGroup
  
  constructor(fb: FormBuilder) { 
    this.productForm = fb.group({
      id: [null],
      productName: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(80)]],
      productCode: [''],
      releaseDate: [formatDate(new Date(), 'dd-MM-yyyy', 'en-US')],
      description: [''],
      price: [0, Validators.min(0)],
      starRating: [0, [Validators.min(0), Validators.max(5)]],
      imageUrl: ['', Validators.pattern(HTTP_URL_PATTERN)]
    })     
  }


}
