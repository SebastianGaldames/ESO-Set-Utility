<template>
  <div>
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
                <v-icon color="grey darken-1"> mdi-account </v-icon>Usuario:{{
                  user.usuario
                }}
              </div>
              <div class="secundario--text pt-2 pl-5">
                <v-icon color="grey darken-1"> mdi-earth </v-icon>País:{{
                  user.pais
                }}
              </div>
              <div class="secundario--text pt-2 pl-5">
                <v-icon color="grey darken-1"> mdi-email </v-icon>Correo:{{
                  user.email
                }}
              </div>
              <div class="secundario--text pt-2 pl-5 pb-5">
                <v-icon color="grey darken-1"> mdi-gender-male-female </v-icon
                >Sexo:{{ user.sexo }}
              </div>
            </v-card-text>
          </v-card>
        </div>
        <div>
          <v-expansion-panels focusable>
            <v-expansion-panel>
              <v-expansion-panel-header>
                Cambiar datos existentes
              </v-expansion-panel-header>
              <v-expansion-panel-content class="primario">
                <v-autocomplete
                  ref="pais"
                  v-model="pais"
                  :rules="[rules.required]"
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

                <v-text-field
                  v-model="usuario"
                  :rules="[rules.required, rules.usermin]"
                  label="Ingresa tu usuario"
                  clearable
                  class="
                    secundario--text
                    text-input-goldenrod
                    custom-label-color custom-placeholer-color
                  "
                ></v-text-field>

                <v-text-field
                  v-model="email"
                  :rules="[emailrules.required, emailrules.syntax]"
                  label="Email"
                  clearable
                  class="
                    secundario--text
                    text-input-goldenrod
                    custom-label-color custom-placeholer-color
                  "
                ></v-text-field>

                <v-text-field
                  v-model="reEmail"
                  :rules="[emailrules.required, emailrules.equals]"
                  label="Confirma tu email"
                  clearable
                  class="
                    secundario--text
                    text-input-goldenrod
                    custom-label-color custom-placeholer-color
                  "
                ></v-text-field>

                <v-text-field
                  v-model="password"
                  :rules="[rules.required, rules.min]"
                  :type="show ? 'text' : 'password'"
                  name="input-10-2"
                  label="Ingresa contraseña"
                  hint="Debe tener al menos 8 caracteres"
                  value="wqfasds"
                  class="
                    input-group--focused
                    secundario--text
                    text-input-goldenrod
                    custom-label-color custom-placeholer-color
                  "
                  @click:append="show = !show"
                ></v-text-field>

                <v-text-field
                  v-model="rePassword"
                  :rules="[rules.required, rules.min, rules.equals]"
                  :type="show ? 'text' : 'password'"
                  name="input-10-2"
                  label="Confirma tu contraseña"
                  hint="Las contraseñas coinciden"
                  value=""
                  class="
                    input-group--focused
                    secundario--text
                    text-input-goldenrod
                    custom-label-color custom-placeholer-color
                  "
                  @click:append="show = !show"
                ></v-text-field>

                <v-checkbox
                  v-model="checkbox"
                  :rules="[rules.required]"
                  class="
                    secundario--text
                    text-input-goldenrod
                    custom-label-color custom-placeholer-color
                  "
                >
                  <template v-slot:label class="secundario">
                    Estoy de acuerdo con los términos y condiciones
                  </template>
                </v-checkbox>
                <v-row>
                  <v-col>
                    <div class="text-xs-center">
                      <v-btn rounded color="error">Guardar cambios</v-btn>
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
      cuenta: {
        usuario: '',
        pais: '',
        sexo: '',
        correo: '',
        pass: '',
        newPass: '',
      },
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
        usermin: (v) => v >= 8 || 'Debe tener al menos 8 caracteres',
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
      return () => this.email === this.reEmail || 'Los email no coinciden'
    },
  },
  mounted() {
    this.tomaUser()
  },
  methods: {
    comprobarUsuario() {
      if (this.$store.state.usuario == null) {
        this.$router.push({ name: 'index' })
      }
    },
    async tomaUser() {
      const userparam = this.$store.state.usuario
      console.log('usuario: ' + userparam)
      const userLogued = await this.$axios.get(
        process.env.VUE_APP_SERVER_URL +
          '/Usuario/querynombre?usuario=' +
          userparam
      )
      this.user = userLogued.data
      console.log(this.user)
    },
  },
}
</script>
