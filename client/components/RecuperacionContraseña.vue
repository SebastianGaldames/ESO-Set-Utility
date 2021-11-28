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
                <v-btn outlined>Validar</v-btn>
              </v-col>
            </v-row>
          </v-flex>
          <v-text>¿Cuál es el nombre de tu ciudad favorita?</v-text>
          <v-text-field
            v-model="securityAnswer1"
            clearable
            color="acentuado1"
            label="Respuesta Secreta"
            :rules="[rules.required, rules.longMax, rules.longMin]"
            hide-details="auto"
            :disabled="!valid"
          ></v-text-field>
          <v-text>¿Cuál es el apellido de tu madre? </v-text>
          <v-text-field
            v-model="securityAnswer2"
            clearable
            color="acentuado1"
            label="Respuesta Secreta"
            :rules="[rules.required, rules.longMax, rules.longMin]"
            hide-details="auto"
            :disabled="!valid"
          ></v-text-field>
          <v-text>¿Cuál es el nombre de tu primera escuela?</v-text>
          <v-text-field
            v-model="securityAnswer3"
            clearable
            color="acentuado1"
            label="Respuesta Secreta"
            :rules="[rules.required, rules.longMax, rules.longMin]"
            hide-details="auto"
            :disabled="!valid"
          ></v-text-field>
          <v-card-actions class="px-5 pb-4">
            <v-flex text-center>
              <v-btn
                color="acentuado2"
                class="mx-10"
                :disabled="valid"
                @click="verificaInfo"
                >Validar Información</v-btn
              >
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
                :rules="[
                  rules.required,
                  rules.minPass,
                  passwordConfirmationRule(),
                ]"
                :type="show ? 'text' : 'password'"
                name="input-10-2"
                label="Confirma tu contraseña"
                hint="Las contraseñas coinciden"
                value=""
                class="input-group--focused secundario--text"
                @click:append="show = !show"
              ></v-text-field>
              <v-btn outlined blame>Cambiar Contraseña</v-btn>
            </v-flex>
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
    answerList
  ) {
    this.usuario = usuario
    this.email = email
    this.pais = pais
    this.password = password
    this.sexo = sexo
    this.personajes = personajes
    this.inventario = inventario
    this.answerList = answerList
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
      securityQuestions: [],
      newPassword: '',
      newRePassword: 'hola12345',
    },
    user: new Usuario(),
    lista: [],
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
  },
  methods: {
    async userValidation() {
      const userparam = this.character.characterName
      const userConfirmation = await this.$axios.get(
        process.env.VUE_APP_SERVER_URL +
          '/Usuario/querynombre?usuario=' +
          userparam
      )
      this.user = userConfirmation.data
    },
    verificaInfo() {
      console.log(this.user)
      this.lista = this.user.answerList
      console.log(this.lista)
      if (
        this.lista[0] === this.character.securityAnswer1 &&
        this.lista[1] === this.character.securityAnswer2 &&
        this.lista[2] === this.character.securityAnswer3
      ) {
        console.log('Respuestas correctas')
      }
    },
    passwordVerificacion() {
      if (this.character.newPassword !== this.character.newRePassword) {
        alert('Contraseña no coincide con su confirmacion')
      }
    },

    async cambioDatos() {
      if (this.passwordVerificacion() && this.character.newPassword !== '') {
        this.user.password = this.character.newPassword
        const newPassword = {
          _id: this.user._id,
          password: this.user.password,
        }
        if (this.password !== '') {
          const passwordUpdated = await this.$axios.put(
            process.env.VUE_APP_SERVER_URL + '/Usuario/updatePassword',
            newPassword
          )
          // eslint-disable-next-line no-console
          console.log(passwordUpdated)
        }
      }
    },
  },
}
</script>
