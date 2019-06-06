import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { map } from 'rxjs/operators';
import { Usuario } from './usuario';

//form
import { AngularFireAuth } from '@angular/fire/auth';



@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
usuario: Usuario

  constructor(
    private db: AngularFireDatabase,
    private afAuth: AngularFireAuth
  ) {
    this.usuario = new Usuario
   }

  insert(usuario: Usuario) {
    this.db.list('usuario').push(usuario)
      .then((result: any) => {
        console.log(result.key);
      });
  }

  // form
  getAll() {
    return this.db.list('usuario').snapshotChanges()
      .pipe(
        map(changes =>
          changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
        )
      )
  }

  save(usuario: Usuario) {
    return this.db.list("usuario").push(usuario)
    // .then(
    //   res => {
    //     cliente.id = res.key;
    //     res.set(cliente);
    //   }
    // );
  }

  remove(key) {
    return this.db.list("usuario").remove(key);
  }

  update(key, usuario: Usuario) {
    return this.db.list("usuario").update(key, usuario);
  }

  get(key) {
    return this.db.object<Usuario>("usuario/" + key).valueChanges();
  }

  saveAuth(usuario: Usuario) {
    this.afAuth.auth.createUserWithEmailAndPassword(usuario.email, usuario.pws);
  }

//form
}






/*import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor() { }
}
*/