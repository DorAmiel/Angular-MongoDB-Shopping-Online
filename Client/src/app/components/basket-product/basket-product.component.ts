import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-basket-product',
  templateUrl: './basket-product.component.html',
  styleUrls: ['./basket-product.component.css']
})
export class BasketProductComponent {

  @Input() cartProductId: any;

  constructor() { }

  ngOnChanges() {
  };


  // getProduct(id: string): Observable<Product> {
  //   console.log(id)
  // }

}
