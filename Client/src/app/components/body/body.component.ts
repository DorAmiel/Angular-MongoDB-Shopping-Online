import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../models/product';
import { Category } from 'src/app/models/category';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent {

  products: Product[] = [];
  @Input() currentCategory: any = new Category();
  currentCategoryId: string = "";


  constructor(
    private router: Router,
    private productService: ProductsService
  ) { }

  ngOnChanges() {
    this.currentCategoryId = this.currentCategory._id;
    if (this.currentCategoryId === '' || this.currentCategoryId === undefined) {
      this.getProducts();
    }
    else {
      this.getProductsByCategory(this.currentCategoryId);
    }
  }

  // ngOnInit(): void {
  //   if (this.currentCategoryId === '') {
  //     this.getProducts();
  //   }
  //   else {
  //     this.getProductsByCategory(this.currentCategoryId);
  //   }
  // }

  //get all products
  getProducts() {
    this.productService.getProducts().subscribe(
      (data: Product[]) => {
        this.products = data;
        console.log(this.products);
      }
    )
  }

  //get products by category
  getProductsByCategory(category: string) {
    this.productService.getProductsByCategory(category).subscribe(
      (data: Product[]) => {
        this.products = data;
        console.log(this.products);
      }
    )
  }


}
