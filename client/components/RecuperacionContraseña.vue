<template>
  <v-form ref="form" v-model="reglas">
    <v-card
      class="mx-auto pa-4 ma-10"
      max-width="500"
      style="border: 2px solid #a68f7b"
    >
      <v-col cols="12">
        <v-card-title primary-title class="justify-center pb-8">
          Recuperar Contraseña
        </v-card-title>
        <div>
          <v-flex text-center>
            <v-row>
              <v-col
                ><v-text-field
                  v-model="character.characterName"
                  clearable
                  color="acentuado1"
                  label="Nombre de Usuario"
                  :rules="[rules.required, rules.longMin]"
                  hide-details="auto"
                ></v-text-field>
              </v-col>
              <v-col>
                <v-btn outlined @click="userValidation">Validar</v-btn>
              </v-col>
            </v-row>
          </v-flex>
          <v-card :disabled="!confirmation">
            <v-text>¿Cuál es el nombre de tu ciudad favorita?</v-text>
            <v-text-field
              v-model="securityAnswer1"
              clearable
              color="acentuado1"
              label="Respuesta Secreta"
              :rules="[rules.required, rules.longMax, rules.longMin]"
              hide-details="auto"
            ></v-text-field>
            <v-text>¿Cuál es el apellido de tu madre? </v-text>
            <v-text-field
              v-model="securityAnswer2"
              clearable
              color="acentuado1"
              label="Respuesta Secreta"
              :rules="[rules.required, rules.longMax, rules.longMin]"
              hide-details="auto"
            ></v-text-field>
            <v-text>¿Cuál es el nombre de tu primera escuela?</v-text>
            <v-text-field
              v-model="securityAnswer3"
              clearable
              color="acentuado1"
              label="Respuesta Secreta"
              :rules="[rules.required, rules.longMax, rules.longMin]"
              hide-details="auto"
            ></v-text-field>
            <v-btn color="acentuado2" class="mx-10" @click="verificaInfo"
              >Validar Información</v-btn
            >
          </v-card>
          <v-card-actions class="px-5 pb-4">
            <v-card :disabled="!confirmation1">
              <v-flex text-center>
                <v-text-field
                  v-model="character.newPassword"
                  :type="show2 ? 'text' : 'password'"
                  clearable
                  color="acentuado1"
                  label="Ingresa la nueva contraseña"
                  :rules="[rules.required, rules.minPass]"
                  hide-details="auto"
                ></v-text-field>
                <v-text-field
                  v-model="character.newRePassword"
                  :rules="[rules.required, rules.minPass]"
                  :type="show ? 'text' : 'password'"
                  name="input-10-2"
                  label="Confirma tu contraseña"
                  hint="Las contraseñas coinciden"
                  value=""
                  class="input-group--focused secundario--text"
                  @click:append="show = !show"
                ></v-text-field>
                <v-btn outlined blame @click="cambioDatos"
                  >Cambiar Contraseña</v-btn
                >
              </v-flex>
            </v-card>
          </v-card-actions>
        </div>
      </v-col>
    </v-card>
  </v-form>
</template>
<script>
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
  data: () => ({
    select: null,
    valid: true,
    securityQuestionList: [
      '¿Cuál es el nombre de tu ciudad favorita?',
      '¿Cuál es el apellido de tu madre?',
      '¿Cuál es el nombre de tu mascota favorita?',
      '¿Cuál es el nombre de tu primera escuela?',
    ],
    rules: {
      required: (value) => !!value || 'Campo obligatorio',
      longMax: (value) =>
        (value && value.length <= 10) || 'Debe tener máximo 10 caracteres',
      longMin: (value) => (value && value.length >= 2) || 'Min 2 caracteres',
      minPass: (value) =>
        (value && value.length >= 8) || 'Debe tener al menos 8 caracteres',
    },
    character: {
      characterName: '',
      newPassword: '',
      newRePassword: 'hola1234',
    },
    user: new Usuario(),
    lista: [],
    securityAnswer1: '',
    securityAnswer2: '',
    securityAnswer3: '',
    confirmation: false,
    confirmation1: false,
    errorM: '',
  }),
  computed: {
    passwordConfirmationRule() {
      return () =>
        this.newPassword === this.newRePassword ||
        'Las contraseñas no coinciden'
    },
  },
  methods: {
    addCharacter() {
      this.$refs.form.validate()
    },
    async userValidation() {
      const userparam = this.character.characterName
      await this.$axios
        .get(
          process.env.VUE_APP_SERVER_URL +
            '/Usuario/querynombre?usuario=' +
            userparam
        )
        .then((respuesta) => {
          console.log('entre al then')
          this.confirmation = true
          this.user = respuesta.data
          console.log(this.user)
          return respuesta.data
        })
        .catch((error) => {
          this.errorM = null
          if (error.response.status === 404) {
            this.errorM = 'Datos ingresados incorrectamente'
            this.snackbar = true
            this.snackbarText = 'Ingrese nuevamente los datos'
          } else {
            this.errorM = 'Ocurrio un error con el servidor'
          }
        })
    },
    verificaInfo() {
      console.log(this.user)
      this.lista = this.user.securityAnswerList
      console.log(this.lista)
      console.log(this.securityAnswer1)
      console.log(this.securityAnswer2)
      console.log(this.securityAnswer3)
      if (
        this.lista[0] === this.securityAnswer1 &&
        this.lista[1] === this.securityAnswer2 &&
        this.lista[2] === this.securityAnswer3
      ) {
        console.log('Respuestas correctas')
        this.confirmation1 = true
      } else {
        console.log('fallo')
      }
    },
    passwordVerificacion() {
      if (this.character.newPassword !== this.character.newRePassword) {
        alert('Contraseña no coincide con su confirmacion')
        return false
      } else {
        return true
      }
    },

    async cambioDatos() {
      console.log(this.user._id)
      console.log('cambio dentro')
      if (this.passwordVerificacion() && this.character.newPassword !== '') {
        console.log('cambio dentro3')
        const newPassword = {
          _id: this.user._id,
          password: this.character.newPassword,
        }
        const passwordUpdated = await this.$axios.put(
          process.env.VUE_APP_SERVER_URL + '/Usuario/updatePassword',
          newPassword
        )
        // eslint-disable-next-line no-console
        console.log(passwordUpdated)
      }
    },
  },
}
</script>
