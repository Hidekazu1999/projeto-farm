import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CadastroClienteComponent} from "./components/cadastro/cadastro-cliente/cadastro-cliente.component";
import {CadastroGruposComponent} from "./components/cadastro/cadastro-grupos/cadastro-grupos.component";
import {ListagemClienteComponent} from "./components/cadastro/listagem-cliente/listagem-cliente.component";
import {ListagemGrupoComponent} from "./components/cadastro/listagem-grupo/listagem-grupo.component";
import {ResumoComponent} from "./components/cadastro/resumo/resumo.component";

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: ListagemClienteComponent
  },
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
  },
  {
    path: 'listagem-grupo',
    component: ListagemGrupoComponent
  },
  {
    path: 'cadastro-grupo/:id',
    component: CadastroGruposComponent
  },
  {
    path: 'resumo',
    component: ResumoComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
