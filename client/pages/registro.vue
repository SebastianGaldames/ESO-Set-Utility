<template>
  <form @submit.prevent="registroNuevoUsuario">
    <v-layout justify-center>
      <v-flex xs12 sm10 md8 lg6>
        <v-card>
          <v-flex xs12 sm6>
            <v-text-field
              v-model="usuario"
              label="Ingresa tu Usuario"
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
  constructor(usuario, email, rol, pais, password, sexo) {
    this.usuario = usuario
    this.email = email
    this.rol = rol
    this.pais = pais
    this.password = password
    this.sexo = sexo
  }
}
export default {
  data() {
    return {
      rol: 'usuario',
      usuario: '',
      show2: false,
      pais: 'Chile',
      password: '',
      rePassword: '',
      sexo: 'masculino',
      email: '',
      reEmail: '',
      user: new Usuario(),

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
      this.user = new Usuario(
        this.usuario,
        this.email,
        this.rol,
        this.pais,
        this.password,
        this.sexo
      )
      axios
        .post('http://localhost:9000/api/Usuario/add', {
          usuario: this.user.usuario,
          email: this.user.email,
          rol: this.user.rol,
          pais: this.user.pais,
          password: this.user.password,
          sexo: this.user.sexo,
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
