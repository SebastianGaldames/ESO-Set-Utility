<template>
  <v-main class="colorFondo primario">
    <v-card
      dark
      class="mx-auto pa-10 ma-10 margenCarta"
      max-width="380"
      max-height="2000"
      style="border: 2px solid #a68f7b"
    >
      <div>
        <v-img src="https://i.ibb.co/sHT1f9G/Daco-5763924.png"></v-img>
      </div>

      <v-autocomplete
        ref="pais"
        v-model="pais"
        :rules="[rules.required]"
        :items="paises"
        label="Pais"
        placeholder="Selecciona..."
        clearable
        class="secundario--text"
      ></v-autocomplete>

      <v-text-field
        v-model="usuario"
        :rules="[rules.required]"
        label="Ingresa tu usuario"
        clearable
        class="secundario--text"
      ></v-text-field>

      <v-text-field
        v-model="email"
        :rules="[emailrules.required, emailrules.syntax]"
        label="Email"
        clearable
        class="secundario--text"
      ></v-text-field>

      <v-text-field
        v-model="reEmail"
        :rules="[emailrules.required, emailrules.equals]"
        label="Confirma tu email"
        clearable
        class="secundario--text"
      ></v-text-field>

      <v-text-field
        v-model="password"
        :rules="[rules.required, rules.min]"
        :type="show ? 'text' : 'password'"
        name="input-10-2"
        label="Contraseña ingresada con éxito"
        hint="Debe tener al menos 8 caracteres"
        value="wqfasds"
        class="input-group--focused secundario--text"
        @click:append="show = !show"
      ></v-text-field>

      <v-text-field
        :rules="[rules.required, rules.min, rules.equals]"
        :type="show ? 'text' : 'password'"
        name="input-10-2"
        label="Confirma tu contraseña"
        hint="Las contraseñas coinciden"
        value=""
        class="input-group--focused secundario--text"
        @click:append="show = !show"
      ></v-text-field>

      <v-checkbox v-model="checkbox" class="secundario--text">
        <template v-slot:label>
          Estoy de acuerdo con los términos y condiciones
        </template>
      </v-checkbox>
      <v-row>
        <v-col>
          <div class="text-xs-center">
            <v-btn rounded color="error" dark @click="registroNuevoUsuario"
              >Registrarme</v-btn
            >
          </div>
        </v-col>
        <v-col>
          <div class="text-xs-center">
            <v-btn rounded dark>cancelar</v-btn>
          </div>
        </v-col>
      </v-row>
    </v-card>
  </v-main>
</template>

<style></style>

<script>
import axios from 'axios'
class Usuario {
  constructor(usuario, email, pais, password, sexo, personajes, inventario) {
    this.usuario = usuario
    this.email = email
    this.pais = pais
    this.password = password
    this.sexo = sexo
    this.personajes = personajes
    this.inventario = inventario
  }
}
export default {
  data() {
    return {
      paises: [
        'Argentina',
        'Bolivia',
        'Chile',
        'Colombia',
        'Perú',
        'Venezuela',
      ],
      show: false,
      usuario: '',
      password: '',
      rePassword: '',
      sexo: 'masculino',
      email: '',
      reEmail: '',
      personajes: [],
      pais: '',
      inventario: [],
      user: new Usuario(),
      checkbox: false,
      rules: {
        required: (value) => !!value || 'Campo obligatorio',
        min: () =>
          this.password.length >= 8 || 'Debe tener al menos 8 caracteres',
        equals: (v) => v === this.password || 'Las contraseñas no coinciden',
      },
      emailrules: {
        required: (value) => !!value || 'Campo obligatorio',
        equals: (v) => v === this.email || 'Los e-mails no coinciden',
        syntax: (v) => /.+@.+\..+/.test(v) || 'E-mail no es valido',
      },
    }
  },
  computed: {
    passwordConfirmationRule() {
      return () =>
        this.password === this.rePassword || 'Las contraseÃ±as no coinciden'
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
        this.pais,
        this.password,
        this.sexo,
        this.personajes,
        this.inventario
      )
      axios
        .post(process.env.VUE_APP_SERVER_URL + '/Usuario/add', {
          usuario: this.user.usuario,
          email: this.user.email,
          pais: this.user.pais,
          password: this.user.password,
          sexo: this.user.sexo,
          personajes: this.personajes,
          inventario: this.inventario,
        })
        .then((respuesta) => {
          return respuesta.data
        })
        .then((data) => {
          this.$router.push('/')
        })
    },
  },
}
</script>
