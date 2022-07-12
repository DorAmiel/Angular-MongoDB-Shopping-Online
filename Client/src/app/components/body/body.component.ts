import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../models/product';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  constructor(
    private router: Router,
    private productService: ProductsService
  ) { }

  array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  products: Product[] = [];


  ngOnInit(): void {
    this.getProducts();
  }

  //get all products
  getProducts() {
    this.productService.getProducts().subscribe(
      (data: Product[]) => {
        this.products = data;
        console.log(this.products);

      }
    )
  }

}
