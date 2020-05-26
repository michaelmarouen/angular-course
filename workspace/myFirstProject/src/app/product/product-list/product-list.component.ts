import { Component } from '@angular/core';
import { IProduits } from 'src/app/shared/model/product-list-interface';
import { ProductService } from 'src/app/shared/model/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent {    
    public title: string = "Liste des produits";
    public showImage: boolean = true;
    public searchTerms: string = '';
    public widthImage: number = 100 ;

    public products: IProduits[]=  [];

    public constructor(public productService: ProductService) {
        this.products = this.productService.getProducts()
    }
    
    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    zoomImage(monImage): void{
        const imageId = this.products.find( product=>{
            const idProduit = product.id
            return idProduit == monImage
        })
        imageId.zoom = !imageId.zoom ;
    }

    getFilteredProducts(): IProduits[]{
        const term = this.searchTerms.toLowerCase()       
        return this.products.filter(product => {
            const name = product.productName.toLowerCase()
            return name.indexOf(term) > -1
        })
    }
    
    
}
