export interface iProduits{
    url : string;
}

export interface Produits{
    id : number;
    productName : string;
    productCode : string;
    releaseDate : string;    
    description : string;
    price : number;
    starRating : number;
    imageUrl : iProduits[];
    zoom : boolean;
}