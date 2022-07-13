import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Cart } from '../../models/cart';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  currentUser: any = JSON.parse(localStorage.getItem('user') || '{}');
  cartId: string = this.currentUser?.cartId;
  currentCart: any = new Cart();
  // cartProducts: any = [];
  // cartTotal: number = 0;

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.getUserCart(this.cartId);
  }
  ngOnChanges() {
    this.getUserCart(this.cartId);
  }

  getUserCart(cartId: string) {
    console.log("here");
    this.cartService.getCartById(cartId).subscribe(
      (data) => {
        this.currentCart = data;
        console.log(this.currentCart);
      }
    )
  }
}
