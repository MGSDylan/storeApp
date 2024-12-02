export interface Product{
    id:number;
    title:string;
    description:string;
    price:number;
    images:string[];
    creationAt:string,
    category:Catergory
}

export interface Catergory{
    id:number;
    name:string;
    images:string;
}