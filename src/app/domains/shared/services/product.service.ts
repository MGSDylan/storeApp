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

  getProducts(){
    return this.http.get<Product[]>(this.url);
  }

  getProduct(id:any){
    return this.http.get<Product>(this.url+'/'+id);
  }
}
