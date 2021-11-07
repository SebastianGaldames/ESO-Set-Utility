import mongoosse,{Schema} from 'mongoose';

const personajeSchema = new Schema({
    nombre: {type: String, required: true},
    items: {type: [Schema.ObjectId], ref: 'Item'}
});

const Personaje = mongoosse.model('Personaje',personajeSchema);

export default Personaje;