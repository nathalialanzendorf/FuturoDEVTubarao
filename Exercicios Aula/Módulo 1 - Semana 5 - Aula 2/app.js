
import Pessoa from './Pessoa.js'
//import { Pessoa, getNomeCompleto } from './pessoa.js';
//import { Tarefa } from './tarefa.js';
import Tarefa from './tarefa.js';
import TarefaCategoria from './tarefa_categoria.js';

const pessoa = new Pessoa('João', 'Silva', 30);
const tarefa = new Tarefa(1, 'Estudar JavaScript', 1);
const tarefaCategoria = new TarefaCategoria(1, 'Estudos');

console.log(getNomeCompleto());
console.log(pessoa.getNomeCompleto());
