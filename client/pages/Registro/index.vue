<template>
  <v-main class="colorFondo primario">
    <v-card
      dark
      class="mx-auto pa-10 ma-10 margenCarta"
      max-width="450"
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

      <v-autocomplete
        v-model="sexo"
        :rules="[rules.required]"
        :items="sexos"
        label="Sexo"
        placeholder="Selecciona..."
        clearable
        class="secundario--text"
        full-width
      ></v-autocomplete>

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
        name="input-10-2"
        label="Ingresa contraseña"
        class="input-group--focused secundario--text"
        :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
        :type="show ? 'text' : 'password'"
        @click:append="show = !show"
      ></v-text-field>

      <v-text-field
        v-model="rePassword"
        :rules="[largoMinimoContrasenna2(), passwordConfirmationRule()]"
        name="input-10-2"
        label="Confirma tu contraseña"
        hint="Las contraseñas deben coincidir"
        class="input-group--focused secundario--text"
        :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
        :type="show1 ? 'text' : 'password'"
        @click:append="show1 = !show1"
      ></v-text-field>

      <v-text-field
        v-model="securityAnswerList[0]"
        clearable
        color="acentuado1"
        label="¿Cuál es el nombre de tu ciudad favorita?"
        :counter="20"
        :rules="[
          questionRules.required,
          questionRules.longMax,
          questionRules.longMin,
        ]"
        hidedetails="auto"
      ></v-text-field>

      <v-text-field
        v-model="securityAnswerList[1]"
        clearable
        color="acentuado1"
        label="¿Cuál es el apellido de tu madre?"
        :counter="20"
        :rules="[
          questionRules.required,
          questionRules.longMax,
          questionRules.longMin,
        ]"
        hide-details="auto"
      ></v-text-field>
      <v-text-field
        v-model="securityAnswerList[2]"
        clearable
        color="acentuado1"
        label="¿Cuál es el nombre de tu primera escuela?"
        :counter="20"
        :rules="[
          questionRules.required,
          questionRules.longMax,
          questionRules.longMin,
        ]"
        hide-details="auto"
      ></v-text-field>
      <v-row align="center">
        <v-checkbox v-model="checkbox"> </v-checkbox>
        acepto los&nbsp;
        <v-dialog v-model="dialog" persistent max-width="400px">
          <template v-slot:activator="{ on, attrs }">
            <a v-bind="attrs" v-on="on">términos y condiciones</a>
          </template>
          <v-card height="10%">
            <v-card-title> Términos y condiciones (plantilla) </v-card-title>
            <v-card-text
              >Bienvenido a (Nombre de la tienda). Estos términos y condiciones
              describen las reglas y regulaciones para el uso del sitio web
              (Nombre de la tienda). (Nombre de la tienda) se encuentra en
              (Dirección). Al acceder a este sitio web, asumimos que aceptas
              estos términos y condiciones en su totalidad. No continúes usando
              el sitio web (Nombre de la tienda) si no aceptas todos los
              términos y condiciones establecidos en esta página. La siguiente
              terminología se aplica a estos Términos y Condiciones, Declaración
              de Privacidad y Aviso legal y cualquiera o todos los Acuerdos: el
              Cliente, Usted y Su se refieren a usted, la persona que accede a
              este sitio web y acepta los términos y condiciones de la Compañía.
              La Compañía, Nosotros mismos, Nosotros y Nuestro, se refiere a
              nuestra Compañía. Parte, Partes o Nosotros, se refiere en conjunto
              al Cliente y a nosotros mismos, o al Cliente o a nosotros mismos.
              Todos los términos se refieren a la oferta, aceptación y
              consideración del pago necesario para efectuar el proceso de
              nuestra asistencia al Cliente de la manera más adecuada, ya sea
              mediante reuniones formales de una duración fija, o por cualquier
              otro medio, con el propósito expreso de conocer las necesidades
              del Cliente con respecto a la provisión de los servicios/productos
              declarados de la Compañía, de acuerdo con y sujeto a la ley
              vigente de (Dirección). Cualquier uso de la terminología anterior
              u otras palabras en singular, plural, mayúsculas y/o, él/ella o
              ellos, se consideran intercambiables y, por lo tanto, se refieren
              a lo mismo.
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="yellow darken-1" text @click="aceptarTerminos()">
                Acepto
              </v-btn>
              <v-btn color="yellow darken-1" text @click="cancelarTerminos()">
                No acepto
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-row>

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
            <v-btn rounded dark @click="cancelar()">cancelar</v-btn>
          </div>
        </v-col>
        <v-snackbar v-model="snackbar" timeout="3000" top>
          <span>¡{{ snackbarText }}!</span>
          <v-btn @click="comprobarUser()">Cerrar</v-btn>
        </v-snackbar>
      </v-row>
    </v-card>
  </v-main>
