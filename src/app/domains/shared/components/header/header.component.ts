import { CommonModule } from '@angular/common';
import { Component, inject, Input, signal, SimpleChanges } from '@angular/core';
import { Product } from '../../models/products.model';
import { CartService } from '../../services/cart.service';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule,RouterLink,RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  hideSideMenu=signal(true);
  
  private cartService=inject(CartService)
  
  totalCart:number=0;
  cart=this.cartService.cart;
  total=this.cartService.total;

  ngOnChanges(changes:SimpleChanges) {
    const cart= changes['cart'];
    if(cart){
      
    }

   
  }

  
  
  

  toogleSideMenu(){
    this.hideSideMenu.update(prevstate=>!prevstate)
  }
}
