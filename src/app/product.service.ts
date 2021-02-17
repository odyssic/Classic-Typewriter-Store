import { Observable } from 'rxjs';
import { AngularFireDatabase } from '@angular/fire/database';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {


  constructor(private db: AngularFireDatabase) { }

  create(product) {
    return this.db.list('/products').push(product);

  }

  getAll() {
    return this.db.list('/products').snapshotChanges();
  }

  getProduct(productId) {
    return this.db.object('/products/' + productId);
  }

  // getProduct(productId): Observable<ProductService> {
  //   return this.db.object<Product>('/products/' + productId);
  //   from https://forum.codewithmosh.com/d/2905-edit-link-is-rendering-undefine-product-id-for-editing/23
  // }

}
