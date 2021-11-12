// const decode = require('jwt-decode')
import decode from 'jwt-decode'
// Nuestro almacenamiento
export const state = () => ({
  token: null,
  usuario: null,
})

// Las usamos para llamar a las mutations
// Podemos usarlas como asincronas, por ejemplo si queremos cargar algun dato del backend y guardarlo en el state
export const actions = {
  guardarToken({ commit }, token) {
    commit('setToken', token)
    const user = decode(token)
    commit('setUsuario', user.nombreUsuario)
    localStorage.setItem('token', token)
  },
  autoLogin({ commit }) {
    const token = localStorage.getItem('token')
    if (token) {
      // console.log(token + "    TOKEN ENCONTRADO!!!!!");
      commit('setToken', token)
      commit('setUsuario', decode(token))
    } else {
      console.log('No Logueado')
    }
  },
  salir({ commit }) {
    commit('setToken', null)
    commit('setUsuario', null)
    localStorage.removeItem('token')
  },
}

// Se utilizan para obtener datos del state
export const getters = {
  obtenerUsuario(state) {
    return state.usuario
  },
}

// Se utilizan cuando se desea cambiar state o almacenamiento
export const mutations = {
  setToken(state, token) {
    state.token = token
  },
  setUsuario(state, usuario) {
    state.usuario = usuario
    // console.log(usuario.nombreUsuario)
  },
}
