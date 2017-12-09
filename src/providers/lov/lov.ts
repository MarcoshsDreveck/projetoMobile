import { Tarefa } from './../../model/tarefas';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { EstadoTarefa } from '../../model/EstadoTarefa';


@Injectable()
export class LovProvider {

  getTarefaStates():Array<EstadoTarefa>{
    return [EstadoTarefa.NOVA, EstadoTarefa.EXECUTANDO, EstadoTarefa.FINALIZADA]
  }

  getTarefas(): Tarefa{
    return new Tarefa();
    
  }

}