import { Component, OnInit } from '@angular/core';

import {Tarefa, TarefaService} from '../shared';

@Component({
  selector: 'app-listar-tarefa',
  templateUrl: './listar-tarefa.component.html',
  styleUrls: ['./listar-tarefa.component.css']
})
export class ListarTarefaComponent implements OnInit {

  tarefas: Tarefa[];

  constructor(private tarefasService: TarefaService) { }

  ngOnInit() {
    this.tarefas = this.listarTodos();
  }

  listarTodos(): Tarefa[] {
    return this.tarefasService.listarTodos();
  }

  remover($event: any, tarefa: Tarefa): void {
    $event.preventDefault();
    if (confirm('Deseja remover a tarefa: "' + tarefa.nome + '"?')) {
      this.tarefasService.remover(tarefa.id);
      this.tarefas = this.listarTodos();
    }
  }

  alterarStatus(tarefa: Tarefa) {
    if (confirm('Deseja alterar o status da tarefa: "' + tarefa.nome + '"?')) {
      this.tarefasService.alterarStatus(tarefa.id);
      this.tarefas = this.listarTodos();
    }
  }

}
