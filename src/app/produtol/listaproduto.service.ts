import { Injectable } from '@angular/core';

import { AngularFireDatabase } from '@angular/fire/database';
import { map } from 'rxjs/operators';

import { Produtol } from '../produtol/produtol';

//form
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class ListaprodutoService {

produtol: Produtol

  constructor(
    private afAuth: AngularFireAuth,
    private db: AngularFireDatabase
  ) { 
    this.produtol = new Produtol
  }


  getAll() {
    return this.db.list('produtol').snapshotChanges()
      .pipe(
        map(changes =>
          changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
        )
      )
  }
  //form
  save(produtol: Produtol) {
    return this.db.list("produtol").push(produtol)
    // .then(
    //   res => {
    //     cliente.id = res.key;
    //     res.set(cliente);
    //   }
    // );
  }

  remove(key) {
    return this.db.list("produtol").remove(key);
  }

  update(key, produtol: Produtol) {
    return this.db.list("produtol").update(key, produtol);
  }

  get(key) {
    return this.db.object<Produtol>("produtol/" + key).valueChanges();
  }

  //form
}
