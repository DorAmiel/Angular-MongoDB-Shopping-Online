import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryService } from '../../../services/categories.service';
import { Category } from '../../../models/category';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getCart } from 'src/app/actions/cart.actions';
import { selectCartState } from 'src/app/selectors/cart.selector';
import { Cart } from 'src/app/models/cart';

@Component({
  selector: 'app-navbar-down',
  templateUrl: './navbar-down.component.html',
  styleUrls: ['./navbar-down.component.css']
})
export class NavbarDownComponent implements OnInit {

  categories: Category[] = [];
  currentCategory: Category = new Category();
  @Output() categoryEmmiter = new EventEmitter();
  cart$: Observable<any>;
  currentCart: any = new Cart();
  constructor(
    private router: Router,
    private categoryService: CategoryService,
    private store: Store
  ) {
    this.cart$ = this.store.select(selectCartState);
  }

  ngOnInit(): void {
    this.getCategories();
    this.cart$.subscribe(cart => {
      this.currentCart = cart;
    });
  }


  //get all categories
  getCategories() {
    this.categoryService.getCategories().subscribe(
      data => {
        this.categories = data;
      }
    );
  }

  //get current category
  getCurrentCategory(category: Category) {
    this.currentCategory = category;
    this.categoryEmmiter.emit(this.currentCategory);
  }
}

