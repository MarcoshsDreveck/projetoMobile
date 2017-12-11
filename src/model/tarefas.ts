import { EstadoTarefa } from "./EstadoTarefa";


  export class Tarefa {
    keyReference: string;
    titulo: string;
    descricao?: string;
    state: EstadoTarefa;
    datatermino: string;
    empresanome: string;


    constructor(titulo?: string, descricao?: string, datatermino?: string, empresanome?: string){
        this.titulo = titulo;
        this.descricao = descricao;
        this.state = EstadoTarefa.NOVA;
        this.datatermino = datatermino;
        this.empresanome = empresanome;
    }
}
