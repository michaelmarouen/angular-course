import{ IProduits} from './product-list-interface';
 
export class Product {
    public products: IProduits[]=  [
        {
            "id": 1,
            "productName": "Leaf Rake",
            "productCode": "GDN-0011",
            "releaseDate": "March 19, 2016",
            "description": "Leaf rake with 48-inch wooden handle.",
            "price": 19.95,
            "starRating": 3.2,
            "imageUrl": [
                {"url":"http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"},
                {"url":"http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png"},
                {"url":"http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"}
            ],
            "zoom": false            
        },
        {
            "id": 2,
            "productName": "Garden Cart",
            "productCode": "GDN-0023",
            "releaseDate": "March 18, 2016",
            "description": "15 gallon capacity rolling garden cart",
            "price": 32.99,
            "starRating": 4.2,
            "imageUrl": [
                {"url":"http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png"},
                {"url":"http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"},
                {"url":"http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png"}
            ],
            "zoom": false            
        },
        {
            "id": 5,
            "productName": "Hammer",
            "productCode": "TBX-0048",
            "releaseDate": "May 21, 2016",
            "description": "Curved claw steel hammer",
            "price": 8.9,
            "starRating": 4.8,
            "imageUrl":[
                {"url": "http://openclipart.org/image/300px/svg_to_png/73/rejon_Hammer.png"},
                {"url": "http://openclipart.org/image/300px/svg_to_png/73/rejon_Hammer.png"}
            ],
            "zoom": false            
        },
        {
            "id": 8,
            "productName": "Saw",
            "productCode": "TBX-0022",
            "releaseDate": "May 15, 2016",
            "description": "15-inch steel blade hand saw",
            "price": 11.55,
            "starRating": 3.7,
            "imageUrl":[
                {"url": "http://openclipart.org/image/300px/svg_to_png/27070/egore911_saw.png"},
                {"url": "http://openclipart.org/image/300px/svg_to_png/27070/egore911_saw.png"}
            ],
            "zoom": false            
        },
        {
            "id": 10,
            "productName": "Video Game Controller",
            "productCode": "GMG-0042",
            "releaseDate": "October 15, 2015",
            "description": "Standard two-button video game controller",
            "price": 35.95,
            "starRating": 4.6,
            "imageUrl": [{
                "url":"http://openclipart.org/image/300px/svg_to_png/120337/xbox-controller_01.png"
            }],
            "zoom": false            
        }
    ]

    public id : number;
    public productName : string;
    public productCode : string;
    public releaseDate : string;    
    public description : string;
    public price : number;
    public starRating : number;
    public imageUrl : IiProduits[];
    public zoom : boolean;

    constructor(){
        this.id = product.id
        this.productName = product.productName
        this.productCode = product.productCode
        this.releaseDate = product.releaseDate
        this.description = product.description
        this.price = product.price
        this.starRating = product.starRating
        this.imageUrl = product.imageUrl
        this.zoom = product.zoom
    }

}
