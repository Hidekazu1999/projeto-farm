import {Component, Input, OnInit} from '@angular/core';
import {Cliente} from "../../../shared/model/cliente";
import {ClienteService} from "../../../shared/services/cliente.service";
import {ActivatedRoute, Router} from "@angular/router";
import {GrupoService} from "../../../shared/services/grupo.service";
import {Grupo} from "../../../shared/model/grupo";

@Component({
  selector: 'app-cadastro-cliente',
  templateUrl: './cadastro-cliente.component.html',
  styleUrls: ['./cadastro-cliente.component.scss']
})
export class CadastroClienteComponent implements OnInit {

  cliente!: Cliente;
  clientes: Array<Cliente>;
  @Input() grupo!: Grupo;
  @Input() grupos!: Array<Grupo>;

  constructor(private grupoService: GrupoService, private clienteService: ClienteService, private rotaAtual: ActivatedRoute, private roteador: Router) {
    this.cliente = new Cliente();
    this.clientes = new Array<Cliente>();
    if (this.rotaAtual.snapshot.paramMap.has('id')) {
      const idParaEdicao = (this.rotaAtual.snapshot.paramMap.get('id'));
      this.clienteService.pesquisarPorID(idParaEdicao!).subscribe(
        clienteRetornado => this.cliente = clienteRetornado
      );
    }
  }
  ngOnInit(): void  {
    this.grupoService.listar().subscribe(
      grupos => {
        console.log(this.grupos); this.grupos = grupos;
      }
    )
    this.listar()
  }

  listar() {
    this.clienteService.listar().subscribe(
      clientes => {
        this.clientes = clientes;
      }
    )
  }

  cadastrarCliente(){
    if (this.cliente.id) {
      this.clienteService.atualizar(this.cliente).subscribe(
        clienteAlterado => {
          console.log(clienteAlterado);
          this.roteador.navigate(['listagem-cliente']);
        }
      )
    }else {
      this.clienteService.cadastrarCliente(this.cliente).subscribe(
        clienteCadastrado =>  {
          console.log(clienteCadastrado)
          this.roteador.navigate(['listagem-cliente'])
        }
      );

      this.cliente = new Cliente();
    }
  }
}
