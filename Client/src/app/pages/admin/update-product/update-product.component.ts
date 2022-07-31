import { ProductsService } from 'src/app/services/products.service';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Product } from 'src/app/models/product';
import { selectProductState } from 'src/app/selectors/products.selector';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/services/categories.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {

  product$: Observable<Product>;
  product: any = new Product();
  categories: any[] = [];
  constructor(private productService: ProductsService,
    private store: Store<any>,
    private categoryService: CategoryService,
    private router: Router
  ) {
    this.product$ = this.store.select(selectProductState);
    this.product$.subscribe(
      (data: any) => {
        console.log(data);
        if (data.length <= 0) {
          this.router.navigate(['/admin/']);
        }
        this.product = data;
      });
  }

  ngOnInit(): void {

    this.getCategories();
  }

  updateProduct(form: any) {
    this.productService.addProduct(form.value).subscribe(
      (data: any) => {
        this.router.navigate(['/admin/products']);
      })
  }

  getCategories() {
    this.categoryService.getCategories().subscribe(
      data => {
        this.categories = data;
      }
    );
  }
}
