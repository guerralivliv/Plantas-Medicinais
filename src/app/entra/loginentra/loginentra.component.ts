import { Component, OnInit } from '@angular/core';

//FireBase
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';


@Component({
  selector: 'app-loginentra',
  templateUrl: './loginentra.component.html',
  styleUrls: ['./loginentra.component.css']
})
export class LoginentraComponent implements OnInit {

  private email: string = null;
  private senha: string = null;

  constructor(
    private afAuth: AngularFireAuth
  ) { }

  ngOnInit() {
  }
 // login
 onSubmit(form) {
  this.login();
}

login() {
  this.afAuth.auth.signInWithEmailAndPassword(this.email, this.senha)
    .then(
      res => {
        console.log(res);
      }
      ,
      err => {
        console.log("Usuario não localizado!" + err);
        alert("Usuário não localizado!");
      }
    ).catch(
      err => {
        //console.log("Erro ao conectar");  
        alert("Não foi possivel conectar ao sistema.\nTente mais tarde!");
      }
    )
}
logout() {
  this.afAuth.auth.signOut();
}
 //login
}
