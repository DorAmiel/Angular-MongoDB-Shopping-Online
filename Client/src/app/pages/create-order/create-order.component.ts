import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectCartState } from 'src/app/selectors/cart.selector';
import { selectUserState } from 'src/app/selectors/user.selector';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.css']
})
export class CreateOrderComponent implements OnInit {

  cities = ['Jerusalem', 'Tel Aviv', 'Haifa', 'Beer Sheva', 'Ashdod', 'Rishon LeZion', 'Rehovot', 'Netanya', 'Bat Yam', 'Ramat Gan', 'Ashqelon', 'Ashkelon', 'Bnei Brak', 'Eilat', 'Givatayim', 'Hadera', 'Herzliya', 'Holon', 'Kfar Saba', 'Mevo Betar', 'Netivot',];

  //today date
  today = new Date();
  year = this.today.getFullYear();
  month = this.today.getMonth() + 1
  day = this.today.getDate();
  currentDate = ''

  user$: Observable<any>
  user: any;

  cart: any;

  constructor(private store: Store, private cartService: CartService) {
    this.user$ = this.store.select(selectUserState)
    this.user$.subscribe(user => {
      this.user = user;
      this.getUserCart(user.cartId);
    });
  }


  ngOnInit(): void {
    this.setCurrentDate();
  }


  //set current date
  setCurrentDate() {
    if (this.day < 10 && this.month < 10) {
      this.currentDate = this.year + '-0' + this.month + '-0' + this.day;
    }
    else if (this.day < 10 && this.month >= 10) {
      this.currentDate = this.year + '-' + this.month + '-0' + this.day;
    }
    else if (this.day >= 10 && this.month < 10) {
      this.currentDate = this.year + '-0' + this.month + '-' + this.day;
    }
    else {
      this.currentDate = this.year + '-' + this.month + '-' + this.day;
    }
  }

  async getUserCart(cartId: string): Promise<any> {
    try {
      const cart = await this.cartService.getCartById(cartId).toPromise();
      if (cart) {
        this.cart = cart;
      }
    } catch (err) {
      console.log(err);
    }
  }
}
