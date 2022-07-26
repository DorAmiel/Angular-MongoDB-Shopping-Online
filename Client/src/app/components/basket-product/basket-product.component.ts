import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { CartProduct } from '../../models/cart-product';
import { CartProductService } from 'src/app/services/cart-product.service';
import { ProductsService } from 'src/app/services/products.service';
import { CartService } from 'src/app/services/cart.service';


@Component({
  selector: 'app-basket-product',
  templateUrl: './basket-product.component.html',
  styleUrls: ['./basket-product.component.css']
})
export class BasketProductComponent {

  @Input() cartProductId: any;

  product: any;
  cartProduct: any;

  constructor(private cartProductService: CartProductService, private productsService: ProductsService, private cartService: CartService) { }

  ngOnChanges() {
    this.getProduct(this.cartProductId)
  };


  async getProduct(id: string) {
    this.cartProduct = await this.cartProductService.getCartProduct(id).toPromise()

    this.productsService.getProduct(this.cartProduct.productId).subscribe(product => {
      this.product = product
    });
  }

  amountPlus() {
    this.cartProduct.amount += 1
    this.updateCartProduct(this.cartProduct)
    this.updateCartTotalPrice(this.cartProduct.cartId, this.cartProduct.totalPrice)
  }

  amountMinus() {
    this.cartProduct.amount -= 1
    this.updateCartProduct(this.cartProduct)
    this.updateCartTotalPrice(this.cartProduct.cartId, -this.cartProduct.totalPrice)
  }

  async updateCartProduct(cartProduct: any) {
    await this.cartProductService.updateCartProduct(cartProduct).toPromise()
  }

  async updateCartTotalPrice(cartId: any, price: any) {
    const cart = await this.cartService.getCartById(cartId).toPromise()
    if (cart) {
      cart.totalPrice += price
    }
    await this.cartService.updateCart(cart).toPromise()
  }
}
