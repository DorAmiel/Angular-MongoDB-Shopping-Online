import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { selectUserState } from '../../selectors/user.selector';
import { User } from '../../models/user';
import { Observable } from 'rxjs';
import { ProductsService } from 'src/app/services/products.service';
import { Product } from 'src/app/models/product';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  user$: Observable<any>;
  user: User = new User();
  products: any = [];
  constructor(private store: Store, private router: Router, private productService: ProductsService) {
    this.user$ = this.store.select(selectUserState);
    this.user$.subscribe(user => {
      this.user = user;
    });
  }

  ngOnInit(): void {
    console.log(this.user);
    
    if (this.user.role !== 'admin') {
      this.router.navigate(['/']);
    }
    this.getProducts();
  }

  getProducts() {
    this.productService.getProducts().subscribe(
      (data: Product[]) => {
        this.products = data;
        console.log(this.products[this.products.length - 1]);
      }
    )
  }
  createNewProductPage(){
    this.router.navigate(['/admin/update-product']);
  }
  updateProductPage(){
    this.router.navigate(['/admin/update-product']);
  }
}
