import { Schema, model } from 'mongoose';

const colunaSchema = new Schema({
    titulo: { type: String, required: true },
    tarefas: [{ type: Schema.Types.ObjectId, ref: 'Tarefa' }],
});

const Coluna = model('Coluna', colunaSchema);
export default Coluna;