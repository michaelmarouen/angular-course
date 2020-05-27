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

    constructor(data: IProduits){
        this.fromData(data)
    }
    
    private fromData(data: IProduits){
        this.id = data.id || null
        this.productName = data.productName || ''
        this.productCode = data.productCode || ''
        this.releaseDate = data.releaseDate || ''
        this.description = data.description || ''
        this.price = data.price || 0
        this.starRating = data.starRating|| 0
        this.imageUrl = data.imageUrl || []
        this.zoom = data.zoom || false
    }

}
