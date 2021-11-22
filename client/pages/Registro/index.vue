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
        v-model="pais"
        :rules="[rules.required]"
        :items="countries"
        label="Pais"
        placeholder="Selecciona..."
        clearable
        class="secundario--text"
        full-width
      ></v-autocomplete>
      <v-text-field
        v-model="usuario"
        :rules="[rules.required, rules.usermin]"
        label="Ingresa tu usuario"
        class="secundario--text"
      ></v-text-field>

      <v-text-field
        v-model="email"
        :rules="[emailConfirmationRule(), emailSyntaxRule]"
        label="Email"
        clearable
        class="secundario--text"
      ></v-text-field>

      <v-text-field
        v-model="reEmail"
        :rules="[emailConfirmationRule(), email2SyntaxRule]"
        label="Confirma tu email"
        clearable
        class="secundario--text"
      ></v-text-field>

      <v-text-field
        v-model="password"
        :rules="[largoMinimoContrasenna(), passwordConfirmationRule()]"
        :type="show ? 'text' : 'password'"
        name="input-10-2"
        label="Ingresa contraseña"
        hint="Contraseña ingresada con exito"
        value=""
        class="input-group--focused secundario--text"
        @click:append="show = !show"
      ></v-text-field>

      <v-text-field
        v-model="rePassword"
        :rules="[largoMinimoContrasenna2(), passwordConfirmationRule()]"
        :type="show ? 'text' : 'password'"
        name="input-10-2"
        label="Confirma tu contraseña"
        hint="Las contraseñas coinciden"
        value=""
        class="input-group--focused secundario--text"
        @click:append="show = !show"
      ></v-text-field>

      <v-checkbox
        v-model="checkbox"
        :rules="[rules.required]"
        class="secundario--text"
      >
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
  async asyncData({ $axios }) {
    const post = await $axios.$get(
      'https://countriesnode.herokuapp.com/v1/countries/'
    )
    const nombrePaises = []
    for (let i = 0; i < post.length; i++) {
      nombrePaises.push(post[i].name)
    }
    nombrePaises.sort()
    return { countries: nombrePaises }
  },
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
      countries: [],
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
        usermin: () =>
          this.usuario.length >= 8 || 'Debe tener al menos 8 caracteres',
      },
    }
  },
  computed: {
    passwordConfirmationRule() {
      return () =>
        this.password === this.rePassword || 'Las contraseñas no coinciden'
    },
    emailConfirmationRule() {
      return () => this.email === this.reEmail || 'Los email no coinciden'
    },
    emailSyntaxRule() {
      const re = /.+@.+\..+/
      return re.test(this.email) || 'E-mail no es valido'
    },
    email2SyntaxRule() {
      const re = /.+@.+\..+/
      return re.test(this.reEmail) || 'E-mail no es valido'
    },
    largoMinimoContrasenna() {
      return () =>
        this.password.length === 8 || 'Debe tener al menos 8 caracteres'
    },
    largoMinimoContrasenna2() {
      return () =>
        this.rePassword.length === 8 || 'Debe tener al menos 8 caracteres'
    },
  },

  methods: {
    registroNuevoUsuario() {
      if (
        this.usuario === '' ||
        this.email === '' ||
        this.pais === '' ||
        this.password === '' ||
        this.checkbox === false
      ) {
        alert('Datos faltantes')
      } else if (
        this.email === this.reEmail &&
        /.+@.+\..+/.test(this.email) &&
        this.password === this.rePassword &&
        this.usuario.length >= 8
      ) {
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
      } else {
        alert('Los datos no son iguales o son incorrectos')
      }
    },
  },
}
</script>
