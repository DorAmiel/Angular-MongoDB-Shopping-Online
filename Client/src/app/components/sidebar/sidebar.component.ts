import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Cart } from '../../models/cart';
import { Store } from '@ngrx/store';
import { User } from 'src/app/models/user';
import { selectUserState } from 'src/app/selectors/user.selector';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  loggedUser: User = new User();
  cartId: any = this.loggedUser?.cartId;
  currentCart: any = new Cart();

  constructor(private cartService: CartService, private store: Store) {
    this.store.select(selectUserState).subscribe(
      (data) => {
        this.loggedUser = data;
        this.cartId = this.loggedUser.cartId;
      }
    )
  }

  ngOnInit() {
    this.getUserCart(this.cartId);
  }
  ngOnChanges() {
    this.getUserCart(this.cartId);
  }

  getUserCart(cartId: string) {
    this.cartService.getCartById(cartId).subscribe(
      (data) => {
        this.currentCart = data;
      }
    )
  }
}
