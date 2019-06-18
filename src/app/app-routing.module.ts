import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormusuarioComponent } from './usuario/formusuario/formusuario.component';
import { MainComponent } from './pages/main/main.component';
import { LoginentraComponent } from './entra/loginentra/loginentra.component';
import { AddProdutoComponent } from './produtol/add/add-produto/add-produto.component';


const routes: Routes = [
  {path:'usuario', component: FormusuarioComponent},
  {path:'', component: MainComponent},
  {path:'entra', component: LoginentraComponent},
  {path:'produtol', component: AddProdutoComponent},
 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
