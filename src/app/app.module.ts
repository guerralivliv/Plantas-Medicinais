import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormprodutoComponent } from './produto/formproduto/formproduto.component';
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




@NgModule({
  declarations: [
    AppComponent,
    FormprodutoComponent,
    FormusuarioComponent,
    MainComponent,
    LoginentraComponent,
    ListaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
      AngularFireModule.initializeApp(environment.firebase),
      AngularFireDatabaseModule,
      FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
