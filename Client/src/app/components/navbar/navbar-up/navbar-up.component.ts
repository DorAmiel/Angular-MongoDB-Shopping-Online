import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from 'src/app/models/category';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectUserState } from 'src/app/selectors/user.selector';
import { User } from '../../../models/user';
import { logout } from 'src/app/actions/user.actions';
import { UserService } from 'src/app/services/user.service';
import { CartService } from 'src/app/services/cart.service';
import { selectProductsState } from 'src/app/selectors/products.selector';

@Component({
  selector: 'app-navbar-up',
  templateUrl: './navbar-up.component.html',
  styleUrls: ['./navbar-up.component.css']
})
export class NavbarUpComponent implements OnInit {

  //use router
  @Input() currentCategory: Category = new Category();
  @Output() categoryEmmiter = new EventEmitter();

  user$: Observable<any>;
  loggedUser: User = new User();

  products$: Observable<any>;
  products: any;
  filterProducts: any;

  constructor(private router: Router, private store: Store, private userService: UserService, private cartService: CartService) {
    this.user$ = this.store.select(selectUserState);
    this.user$.subscribe(user => {
      this.loggedUser = user;
    }
    )
    this.products$ = this.store.select(selectProductsState);
    this.products$.subscribe(products => {
      this.products = products;
      console.log(this.products);
    });
  }

  ngOnInit(): void {
  }

  ngOnChanges() {

  }

  //remove user from local storage
  logout() {
    localStorage.removeItem('user');
    alert('You have been logged out');
    this.store.dispatch(logout())
  }

  setCurrentCategory() {
    this.currentCategory = new Category();
    this.categoryEmmiter.emit(this.currentCategory);
  }

  setFilterProducts(event: any) {
    console.log(event);
    // let value = target.value;
    // console.log(value);
    // this.products = this.products.filter((product: any) => {
      // return product.name.toLowerCase().includes(value.toLowerCase());
    // }
    // )
  }

  navigateToAdminPage() {
    this.router.navigate(['/admin']);
  }
}
