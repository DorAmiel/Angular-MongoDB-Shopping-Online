import { ProductsService } from 'src/app/services/products.service';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Product } from 'src/app/models/product';
import { getProducts, setProducts } from 'src/app/actions/products.actions';
import { selectProductsState, selectProductState } from 'src/app/selectors/products.selector';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';


@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {

  product$: Observable<Product>;
  product: Product = new Product();

  constructor(private productService: ProductsService,
    private store: Store<any>,
    private router: Router
  ) {
    this.product$ = this.store.select(selectProductState);
    this.product$.subscribe(
      (data: Product) => {
        this.product = data;
      });
  }

  ngOnInit(): void {
  }
  createNewProduct(form: any) {
    let product = form.value;
    console.log(product);
    this.productService.addProduct(form.value).subscribe(
      (data: any) => {
        console.log(data);
      })
    console.log("create new product");
  }
}
