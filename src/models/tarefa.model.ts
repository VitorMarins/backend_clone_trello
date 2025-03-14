import { Schema, model } from 'mongoose';

const tarefaSchema = new Schema({
    titulo: { type: String, required: true },
});

const Tarefa = model('Tarefa', tarefaSchema);
export default Tarefa;