import { CommonModule } from '@angular/common';
import { Component, inject, Input, OnInit } from '@angular/core';
import { Product } from '@shared/models/products.model';
import { ProductService } from '@shared/services/product.service';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent implements OnInit {
  
  @Input() id?:string;

  private productService=inject(ProductService);


  product!:Product;


  ngOnInit(): void {
    this.productService.getProduct(this.id).subscribe({
      next:(data)=>{
        this.product=data
      }
    }
    )
  }


}
