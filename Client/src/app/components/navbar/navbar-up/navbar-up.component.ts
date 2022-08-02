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
import { setProducts } from 'src/app/actions/products.actions';
import { Product } from 'src/app/models/product';
import { ProductsService } from 'src/app/services/products.service';


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

  products: any;
  filterProducts: any;

  constructor(private router: Router,
    private store: Store,
    private userService: UserService,
    private cartService: CartService,
    private productService: ProductsService) {
    this.user$ = this.store.select(selectUserState);
    this.user$.subscribe(user => {
      this.loggedUser = user;
    }
    )
  }

  ngOnInit(): void {
    this.getProducts();
  }

  ngOnChanges() {
    this.getProducts()
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

  setFilterProducts(target: any) {
    let value = target.value;
    console.log(value);
    this.filterProducts = this.products.filter((product: any) => {
      return product.productName.toLowerCase().includes(value.toLowerCase());
    });
    console.log(this.filterProducts);
    console.log(this.products);

    this.store.dispatch(setProducts({ Products: this.filterProducts }));
  }

  navigateToAdminPage() {
    this.router.navigate(['/admin']);
  }

  //get all products
  getProducts() {
    this.productService.getProducts().subscribe(
      (data: Product[]) => {
        this.products = data;
        this.store.dispatch(setProducts({ Products: this.products }));
      }
    )
  }

}
