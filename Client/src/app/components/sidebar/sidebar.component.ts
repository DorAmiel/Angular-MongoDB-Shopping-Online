import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Cart } from '../../models/cart';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user';
import { selectUserState } from 'src/app/selectors/user.selector';
import { selectCartState } from 'src/app/selectors/cart.selector';
import { setCart } from 'src/app/actions/cart.actions';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  cart$: Observable<any>;
  user$: Observable<any>;
  user: any;
  cart: any;
  constructor(private cartService: CartService, private store: Store, private userService: UserService) {
    this.cart$ = this.store.select(selectCartState);
    this.user$ = this.store.select(selectUserState);
    this.user$.subscribe(user => {
      this.user = user;
      this.getUserCart(user.cartId);
    });
  }

  ngOnInit(): void {
  }

  ngOnChanges() {
  }

  async getUserCart(cartId: string): Promise<any> {
    try {
      const cart = await this.cartService.getCartById(cartId).toPromise();
      if (cart) {
        this.store.dispatch(setCart({ cart: cart }));
        this.cart = cart;
      }
    } catch (err) {
      console.log(err);
    }
  }
}
