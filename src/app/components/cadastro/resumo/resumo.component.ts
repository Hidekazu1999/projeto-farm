import { Component, OnInit } from '@angular/core';
import {Cliente} from "../../../shared/model/cliente";
import {Grupo} from "../../../shared/model/grupo";
import {ClienteService} from "../../../shared/services/cliente.service";
import {GrupoService} from "../../../shared/services/grupo.service";

@Component({
  selector: 'app-resumo',
  templateUrl: './resumo.component.html',
  styleUrls: ['./resumo.component.scss']
})
export class ResumoComponent implements OnInit {

  cliente!: Cliente[];
  grupo!: Grupo[];
  mostrarColunas = ['Código Grupo','Código Cliente','Nome', 'Telefone', 'Email'];
  filtro: string = '';


  constructor(private clienteService: ClienteService, private grupoService: GrupoService) { }

  ngOnInit(): void {
    this.clienteService.listar().subscribe(
      dados => this.cliente =  dados
    );
    this.grupoService.listar().subscribe(
      dados => this.grupo =  dados
    );
  }
  contadorCliente(){
    var count = Object.keys(this.cliente).length;
    console.log(count);
  }

  contadorGrupo(){
    var count = Object.keys(this.grupo).length;
    console.log(count);
  }
}
