import { Pipe, PipeTransform } from '@angular/core';
import { IProduits } from '../shared/model/product-list-interface';

@Pipe({
  name: 'productSearch'
})
export class ProductSearchPipe implements PipeTransform {

  transform(value: IProduits[], term: string = ''): IProduits[] {
    if (Array.isArray(value)) {
      return value.filter(product => {
        const name = product.productName.toLowerCase()
        return name.indexOf(term.toLowerCase()) > -1
      })
    } else {
      console.error('Given value must be an array! 💥')
      return []
    }
  }

}
