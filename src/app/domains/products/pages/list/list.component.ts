import { Component, inject, signal } from '@angular/core';
import { ProductComponent } from "@products/components/product/product.component";
import { CommonModule } from '@angular/common';

import { HeaderComponent } from "@shared/components/header/header.component";
import { Product } from '@shared/models/products.model';
import { CartService } from '@shared/services/cart.service';
import { ProductService } from '@shared/services/product.service';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [ProductComponent, CommonModule, HeaderComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent   {

  private productService=inject(ProductService);
  private cartService=inject(CartService);

  person?:any
  products=signal<Product[]>([])

  

  addToCart(pro:Product){
    this.cartService.addToCart(pro)
  }

  ngOnInit(){
    this.productService.getProducts().subscribe({
      next:(data)=>{
        this.products.set(data);
      },
      error:()=>{
        alert("error")
      }
    }
  )
  }
  

  

  
  

}
