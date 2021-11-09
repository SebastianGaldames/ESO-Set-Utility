<template>
  <form @submit.prevent="buscarPerfil">
    <v-layout justify-center>
      <v-flex xs12 sm10 md8 lg6>
        <v-card>
          <v-flex xs12 sm6>
            <v-text-field
              v-model="usuario"
              input
              type="usuario"
              label="Usuario"
              hint="Ingresa tu Usuario"
              clearable
            ></v-text-field>
          </v-flex>

          <v-flex xs12 sm6>
            <v-text-field
              v-model="password"
              :rules="[rules.required, rules.min]"
              :type="show2 ? 'text' : 'password'"
              name="password"
              label="Contraseña"
              hint="Ingresa tu contraseña"
              value="wqfasds"
              class="input-group--focused"
              @click:append="show2 = !show2"
            ></v-text-field>
          </v-flex>
          <v-col>
            <v-row>
              <div>
                <v-btn text small>¿Olvidaste tu contraseña?</v-btn>
              </div>
            </v-row>
            <v-row>
              <div class="text-xs-center">
                <v-btn type="buscar-perfil" rounded color="error" dark
                  >Iniciar Sesión</v-btn
                >
              </div>
            </v-row>
            <v-row>
              <div>
                ¿No tienes cuenta?
                <v-btn text small>Regístrate</v-btn>
              </div>
            </v-row>
          </v-col>
        </v-card>
      </v-flex>
    </v-layout>
  </form>
</template>

<style></style>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      show2: false,
      password: '',
      usuario: '',
      errorM: '',

      rules: {
        required: (value) => !!value || 'Campo obligatorio',
        min: (v) => v.length >= 8 || 'Debe tener al menos 8 caracteres',
      },
    }
  },
  methods: {
    /**
     * @author Francisco Quevedo
     * Busca si existe un usuario en la base de datos con los parametros tomados del front
     * si lo encuentra guarda un token que contiene el rol, nombre usuario y id
     */
    buscarPerfil() {
      axios
        .post('http://localhost:9000/Usuario/login', {
          // HAY QUE USAR LA VARIABLE DE ENTORNO
          usuario: this.usuario,
          password: this.password,
        })
        .then((respuesta) => {
          return respuesta.data
        })
        .then((data) => {
          this.$store.dispatch('guardarToken', data.tokenReturn)
          console.log(data.tokenReturn)
          if (this.$store.state.usuario.rol === 'admin') {
            this.$router.push('/') // push a admin??
          } else {
            console.log('FUNCIONA')
            this.$router.push('/') // push a cuenta de usuario pendiente
          }
        })
        .catch((error) => {
          this.errorM = null
          if (error.response.status === 404) {
            this.errorM =
              'No existe el usuario o las condiciones son incorrectas'
            console.log(this.errorM)
          } else {
            this.errorM = 'Ocurrio un error con el servidor'
          }
          console.log(error)
        })
    },
  },
}
</script>
