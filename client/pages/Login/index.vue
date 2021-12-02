<template>
  <v-main class="color primario">
    <v-container>
      {{ comprobarUsuario() }}
      <v-card
        dark
        class="mx-auto pa-10 ma-10"
        max-width="380"
        max-height="2000"
        style="border: 2px solid #a68f7b"
      >
        <div>
          <v-img src="https://i.ibb.co/sHT1f9G/Daco-5763924.png"></v-img>
        </div>

        <v-text-field
          v-model="nombreUsuario"
          label="Usuario"
          hint="Ingresa tu Usuario"
          clearable
        ></v-text-field>

        <v-text-field
          v-model="password"
          :rules="[rules.required, rules.min]"
          :type="show2 ? 'text' : 'password'"
          name="input-10-2"
          label="Contraseña"
          hint="Ingresa tu contraseña"
          value=""
          class="input-group--focused"
          @click:append="show2 = !show2"
        ></v-text-field>
        <!-- <v-flex v-if="errorM" class="red--text">
          {{ errorM }}
        </v-flex> -->
        <div class="ajustes1">
          <v-btn rounded color="error" dark @click="busq">Iniciar Sesión</v-btn>
        </div>
        <div class="ajustes2">
          <h5>
            <NuxtLink to="/recuperarContrasena"
              >¿Olvidaste tu contraseña?</NuxtLink
            >
          </h5>
          <h5>
            ¿No tienes cuenta? <NuxtLink to="/Registro">Registrarse</NuxtLink>
          </h5>
        </div>
      </v-card>
      <v-snackbar v-model="snackbar" timeout="6000" top>
        <span>¡{{ snackbarText }}!</span>
        <v-btn @click="snackbar = false">Cerrar</v-btn>
      </v-snackbar>
    </v-container>
  </v-main>
</template>

<style></style>

<script>
export default {
  data() {
    return {
      show2: false,
      nombreUsuario: '',
      password: '',
      errorM: '',
      snackbar: false,
      snackbarText: '',
      rules: {
        required: (value) => !!value || 'Campo obligatorio',
        min: (v) => v.length >= 8 || 'Debe tener al menos 8 caracteres',
      },
    }
  },
  methods: {
    async busq() {
      await this.$axios
        .post(process.env.VUE_APP_SERVER_URL + '/Usuario/login', {
          nombreUsuario: this.nombreUsuario,
          password: this.password,
        })
        .then((respuesta) => {
          return respuesta.data
        })
        .then((data) => {
          this.$store.dispatch('guardarToken', data.tokenReturn) // llamamos a la accion guardar token
          this.snackbar = true
          this.snackbarText = 'Sesión iniciada con éxito'
          this.$router.push({ name: 'index' }) // vamos hacia la ruta de home
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
    comprobarUsuario() {
      if (this.$store.state.usuario != null) {
        this.$router.push({ name: 'index' })
      }
    },
  },
}
</script>

<style>
.ajustes2 {
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.ajustes1 {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-block-end: 5%;
  margin-block-start: 1.5%;
}
</style>
