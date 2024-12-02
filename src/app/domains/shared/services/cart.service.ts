import { computed, Injectable, signal } from '@angular/core';
import { Product } from '../models/products.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart=signal<Product[]>([]);

  total=computed(()=>{
    const cart =this.cart();
    return  this.cart().reduce((a, b) => a + b.price, 0);
  });

  constructor() { }

  addToCart(product:Product){
    this.cart.update(prev=>[...prev,product])
  }


}
