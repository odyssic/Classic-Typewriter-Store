import { AngularFireDatabase } from '@angular/fire/database';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private db: AngularFireDatabase) { }

  getCategories() {
    return this.db.list('/categories', query => query.orderByChild('name'))
      .snapshotChanges()
      .map(actions =>
        actions.map(a => ({ key: a.payload.key, ...(a.payload.val() as {}) }))
      )

  }
}





