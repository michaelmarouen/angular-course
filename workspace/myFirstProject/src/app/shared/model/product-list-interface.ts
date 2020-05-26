export interface IiProduits{
    url : string;
}

export interface IProduits{
    id : number;
    productName : string;
    productCode : string;
    releaseDate : string;    
    description : string;
    price : number;
    starRating : number;
    imageUrl : IiProduits[];
    zoom : boolean;
}