</template>

<style>
.flexcard {
  display: flex;
  flex-direction: column;
  column-width: 800px;
}
</style>

<script>
import axios from 'axios'

class Usuario {
  constructor(
    usuario,
    email,
    pais,
    password,
    sexo,
    personajes,
    inventario,
    securityAnswerList
  ) {
    this.usuario = usuario
    this.email = email
    this.pais = pais
    this.password = password
    this.sexo = sexo
    this.personajes = personajes
    this.inventario = inventario
    this.securityAnswerList = securityAnswerList
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
      countries: [],
      sexos: ['Masculino', 'Femenino', 'Otro'],

      dialog: false,
      usuario: '',
      password: '',
      rePassword: '',
      sexo: '',
      email: '',
      reEmail: '',
      personajes: [],
      pais: '',
      inventario: [],
      user: new Usuario(),
      securityAnswerList: [],
      checkbox: false,
      show: false,
      show1: false,
      rules: {
        required: (value) => !!value || 'Campo obligatorio',
        usermin: () =>
          this.usuario.length >= 8 || 'Debe tener al menos 8 caracteres',
      },
      emailrules: {
        required: (value) => !!value || 'Campo obligatorio',
        equals: (v) => v === this.email || 'Los e-mails no coinciden',
        syntax: (v) => /.+@.+\..+/.test(v) || 'E-mail no es valido',
      },
      questionRules: {
        required: (value) => !!value || 'Campo obligatorio',
        longMax: (value) =>
          (value && value.length <= 20) || 'Debe tener máximo 20 caracteres',
        longMin: (value) => (value && value.length >= 2) || 'Min 2 caracteres',
      },
      snackbar: false,
      snackbarText: '',
      userTrue: false,
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
        this.password.length >= 8 || 'Debe tener al menos 8 caracteres'
    },
    largoMinimoContrasenna2() {
      return () =>
        this.rePassword.length >= 8 || 'Debe tener al menos 8 caracteres'
    },
  },

  methods: {
    comprobarUser() {
      this.snackbar = false
      if (this.userTrue && this.snackbar === false) {
        this.$router.push('/')
      }
    },
    aceptarTerminos() {
      this.checkbox = true
      this.dialog = false
    },
    cancelarTerminos() {
      this.checkbox = false
      this.dialog = false
    },
    cancelar() {
      this.$router.push('/')
    },
    registroNuevoUsuario() {
      if (
        this.usuario === '' ||
        this.email === '' ||
        this.pais === '' ||
        this.password === '' ||
        this.sexo === '' ||
        this.securityAnswerList[0] === '' ||
        this.securityAnswerList[1] === '' ||
        this.securityAnswerList[2] === '' ||
        this.securityAnswerList[0].length < 2 ||
        this.securityAnswerList[0].length > 20 ||
        this.securityAnswerList[1].length < 2 ||
        this.securityAnswerList[1].length > 20 ||
        this.securityAnswerList[2].length < 2 ||
        this.securityAnswerList[2].length > 20
      ) {
        this.snackbar = true
        this.snackbarText = 'Existen campos incompletos'
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
          this.inventario,
          this.securityAnswerList
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
            securityAnswerList: this.securityAnswerList,
          })
          .then((respuesta) => {
            return respuesta.data
          })
          .then((data) => {
            this.snackbarText = 'Usuario creado exitosamente'
            this.snackbar = true
            this.userTrue = true
            if (this.snackbar === false) this.$router.push('/')
          })
          .catch((e) => {
            this.snackbar = true
            this.snackbarText = 'Ha ingresado un usuario o un correo invalido'
          })
      } else {
        this.snackbar = true
        this.snackbarText = 'Los datos no son iguales o son incorrectos'
      }
    },
  },
}
</script>
