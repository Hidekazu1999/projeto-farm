import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {Grupo} from "../../../shared/model/grupo";
import {GrupoService} from "../../../shared/services/grupo.service";

@Component({
  selector: 'app-listagem-grupo',
  templateUrl: './listagem-grupo.component.html',
  styleUrls: ['./listagem-grupo.component.scss']
})
export class ListagemGrupoComponent implements OnInit {

  grupo!: Grupo[];
  mostrarColunas = ['Id','Código','Descrição', 'Ações'];
  filtro: string = '';


  constructor(private grupoService : GrupoService, private roteador: Router) { }

  ngOnInit(): void {
    this.grupoService.listar().subscribe(
      dados => this.grupo =  dados
    );
  }

  editar(grupo: Grupo): void {
    this.roteador.navigate(['cadastro-grupo', grupo.id]).then(_r => {
      return this.grupoService;
    })
  }
  apagar(id: string): void {
    this.grupoService.remover(id).subscribe(
      _remover => {
        const index = this.grupo.findIndex(grupo => grupo.id === id);
        if (index > -1) {
          this.grupo.splice(index, 1);
        }
      }
    )
  }
}
