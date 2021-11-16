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
    const user = await models.Usuario.findOne({_id:__id});
    if (user){
        const token = jwt.sign({_id:__id},'clavesecretaparagenerartoken',{expiresIn:'1d'});
        return {token};
    } else {
        return false;
    }
}
async function encode(_id, nombreUsuario){
    const token = jwt.sign({_id:_id,usuario: nombreUsuario},'clavesecretaparagenerartoken',{expiresIn: '1d'});
    return token;
}
async function decode(token){
    try {
        const {_id} = await jwt.verify(token,'clavesecretaparagenerartoken');
        console.log(_id)
        const user = await models.Usuario.findOne({_id});
        if (user){
            console.log('usuario' + user) 
            return user;
        } else{
            console.log('retorne falso') 
            return false;
        }
    } catch (e){
        const newToken = await checkToken(token);
        return newToken;
    }
} 
module.exports = { checkToken, encode, decode}