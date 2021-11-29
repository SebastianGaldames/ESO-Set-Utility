<template>
  <div class="pa-2">
    {{ comprobarUsuario() }}
    <v-card color="primario" height="100%">
      <div class="div1">
        <v-toolbar dark color="primario">
          <v-toolbar-title class="secundario--text">Mi cuenta</v-toolbar-title>
        </v-toolbar>
      </div>
      <div class="vig">
        <div>
          <v-card class="mx-auto transparent pt-2 pb-2" max-width="600">
            <v-card-text class="div1">
              <h2
                class="secundario--text text-decoration-underline pt-2"
                align="center"
              >
                Informacion Personal
              </h2>
              <div class="secundario--text pt-5 pl-5">
                <v-icon color="grey darken-1"> mdi-account </v-icon
                ><v-text>Usuario: </v-text>{{ user.usuario }}
              </div>
              <div class="secundario--text pt-2 pl-5">
                <v-icon color="grey darken-1"> mdi-earth </v-icon
                ><v-text>País: </v-text>{{ user.pais }}
              </div>
              <div class="secundario--text pt-2 pl-5">
                <v-icon color="grey darken-1"> mdi-email </v-icon
                ><v-text>Email: </v-text>{{ user.email }}
              </div>
              <div class="secundario--text pt-2 pl-5 pb-5">
                <v-icon color="grey darken-1"> mdi-gender-male-female </v-icon
                ><v-text>Sexo: </v-text>{{ user.sexo }}
              </div>
            </v-card-text>
          </v-card>
        </div>
        <div>
          <v-expansion-panels focusable>
            <v-expansion-panel>
              <v-expansion-panel-header>
                <v-text class="pl-4">Cambio de datos</v-text>
              </v-expansion-panel-header>
              <v-expansion-panel-content class="primario">
                <v-toolbar color="primario">
                  <v-toolbar-title
                    >Marque casilla para efectuar cambios</v-toolbar-title
                  >
                </v-toolbar>
                <v-row align="center" class="pt-4 pl-2">
                  <v-checkbox
                    v-model="checkbox1"
                    hide-details
                    class="shrink mr-2 mt-0"
                    color="secundario"
                  ></v-checkbox>
                  <v-autocomplete
                    ref="pais"
                    v-model="pais"
                    :disabled="!checkbox1"
                    :items="paises"
                    label="País"
                    color="goldenrod"
                    placeholder="Selecciona..."
                    clearable
                    class="
                      secundario--text
                      text-input-goldenrod
                      custom-label-color custom-placeholer-color
                    "
                  ></v-autocomplete>
                </v-row>
                <v-row align="center" class="pl-2">
                  <v-checkbox
                    v-model="checkbox2"
                    hide-details
                    class="shrink mr-2 mt-0"
                    color="secundario"
                  ></v-checkbox>
                  <v-text-field
                    v-model="usuario"
                    :disabled="!checkbox2"
                    :rules="[rules.usermin]"
                    label="Ingresa tu usuario"
                    class="
                      secundario--text
                      text-input-goldenrod
                      custom-label-color custom-placeholer-color
                    "
                  ></v-text-field>
                </v-row>
                <v-row align="center" class="pl-2">
                  <v-checkbox
                    v-model="checkbox3"
                    hide-details
                    class="shrink mr-2 mt-0"
                    color="secundario"
                  ></v-checkbox>
                  <v-text-field
                    v-model="email"
                    :disabled="!checkbox3"
                    :rules="[emailrules.syntax]"
                    label="Email"
                    clearable
                    class="
                      secundario--text
                      text-input-goldenrod
                      custom-label-color custom-placeholer-color
                    "
                  ></v-text-field>
                </v-row>
                <v-row align="center" class="pl-2">
                  <v-checkbox
                    light
                    hide-details
                    class="shrink mr-2 mt-0"
                    disabled
                  ></v-checkbox>
                  <v-text-field
                    v-model="reEmail"
                    :disabled="!checkbox3"
                    :rules="[emailrules.syntax]"
                    label="Confirma tu email"
                    clearable
                    class="
                      secundario--text
                      text-input-goldenrod
                      custom-label-color custom-placeholer-color
                    "
                  ></v-text-field>
                </v-row>
                <v-row align="center" class="pl-2">
                  <v-checkbox
                    v-model="checkbox4"
                    hide-details
                    class="shrink mr-2 mt-0"
                    color="secundario"
                  ></v-checkbox>
                  <v-text-field
                    v-model="password"
                    :disabled="!checkbox4"
                    :rules="[rules.min]"
                    :type="show ? 'text' : 'password'"
                    name="input-10-2"
                    label="Ingresa contraseña"
                    hint=" "
                    class="
                      input-group--focused
                      secundario--text
                      text-input-goldenrod
                      custom-label-color custom-placeholer-color
                    "
                  ></v-text-field>
                </v-row>
                <v-row align="center" class="pl-2">
                  <v-checkbox
                    light
                    hide-details
                    class="shrink mr-2 mt-0"
                    disabled
                  ></v-checkbox>
                  <v-text-field
                    v-model="rePassword"
                    :disabled="!checkbox4"
                    :rules="[rules.remin]"
                    :type="show ? 'text' : 'password'"
                    name="input-10-2"
                    label="Confirma tu contraseña"
                    hint=" "
                    class="
                      input-group--focused
                      secundario--text
                      text-input-goldenrod
                      custom-label-color custom-placeholer-color
                    "
                  ></v-text-field>
                </v-row>
                <v-row>
                  <v-col>
                    <div class="text-xs-center">
                      <v-btn color="error" @click="comprobaciones"
                        >Guardar cambios</v-btn
                      >
                    </div>
                  </v-col>
                  <v-col> </v-col>
                </v-row>
              </v-expansion-panel-content>
            </v-expansion-panel>
            <v-expansion-panel>
              <v-expansion-panel-header>
                <v-text class="pl-4">Actualizar respuestas de seguridad</v-text>
              </v-expansion-panel-header>
              <v-expansion-panel-content class="primario">
                <v-toolbar color="primario">
                  <v-toolbar-title
                    >Marque casilla para efectuar cambios</v-toolbar-title
                  >
                </v-toolbar>
                <v-row align="center" class="pl-2">
                  <v-checkbox
                    v-model="checkbox5"
                    hide-details
                    class="shrink mr-2 mt-0"
                    color="secundario"
                  ></v-checkbox>
                  <v-text-field
                    v-model="securityAnswerList[0]"
                    :disabled="!checkbox5"
                    label="¿Cuál es el nombre de tu ciudad favorita?"
                    class="
                      secundario--text
                      text-input-goldenrod
                      custom-label-color custom-placeholer-color
                    "
                  ></v-text-field>
                </v-row>
                <v-row align="center" class="pl-2">
                  <v-checkbox
                    v-model="checkbox6"
                    hide-details
                    class="shrink mr-2 mt-0"
                    color="secundario"
                  ></v-checkbox>
                  <v-text-field
                    v-model="securityAnswerList[1]"
                    :disabled="!checkbox6"
                    label="¿Cuál es el apellido de tu madre?"
                    class="
                      secundario--text
                      text-input-goldenrod
                      custom-label-color custom-placeholer-color
                    "
                  ></v-text-field>
                </v-row>
                <v-row align="center" class="pl-2">
                  <v-checkbox
                    v-model="checkbox7"
                    hide-details
                    class="shrink mr-2 mt-0"
                    color="secundario"
                  ></v-checkbox>
                  <v-text-field
                    v-model="securityAnswerList[2]"
                    :disabled="!checkbox7"
                    label="¿Cuál es el nombre de tu primera escuela?"
                    class="
                      secundario--text
                      text-input-goldenrod
                      custom-label-color custom-placeholer-color
                    "
                  ></v-text-field>
                </v-row>
                <v-row>
                  <v-col>
                    <div class="text-xs-center">
                      <v-btn color="error" @click="cambioRespuestas"
                        >Guardar cambios</v-btn
                      >
                    </div>
                  </v-col>
                  <v-col> </v-col>
                </v-row>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </div>
      </div>
    </v-card>
  </div>
