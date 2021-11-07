import mongoosse,{Schema} from 'mongoose';


const estadisticaSchema = new Schema({
    regenSalud: {type: Number},
    critArma: {type: Number},
    armadura: {type: Number},
    resHechizos: {type: Number},
    magickaMax: {type: Number},
    regMagicka: {type: Number},
    critHechizos: {type: Number},
    aguanteMax: {type: Number},
    regAguante: {type: Number},
    danioArma: {type: Number},
    danioHechizos: {type: Number},
    saludMax: {type: Number}

});

const itemSchema = new Schema({
    nombre: {type: String, required: true},
    estadistica: {type: estadisticaSchema, required: true},
    efecto: {type: [String], required: true},
    categoria: {type: String, required: true},
    peso: {type: String, required: true},
    nivel: {type: Number, required: true},
    calidad: {type: String, required: true},
    familia: {type: Schema.ObjectId, ref: 'Familia', required: true}
});

const Item = mongoosse.model('Item',itemSchema);

export default Item;