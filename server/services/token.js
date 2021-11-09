const jwt  = require('jsonwebtoken')
const models = require('../models')

/**
 * @author Francisco Quevedo
 * @param {*} token 
 * @returns 
 * retorna el token y el rol del usuario del token
 */
async function checkToken(token){
    const __id = null;
    try{
        const {_id}= await jwt.decode(token);
        __id = _id;
    } catch (e){
        return false;
    }
    const user = await models.Usuario.findOne({_id:__id,estado:1});
    if (user){
        const token = jwt.sign({_id:__id},'clavesecretaparagenerartoken',{expiresIn:'1d'});
        return {token,rol:user.rol};
    } else {
        return false;
    }
}
async function encode(_id, rol, nombreUsuario){
    const token = jwt.sign({_id:_id,rol:rol,nombreUsuario: nombreUsuario},'clavesecretaparagenerartoken',{expiresIn: '1d'});
    return token;
    
} 
async function decode(token){
    try {
        const {_id} = await jwt.verify(token,'clavesecretaparagenerartoken');
        const user = await models.Usuario.findOne({_id,estado:1});
        if (user){
            return user;
        } else{
            return false;
        }
    } catch (e){
        const newToken = await checkToken(token);
        return newToken;
    }
} 