</template>

<style>
.div1 {
  border-width: 2px;
  border-style: solid;
  border-color: goldenrod;
  background-color: transparent;
}

.text-input-goldenrod .v-text-field__slot input {
  color: goldenrod !important;
}

.custom-placeholer-color input::placeholder {
  color: goldenrod !important;
}

.custom-label-color .v-label {
  color: goldenrod;
}

.custom-placeholer-color input,
.custom-label-color input {
  color: goldenrod !important;
}
</style>

<script>
// import axios from 'axios'
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
      paises: [
        'Argentina',
        'Bolivia',
        'Chile',
        'Colombia',
        'Perú',
        'Venezuela',
      ],
      show: true,
      usuario: '',
      password: '',
      rePassword: '',
      sexo: 'masculino',
      email: '',
      reEmail: '',
      personajes: [],
      pais: '',
      inventario: [],
      securityAnswerList: ['', '', ''],
      securityAnswerList2: [],
      user: new Usuario(),
      checkbox: false,
      checkbox1: false,
      checkbox2: false,
      checkbox3: false,
      checkbox4: false,
      checkbox5: false,
      checkbox6: false,
      checkbox7: false,
      rules: {
        min: () =>
          this.password.length >= 8 || 'Debe tener al menos 8 caracteres',
        remin: () =>
          this.rePassword.length >= 8 || 'Debe tener al menos 8 caracteres',

        usermin: () =>
          this.usuario.length >= 8 || 'Debe tener al menos 8 caracteres',
      },
      emailrules: {
        syntax: (v) => /.+@.+\..+/.test(v) || 'E-mail no es valido',
      },
    }
  },
  mounted() {
    this.tomaUser()
  },
  methods: {
    async cambioRespuestas() {
      this.securityAnswerList2 = this.user.securityAnswerList
      if (this.securityAnswerList[0] !== '') {
        this.securityAnswerList2[0] = this.securityAnswerList[0]
      }
      if (this.securityAnswerList[1] !== '') {
        this.securityAnswerList2[1] = this.securityAnswerList[1]
      }
      if (this.securityAnswerList[2] !== '') {
        this.securityAnswerList2[2] = this.securityAnswerList[2]
      }
      const newAnswers = {
        _id: this.user._id,
        securityAnswerList: this.securityAnswerList2,
      }
      const updated = await this.$axios.put(
        process.env.VUE_APP_SERVER_URL + '/Usuario/update',
        newAnswers
      )
      // eslint-disable-next-line no-console
      console.log(updated.data)
      this.tomaUser()
      if (updated) {
        // eslint-disable-next-line no-console
        // this.reLog()
        this.$store.dispatch('setUsuarioUp', this.user.usuario)
        // this.$store.state.setUsuario(this.$store.state, this.user.usuario)
        console.log(updated.data)
        alert('Cambio exitoso')
      } else {
        alert('fallo')
      }
    },
    comprobarUsuario() {
      if (this.$store.state.usuario == null) {
        this.$router.push({ name: 'index' })
      }
    },
    comprobaciones() {
      if (
        this.password === '' &&
        this.email === '' &&
        this.usuario === '' &&
        this.pais === ''
      ) {
        this.sinDatos()
      } else if (
        this.password === this.rePassword &&
        (this.password.length >= 8 ||
          this.password === '' ||
          this.password === null)
      ) {
        if (this.password === null) {
          this.password = ''
        }
        console.log('password exitosa')
        if (
          this.usuario.length >= 8 ||
          this.usuario === '' ||
          this.usuario === null
        ) {
          if (this.usuario === null) {
            this.usuario = ''
          }
          console.log('usuario exitosa')
          if (this.email === this.reEmail) {
            console.log('email clear' + this.email)
            if (this.email === '' || this.email === null) {
              if (this.email === null) {
                this.email = ''
              }
              console.log('email exitoso vacio')
              this.cambioDatos()
            }
            const bol = /.+@.+\..+/.test(this.email)
            if (bol === true) {
              console.log('email exitosa')
              this.cambioDatos()
            }
          }
        }
      } else if (
        this.password !== this.rePassword &&
        this.email !== this.reEmail &&
        this.usuario.length < 8 &&
        this.usuario !== ''
      ) {
        alert(
          'Error de email y contraseña no coinciden con su confirmacion, usuario invalido'
        )
      } else if (
        this.password !== this.rePassword &&
        this.email !== this.reEmail
      ) {
        alert('Error de email y contraseña no coinciden con su confirmacion')
      } else if (
        this.password === this.rePassword &&
        this.email !== this.reEmail
      ) {
        alert('Error de email')
      } else if (
        this.password !== this.rePassword &&
        this.email === this.reEmail
      ) {
        alert('Contraseña no coincide con su confirmacion')
      } else if (
        this.password !== this.rePassword &&
        this.usuario.length < 8 &&
        this.usuario !== ''
      ) {
        alert(
          'Error usuario invalido y contraseña no coincide con su confirmacion'
        )
      } else if (
        this.email !== this.reEmail &&
        this.usuario.length < 8 &&
        this.usuario !== ''
      ) {
        alert('Error usuario invalido y email no coincide con su confirmacion')
      } else if (this.email !== this.reEmail) {
        alert('Emails no coinciden')
      } else if (this.password !== this.rePassword) {
        alert('Contraseñas no coinciden')
      } else if (this.usuario.length < 8) {
        alert('Usuario invalido')
      } else {
        alert('algo ocurrio')
      }
    },
    async tomaUser() {
      const userparam = this.$store.state.usuario
      const userLogued = await this.$axios.get(
        process.env.VUE_APP_SERVER_URL +
          '/Usuario/querynombre?usuario=' +
          userparam
      )
      this.user = userLogued.data
      console.log(this.user)
    },
    sinDatos() {
      alert('No hay entrada de datos')
    },
    async cambioDatos() {
      if (this.pais !== '') {
        if (this.pais !== null) {
          this.user.pais = this.pais
        }
      }
      if (this.usuario !== '') {
        this.user.usuario = this.usuario
      }
      if (this.email !== '') {
        this.user.email = this.email
      }
      if (this.password !== '') {
        this.user.password = this.password
      }
      const datos = {
        _id: this.user._id,
        usuario: this.user.usuario,
        email: this.user.email,
        pais: this.user.pais,
      }
      const newPassword = {
        _id: this.user._id,
        password: this.user.password,
      }
      const updated = await this.$axios.put(
        process.env.VUE_APP_SERVER_URL + '/Usuario/update',
        datos
      )
      if (this.password !== '') {
        const passwordUpdated = await this.$axios.put(
          process.env.VUE_APP_SERVER_URL + '/Usuario/updatePassword',
          newPassword
        )
        // eslint-disable-next-line no-console
        console.log(passwordUpdated)
      }

      if (updated) {
        // eslint-disable-next-line no-console
        // this.reLog()
        this.$store.dispatch('setUsuarioUp', this.user.usuario)
        // this.$store.state.setUsuario(this.$store.state, this.user.usuario)
        console.log(updated.data)
        alert('Cambio exitoso')
      } else {
        alert('fallo')
      }
    },
    // async reLog() {
    //   console.log(this.user.usuario)
    //   console.log(this.user.password)
    //   this.$store.dispatch('salir')
    //   const datos2 = {
    //     usuario: this.user.usuario,
    //     password: this.user.password,
    //   }
    //   await this.$axios
    //     .post(process.env.VUE_APP_SERVER_URL + '/Usuario/login', datos2)
    //     .then((respuesta) => {
    //       return respuesta.data
    //     })
    //     .then((data) => {
    //       this.$store.dispatch('guardarToken', data.tokenReturn) // llamamos a la accion guardar token
    //     })
    // },
  },
}
</script>
