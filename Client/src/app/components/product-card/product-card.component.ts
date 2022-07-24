import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { CartProductService } from 'src/app/services/cart-product.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

  @Input() product: any;
  currentUser: any = JSON.parse(localStorage.getItem('user') || '{}');

  constructor(private cartProductService: CartProductService, private router: Router) { }

  ngOnInit(): void {
  }

  addToCart(product: any) {
    console.log(product._id);
    console.log(this.currentUser.cartId);
    this.cartProductService.addCartProduct({ productId: product._id, cartId: this.currentUser.cartId }).subscribe(
      (data: any) => {
        console.log(data);
        this.ngOnInit();

        this.router.navigateByUrl('', { skipLocationChange: true }).then(() => {
          this.router.navigate(['/home']);
        });
      })
  }

}
