<template>
  <form @submit.prevent="registroNuevoUsuario">
    <v-layout justify-center>
      <v-flex xs12 sm10 md8 lg6>
        <v-card>
          <v-flex xs12 sm6>
            <v-text-field
              v-model="idUsuario"
              label="Ingresa tu ID"
              clearable
            ></v-text-field>
          </v-flex>
          <v-flex xs12 sm6>
            <v-text-field
              v-model="email"
              label="Email"
              clearable
            ></v-text-field>
          </v-flex>
          <v-flex xs12 sm6>
            <v-text-field
              v-model="reEmail"
              :rules="[rules.required, rules.min, emailConfirmationRule]"
              label="Confirma tu email"
              hint="Debe coincidir con el email anterior escrito en el campo anterior"
              clearable
            ></v-text-field>
          </v-flex>
          <v-flex xs12 sm6>
            <v-text-field
              v-model="password"
              :rules="[rules.required, rules.min]"
              :type="show2 ? 'text' : 'password'"
              name="input-10-2"
              label="Ingresa tu contraseña"
              hint="Debe tener al menos 8 caracteres"
              value="wqfasds"
              class="input-group--focused"
              @click:append="show2 = !show2"
            ></v-text-field>
          </v-flex>
          <v-flex xs12 sm6>
            <v-text-field
              v-model="rePassword"
              :rules="[rules.required, rules.min, passwordConfirmationRule]"
              :type="show2 ? 'text' : 'password'"
              name="input-10-2"
              label="Confirma tu contraseña"
              hint="Debe coincidir con la contraseña escrita en el campo anterior"
              value="wqfasds"
              class="input-group--focused"
              @click:append="show2 = !show2"
            ></v-text-field>
          </v-flex>
          <v-row>
            <v-col>
              <div class="text-xs-center">
                <v-btn rounded color="error" dark>Registrarme</v-btn>
              </div>
            </v-col>
            <v-col>
              <div class="text-xs-center">
                <v-btn rounded dark>cancelar</v-btn>
              </div>
            </v-col>
          </v-row>
        </v-card>
      </v-flex>
    </v-layout>
  </form>
</template>

<style></style>

<script>
import axios from 'axios'

class Usuario {
  constructor(rol, idUsuario, email, pais, password) {
    this.rol = rol
    this.idUsuario = idUsuario
    this.email = email
    this.pais = pais
    this.password = password
  }
}
export default {
  data() {
    return {
      rol: 'usuario',
      idUsuario: '',
      show2: false,
      pais: 'Chile',
      password: '',
      rePassword: '',
      email: '',
      reEmail: '',
      usuario: new Usuario(),

      rules: {
        required: (value) => !!value || 'Campo obligatorio',
        min: (v) => v.length >= 8 || 'Debe tener al menos 8 caracteres',
      },
    }
  },
  computed: {
    passwordConfirmationRule() {
      return () =>
        this.password === this.rePassword || 'Las contraseñas no coinciden'
    },
    emailConfirmationRule() {
      return () => this.email === this.ReEmail || 'Los email no coinciden'
    },
  },
  methods: {
    registroNuevoUsuario() {
      this.usuario = new Usuario(
        this.rol,
        this.idUsuario,
        this.email,
        this.pais,
        this.password
      )
      axios
        .post('http://localhost:9000/api/Usuario/add', {
          rol: 'usuario',
          idUsuario: this.usuario.idUsuario,
          email: this.usuario.email,
          pais: this.usuario.pais,
          password: this.usuario.password,
        })
        .then((respuesta) => {
          return respuesta.data
        })
        .then((data) => {
          this.$router.push('/')
        })
        .catch(function (error) {
          console.log(error)
        })
    },
  },
}
</script>
