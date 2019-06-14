import { Injectable } from '@angular/core';

import { AngularFireDatabase } from '@angular/fire/database';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ListaprodutoService {

  constructor(
    private db: AngularFireDatabase,
  ) { }


  getAll() {
    return this.db.list('produtol').snapshotChanges()
      .pipe(
        map(changes =>
          changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
        )
      )
  }
}
