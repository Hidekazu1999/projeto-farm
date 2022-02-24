import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from "@angular/forms";
import {CadastroGruposComponent} from "./cadastro-grupos/cadastro-grupos.component";
import {RouterModule} from "@angular/router";
import { ListagemClienteComponent } from './listagem-cliente/listagem-cliente.component';



@NgModule({
  declarations: [
    CadastroGruposComponent,
    ListagemClienteComponent

  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule

  ],
  exports: [
    CadastroGruposComponent,
    ListagemClienteComponent

  ]
})
export class CadastroModule { }
