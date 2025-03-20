import { Schema, model, Document } from 'mongoose';

interface IColuna extends Document {
    titulo: string;
    tarefas: Schema.Types.ObjectId[];
}

const ColunaSchema: Schema = new Schema({
    titulo: { type: String, required: true },
    tarefas: [{ type: Schema.Types.ObjectId, ref: 'Tarefa' }],
});

const Coluna = model<IColuna>('Coluna', ColunaSchema);

export { IColuna, Coluna };