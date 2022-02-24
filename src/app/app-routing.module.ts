import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CadastroClienteComponent} from "./components/cadastro/cadastro-cliente/cadastro-cliente.component";
import {CadastroGruposComponent} from "./components/cadastro/cadastro-grupos/cadastro-grupos.component";
import {ListagemClienteComponent} from "./components/cadastro/listagem-cliente/listagem-cliente.component";

const routes: Routes = [
  {
    path: 'cadastro-cliente',
    component: CadastroClienteComponent
  },
  {
    path: 'cadastro-grupo',
    component: CadastroGruposComponent
  },
  {
    path: 'listagem-cliente',
    component: ListagemClienteComponent
  },
  {
    path: 'cadastro-cliente/:id',
    component: CadastroClienteComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
