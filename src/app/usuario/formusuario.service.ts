import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Usuario } from './usuario';
@Injectable({
  providedIn: 'root'
})
export class FormusuarioService {
  private usuarioSource = new BehaviorSubject({ usuario: null, key: '' });
  currentUsuario = this.usuarioSource.asObservable();
  constructor() { }
}










/*import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormusuarioService {

  constructor() { }
}
*/