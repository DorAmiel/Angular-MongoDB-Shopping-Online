import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Cart } from '../../models/cart';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user';
import { selectUserState } from 'src/app/selectors/user.selector';
import { selectCartState } from 'src/app/selectors/cart.selector';
import { setCart } from 'src/app/actions/cart.actions';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  user$: Observable<any>;
  // cart$: Observable<any>;
  loggedUser: User = new User();
  currentCart: any = new Cart();

  constructor(private cartService: CartService, private store: Store) {
    this.user$ = this.store.select(selectUserState);
    // this.cart$ = this.store.select(selectCartState);
  }

  ngOnInit(): void {
    this.user$.subscribe(user => {
      this.loggedUser = user;
      if (user.cartId) {
        this.getUserCart(user.cartId);
      }
    })
  }

  ngOnChanges() {
    this.user$.subscribe(user => {
      this.loggedUser = user;
      if (user.cartId) {
        this.getUserCart(user.cartId);
      }
    });
  }

  async getUserCart(cartId: string): Promise<any> {
    try {
      const cart = await this.cartService.getCartById(cartId).toPromise();
      if (cart) {
        this.store.dispatch(setCart({ cart: cart }));
        this.currentCart = cart;
      }
    } catch (err) {
      console.log(err);
    }
  }
}
