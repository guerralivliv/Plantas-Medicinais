import { Component, OnInit, Input } from '@angular/core';

//cadastrando firebase
import { Usuario } from './../usuario';
import { UsuarioService } from '../usuario.service';
import { FormusuarioService } from './../formusuario.service';
import {Router} from "@angular/router";


@Component({
  selector: 'app-formusuario',
  templateUrl: './formusuario.component.html',
  styleUrls: ['./formusuario.component.css']
})

export class FormusuarioComponent implements OnInit {

  usuario: Usuario
  key: string = '';

   id = null;

  constructor(private usuarioService: UsuarioService, 
    private formusuarioService: FormusuarioService, 
    private router: Router
   ) 
    { }

  ngOnInit(): void {
    this.usuario = new Usuario();
    this.formusuarioService.currentUsuario.subscribe(data => {
      if (data.usuario && data.key) {
        this.usuario = new Usuario();
        this.usuario.nome = data.usuario.nome;
        this.usuario.email = data.usuario.email;
        this.usuario.pws = data.usuario.pws;
        this.usuario.confpws = data.usuario.confpws;
        this.key = data.key;
      }
    })
  }

  onSubmit(form) {
	this.usuarioService.insert(this.usuario);
    	this.router.navigate(['/usuario']);

      this.usuario = new Usuario();
      
      //formulario 

      if (this.id == null) {
        this.usuarioService.save(this.usuario)
          .then(
            res => {
              alert(this.usuario.nome + ". Já tá salvo!");
              form.reset();
              this.usuario = new Usuario;
              this.router.navigate(['/usuario']);
            },
            err => {
              alert( "Ops!! Deu erro ao salvar!" + err);
            }
          )
      } else {
        this.usuarioService.update(this.id, this.usuario)
          .then(
            res => {
              this.id = null;
              alert(this.usuario.nome + ". Foi atualizado!");
              form.reset();
              this.usuario = new Usuario;
              this.router.navigate(['/usuario']);
            },
            err => {
              alert( "Ops!! Deu erro na atualização!" + err);
            }
          );
      }
      //fim formulario
  }
}

