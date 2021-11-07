import mongoosse,{Schema} from 'mongoose';

const familiaSchema = new Schema({
    nombre: {type: String, required: true},
    ubicacion: {type: [String], required: true},
});

const Familia = mongoosse.model('Familia',familiaSchema);

export default Familia;