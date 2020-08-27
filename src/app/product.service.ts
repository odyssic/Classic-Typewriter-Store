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
<<<<<<< HEAD
    return this.db.list('/products');
  }
=======

    return this.db.list('/products');
  }

  getProduct(productId) {
    console.log('productId', productId)
    let returnUrl = this.db.object('/products/' + productId)
    return returnUrl

  }
>>>>>>> eb77833f90cb03c334f0a158d5c094cc311d274b
}
