import { inject, Injectable, signal, Signal } from '@angular/core';
import { Product } from '../models/products.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }
  url='https://api.escuelajs.co/api/v1/products'

  products=signal<Product[]>([]);

  private http = inject(HttpClient);

  getProducts(category_id?:string){
    const url1 = new URL(this.url);//objeto URL ESTABLECE QUERYPARAMS
    if (category_id) {
      url1.searchParams.set('categoryId',category_id)
    }
    return this.http.get<Product[]>(url1.toString());
    
  }

  getProduct(id:any){
    return this.http.get<Product>(this.url+'/'+id);
  }
}
