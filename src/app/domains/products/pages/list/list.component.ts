import { Component, inject, Input, signal, SimpleChange, SimpleChanges } from '@angular/core';
import { ProductComponent } from "@products/components/product/product.component";
import { CommonModule } from '@angular/common';

import { HeaderComponent } from "@shared/components/header/header.component";
import { Catergory, Product } from '@shared/models/products.model';
import { CartService } from '@shared/services/cart.service';
import { ProductService } from '@shared/services/product.service';
import { CategoryService } from '@shared/services/category.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [ProductComponent, CommonModule, HeaderComponent,RouterLink],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent   {

  @Input() categoryId?:string;

  private productService=inject(ProductService);
  private categoryService=inject(CategoryService);
  private cartService=inject(CartService);

  person?:any
  products=signal<Product[]>([])
  categorys=signal<Catergory[]>([])

  

  addToCart(pro:Product){
    this.cartService.addToCart(pro)
  }

  ngOnInit(){
   this.getCategories()
   
  }

  ngOnChanges(changes:SimpleChanges){
    this.getProducts();
  }
   
  getCategories(){
    this.categoryService.getAllCategory().subscribe({
      next:(data)=>{
        this.categorys.set( data.filter((x, index, self) =>//filtrado solo obtener datos no repetidos
          self.findIndex(y => y.name === x.name) === index
        )
        )
      },
      error:()=>{
        alert("error")
      }

    })
  }

  getProducts(){
    this.productService.getProducts(this.categoryId).subscribe({
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
