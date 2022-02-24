import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from "@angular/forms";
import {CadastroGruposComponent} from "./cadastro-grupos/cadastro-grupos.component";
import {RouterModule} from "@angular/router";
import { ListagemClienteComponent } from './listagem-cliente/listagem-cliente.component';
import {CadastroClienteComponent} from "./cadastro-cliente/cadastro-cliente.component";
import {LayoutModule} from "../../layout/layout.module";
import { ListagemGrupoComponent } from './listagem-grupo/listagem-grupo.component';
import {NgOrderByPipeModule} from "angular-pipes";



@NgModule({
  declarations: [
    CadastroGruposComponent,
    ListagemClienteComponent,
    CadastroClienteComponent,
    ListagemGrupoComponent

  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    LayoutModule,
    NgOrderByPipeModule

  ],
  exports: [
    CadastroGruposComponent,
    ListagemClienteComponent,
    CadastroClienteComponent,
    ListagemGrupoComponent

  ]
})
export class CadastroModule { }
