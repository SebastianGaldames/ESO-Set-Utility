<template>
  <v-card
    class="mx-auto pa-4 ma-10"
    max-width="430"
    style="border: 2px solid #a68f7b"
    ><v-container grid-list-md>
      <v-layout row wrap>
        <v-col cols="12">
          <v-card-title primary-title class="justify-center pb-8">
            Recuperar Contraseña
          </v-card-title>
          <div>
            <v-flex text-center>
              <v-row>
                <v-col cols="7"
                  ><v-text-field
                    v-model="character.characterName"
                    clearable
                    color="acentuado2"
                    label="Nombre de Usuario"
                    :rules="[rules.required, rules.longMin]"
                    hide-details="auto"
                  ></v-text-field>
                </v-col>
                <v-col>
                  <v-btn
                    outlined
                    blame
                    class="mt-2"
                    color="acentuado2"
                    @click="userValidation"
                    >Validar</v-btn
                  >
                </v-col>
              </v-row>
            </v-flex>
            <v-card
              style="box-shadow: none !important"
              :disabled="!confirmation"
            >
              <div style="margin-top: 20px">
                <v-text-field
                  v-model="securityAnswer1"
                  clearable
                  color="acentuado1"
                  label="¿Cuál es el nombre de tu ciudad favorita?"
                  :counter="20"
                  :rules="[rules.required, rules.longMax, rules.longMin]"
                  hide-details="auto"
                ></v-text-field>
              </div>

              <v-text-field
                v-model="securityAnswer2"
                clearable
                color="acentuado1"
                label="¿Cuál es el apellido de tu madre?"
                :counter="20"
                :rules="[rules.required, rules.longMax, rules.longMin]"
                hide-details="auto"
              ></v-text-field>

              <v-text-field
                v-model="securityAnswer3"
                clearable
                color="acentuado1"
                label="¿Cuál es el nombre de tu primera escuela?"
                :counter="20"
                :rules="[rules.required, rules.longMax, rules.longMin]"
                hide-details="auto"
              ></v-text-field>
              <v-flex
                style="width: 100%; display: grid; justify-content: center"
              >
                <v-btn outlined color="acentuado2" @click="verificaInfo"
                  >Validar Información</v-btn
                >
              </v-flex>
            </v-card>

            <v-card
              style="box-shadow: none !important"
              :disabled="!confirmation1"
            >
              <v-flex text-center>
                <v-text-field
                  v-model="character.newPassword"
                  color="acentuado1"
                  label="Ingresa la nueva contraseña"
                  :rules="[rules.required, rules.minPass]"
                  hide-details="auto"
                  clearable
                  :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                  :type="show ? 'text' : 'password'"
                  @click:append="show = !show"
                ></v-text-field>
                <v-text-field
                  v-model="character.newRePassword"
                  :rules="[rules.required, rules.minPass, rules.compPass]"
                  color="acentuado1"
                  label="Confirma tu contraseña"
                  hint="Las contraseñas coinciden"
                  class="input-group--focused secundario--text"
                  clearable
                  :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                  :type="show1 ? 'text' : 'password'"
                  @click:append="show1 = !show1"
                ></v-text-field>
                <v-btn
                  class="mt-5"
                  outlined
                  blame
                  color="acentuado2"
                  @click="cambioDatos"
                  >Cambiar Contraseña</v-btn
                >
              </v-flex>
            </v-card>
          </div>
        </v-col>
        <v-snackbar v-model="snackbar" timeout="6000" top>
          <span>{{ snackbarText }}</span>
          <v-btn @click="snackbar = false">Cerrar</v-btn>
        </v-snackbar>
      </v-layout>
    </v-container>
  </v-card>
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
  data() {
    return {
      show: false,
      show1: false,
      select: null,
      valid: true,
      character: {
        characterName: '',
        newPassword: '',
        newRePassword: '',
      },
      rules: {
        required: (value) => !!value || 'Campo obligatorio',
        longMax: (value) =>
          (value && value.length <= 20) || 'Debe tener máximo 20 caracteres',
        longMin: (value) => (value && value.length >= 2) || 'Min 2 caracteres',
        minPass: (value) =>
          (value && value.length >= 8) || 'Debe tener al menos 8 caracteres',
        compPass: (value) =>
          value === this.character.newPassword ||
          '¡Las contraseñas deben coincidir!',
      },
      user: new Usuario(),
      lista: [],
      confirmation: false,
      confirmation1: false,
      errorM: '',
      snackbar: false,
      snackbarText: '',
      securityAnswer1: '',
      securityAnswer2: '',
      securityAnswer3: '',
    }
  },
  methods: {
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
          this.snackbar = true
          this.snackbarText = 'Usuario validado correctamente'
          return respuesta.data
        })
        .catch((error) => {
          this.errorM = null
          if (error.response.status === 404) {
            this.errorM = 'Datos ingresados incorrectamente'
            this.snackbar = true
            this.confirmation1 = false
            this.snackbarText =
              '¡¡No existen coincidencias!! Ingrese nuevamente los datos'
            this.confirmation = false
            this.confirmation1 = false
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
        this.snackbar = true
        this.snackbarText = '¡¡Respuestas validadas correctamente!!'
      } else {
        console.log('fallo')
        this.confirmation1 = false
        this.snackbar = true
        this.snackbarText =
          '¡¡No existen coincidencias!! Ingrese nuevamente los datos'
      }
    },
    passwordVerificacion() {
      if (this.character.newPassword !== this.character.newRePassword) {
        this.snackbar = true
        this.snackbarText =
          '¡¡No existen coincidencias!! Ingrese nuevamente los datos'
        return false
      } else if (
        this.character.newPassword.length &&
        this.character.newRePassword.length < 8
      ) {
        this.snackbar = true
        this.snackbarText = 'Contraseña no cumple con el mínimo requerido'
        return false
      } else {
        this.snackbar = true
        this.snackbarText = '¡¡Clave modificada exitosamente!!'
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
        this.$router.push('/login')
      }
    },
  },
}
</script>
