<template>
  <v-main class="color primario">
    <v-container>
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
        <v-btn text small>¿Olvidaste tu contraseña?</v-btn>
        <div class="mx-auto pa-10">
          <v-btn rounded color="error" dark @click="busq">Iniciar Sesión</v-btn>
        </div>
        <div>
          ¿No tienes cuenta?
          <v-btn text small
            ><NuxtLink to="/Registro">Registrarse</NuxtLink></v-btn
          >
        </div>
      </v-card>
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
          this.$router.push({ name: 'perfil' }) // vamos hacia la ruta de perfil
        })
        .catch((error) => {
          this.errorM = null
          if (error.response.status === 404) {
            this.errorM =
              'No existe el usuario o las condiciones son incorrectas'
          } else {
            this.errorM = 'Ocurrio un error con el servidor'
          }
          console.log(this.errorM)
        })
    },
  },
}
</script>
