import { Component, OnInit } from '@angular/core';
import {Grupo} from "../../../shared/model/grupo";
import {GrupoService} from "../../../shared/services/grupo.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-cadastro-grupos',
  templateUrl: './cadastro-grupos.component.html',
  styleUrls: ['./cadastro-grupos.component.scss']
})
export class CadastroGruposComponent implements OnInit {

  grupo!: Grupo;
  grupos!: Array<Grupo>;

  constructor(private grupoService: GrupoService, private rotaAtual: ActivatedRoute, private roteador: Router) {
    this.grupo = new Grupo();
    this.grupos = new Array<Grupo>();
    if (this.rotaAtual.snapshot.paramMap.has('id')) {
      const idParaEdicao = (this.rotaAtual.snapshot.paramMap.get('id'));
      this.grupoService.pesquisarPorID(idParaEdicao!).subscribe(
        grupoRetornado => this.grupo = grupoRetornado
      );
    }
  }

  ngOnInit(): void {
    this.listar()
  }

  listar() {
    this.grupoService.listar().subscribe(
      grupos => {
        this.grupos = grupos;
      }
    )
  }

  cadastrarGrupo(){
    if (this.grupo.id) {
      this.grupoService.atualizar(this.grupo).subscribe(
        grupoAlterado => {
          console.log(grupoAlterado);
          this.roteador.navigate(['listagem-grupo']);
        }
      )
    }else {
      this.grupoService.cadastrarGrupo(this.grupo).subscribe(
        clienteCadastrado =>  {
          console.log(clienteCadastrado)
          this.roteador.navigate(['listagem-cliente'])
        }
      );

      this.grupo = new Grupo();
    }
  }

}
