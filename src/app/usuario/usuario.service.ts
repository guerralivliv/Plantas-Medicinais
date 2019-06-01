import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { map } from 'rxjs/operators';
import { Usuario } from './usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
usuario: Usuario

  constructor(private db: AngularFireDatabase) {
    this.usuario = new Usuario
   }

  insert(usuario: Usuario) {
    this.db.list('usuario').push(usuario)
      .then((result: any) => {
        console.log(result.key);
      });
  }
  getAll() {
    return this.db.list('usuario')
      .snapshotChanges()
      .pipe(
        map(changes => {
          return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
        })
      );
  }

}






/*import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor() { }
}
*/