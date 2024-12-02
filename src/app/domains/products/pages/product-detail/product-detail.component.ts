import { CommonModule } from '@angular/common';
import { Component, inject, Input, OnInit, signal } from '@angular/core';
import { Product } from '@shared/models/products.model';
import { CartService } from '@shared/services/cart.service';
import { ProductService } from '@shared/services/product.service';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent implements OnInit {

  @Input() id?: string;

  private productService = inject(ProductService);
  private cartService = inject(CartService);

  product = signal<Product | null>(null);
  coverImg = signal<string>("");


  ngOnInit(): void {
    this.productService.getProduct(this.id).subscribe({
      next: (data) => {
        this.product.set(data)
        if (this.product()!.images.length > 0) {
          this.coverImg.set(this.product()!.images[0])
        }
      }
    })
  }
  changeCover(newImg: string) {
    this.coverImg.set(newImg);
  }

  addToCart(prod: Product) {
    if (prod != null) {
      this.cartService.addToCart(prod)
    }

  }

}
