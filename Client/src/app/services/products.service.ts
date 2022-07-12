import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
 
  URL = "http://127.0.0.1:5000/products"
  constructor(private http: HttpClient) { }

  /** GET Products from the server */
  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.URL)
  }

  /** GET Product by id. Will 404 if id not found */
  getProduct(id: string): Observable<Product> {
    return this.http.get<Product>(`${this.URL}/${id}`)
  }


  /** GET Product by id. Will 404 if id not found */
  delProduct(id: string): Observable<Product> {
    return this.http.delete<Product>(`${this.URL}/${id}`)
  }

  /** create a  Product  */
  addProduct(product: Product): Observable<any> {
    console.log('service add')
    return this.http.post<any>(`${this.URL}`, {"productName": product.productName, "categoryId": product.categoryId, "price": product.price, "image": product.image})
  }
}