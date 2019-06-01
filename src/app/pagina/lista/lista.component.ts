import { Component, OnInit } from '@angular/core';

//lista usuario
import { Usuario } from '../../usuario/usuario';
import { UsuarioService } from '../../usuario/usuario.service';
import { Observable } from 'rxjs';
import { FormusuarioService } from '../../usuario/formusuario.service'
import {Router} from "@angular/router";


@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
  usuarios: Observable<any>;

  constructor(private usuarioService: UsuarioService, 
    private formusuarioService: FormusuarioService, 
    private router: Router) 
    { }

  ngOnInit() {
    this.usuarios = this.usuarioService.getAll();
  }
}


