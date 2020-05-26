import{ IProduits, IiProduits} from './product-list-interface';
 
export class Product {    

    public id : number;
    public productName : string;
    public productCode : string;
    public releaseDate : string;    
    public description : string;
    public price : number;
    public starRating : number;
    public imageUrl : IiProduits[];
    public zoom : boolean;

    constructor(products : IProduits){
        this.id = products.id
        this.productName = products.productName
        this.productCode = products.productCode
        this.releaseDate = products.releaseDate
        this.description = products.description
        this.price = products.price
        this.starRating = products.starRating
        this.zoom = products.zoom
    }

}
