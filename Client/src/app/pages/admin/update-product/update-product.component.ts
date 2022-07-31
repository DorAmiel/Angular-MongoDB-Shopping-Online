import { ProductsService } from 'src/app/services/products.service';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Product } from 'src/app/models/product';
import { getProduct, setProduct, getProducts, setProducts } from 'src/app/actions/products.actions';
import { selectProductState, selectProductsState } from 'src/app/selectors/products.selector';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';


@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {

  products$: Observable<Product[]>;
  products: Product[] = [];
  product$: Observable<Product>;
  product: Product = new Product();

  constructor(private productService: ProductsService,
    private store: Store<any>,
    private router: Router
  ) {
    this.products$ = this.store.select(selectProductsState);
    this.products$.subscribe(
      (data: Product[]) => {
        this.products = data;
      });
    this.product$ = this.store.select(selectProductState);
    this.product$.subscribe(
      (data: Product) => {
        this.product = data;
      });
  }

  ngOnInit(): void {
    // this.store.dispatch(getProduct({Product: this.product}));
    // this.store.dispatch(getProducts());
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
