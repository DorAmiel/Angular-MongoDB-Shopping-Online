import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { CartProduct } from '../../models/cart-product';
import { CartProductService } from 'src/app/services/cart-product.service';
import { ProductsService } from 'src/app/services/products.service';


@Component({
  selector: 'app-basket-product',
  templateUrl: './basket-product.component.html',
  styleUrls: ['./basket-product.component.css']
})
export class BasketProductComponent {

  @Input() cartProductId: any;

  product: any;
  cartProduct: any;

  constructor(private cartProductService: CartProductService, private productsService: ProductsService) { }

  ngOnChanges() {
    this.getProduct(this.cartProductId)
  };


  async getProduct(id: string) {
    this.cartProduct = await this.cartProductService.getCartProduct(id).toPromise()

    this.productsService.getProduct(this.cartProduct.productId).subscribe(product => {
      this.product = product
      console.log(this.product);
    });
  }

  amountPlus() {
    this.cartProduct.amount += 1
    this.updateCartProduct(this.cartProduct)
  }

  amountMinus() {
    this.cartProduct.amount -= 1
    this.updateCartProduct(this.cartProduct)
  }

  async updateCartProduct(cartProduct: any) {
    await this.cartProductService.updateCartProduct(cartProduct).toPromise()
  }
}
