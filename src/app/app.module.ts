import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormusuarioComponent } from './usuario/formusuario/formusuario.component';
import { MainComponent } from './pages/main/main.component';
import { LoginentraComponent } from './entra/loginentra/loginentra.component';

// conexão firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';

import { FormsModule } from '@angular/forms';
//lista
import { ListaComponent } from './pagina/lista/lista.component';

//form 
import { AngularFireAuthModule } from '@angular/fire/auth';
import { ListaprodutoComponent } from './produtol/listaproduto/listaproduto.component';
import { AddProdutoComponent } from './produtol/add/add-produto/add-produto.component';






@NgModule({
  declarations: [
    AppComponent,
    FormusuarioComponent,
    MainComponent,
    LoginentraComponent,
    ListaComponent,
    ListaprodutoComponent,
    AddProdutoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
      AngularFireModule.initializeApp(environment.firebase),
      AngularFireDatabaseModule,
      FormsModule,
      AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
