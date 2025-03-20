import { Schema, model, Document } from 'mongoose';

interface ITarefa extends Document {
    titulo: string;
    usuarioId: Schema.Types.ObjectId;
}

const TarefaSchema: Schema = new Schema({
    titulo: { type: String, required: true },
    usuarioId: { type: Schema.Types.ObjectId, ref: 'Usuario', required: true }
});

const Tarefa = model<ITarefa>('Tarefa', TarefaSchema);

export { ITarefa, Tarefa };