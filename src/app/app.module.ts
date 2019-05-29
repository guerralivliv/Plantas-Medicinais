import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormprodutoComponent } from './produto/formproduto/formproduto.component';
import { FormusuarioComponent } from './usuario/formusuario/formusuario.component';
import { MainComponent } from './pages/main/main.component';


@NgModule({
  declarations: [
    AppComponent,
    FormprodutoComponent,
    FormusuarioComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
