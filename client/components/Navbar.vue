<template>
  <client-only>
    <v-toolbar dark>
      {{ comprobarUsuario() }}
      <v-row class="d-flex justify-center">
        <v-flex class="d-flex">
          <NuxtLink to="/">
            <v-img
              max-height="100"
              max-width="250"
              src="https://i.imgur.com/Hc1mF2k.png"
            >
            </v-img>
          </NuxtLink>
        </v-flex>
        <NuxtLink
          to="/"
          style="text-decoration: none; color: inherit"
          class="pt-5"
        >
          <v-btn text> Inicio </v-btn>
        </NuxtLink>
        <NuxtLink
          to="/familysearch"
          style="text-decoration: none; color: inherit"
          class="pt-5"
        >
          <v-btn text> Familias </v-btn>
        </NuxtLink>
        <NuxtLink
          to="/joinUs"
          style="text-decoration: none; color: inherit"
          class="pt-5"
        >
          <v-btn text> Unetenos </v-btn>
        </NuxtLink>
        <NuxtLink
          to="/instrucciones"
          style="text-decoration: none; color: inherit"
          class="pt-5"
        >
          <v-btn text> Ayuda </v-btn>
        </NuxtLink>
        <v-sheet class="pt-5" color="transparent">
          <v-menu open-on-hover bottom offset-y>
            <template v-slot:activator="{ on, attrs }">
              <!-- Verificamos si el usuario esta logeado para mostrar lo del usuario -->
              <div v-if="usuarioLogeado">
                <v-btn text v-bind="attrs" v-on="on">
                  <font color="white">{{ usuario }}</font>
                  <v-icon> mdi-account </v-icon>
                </v-btn>
              </div>
              <!-- En caso de no estar logeado mostramos la opcion de iniciar sesion -->
              <div v-else>
                <v-btn text @click="iniciarSesion()"
                  >iniciar sesión
                  <v-icon dark>mdi-account</v-icon>
                </v-btn>
              </div>
            </template>
            <v-list v-if="usuarioLogeado">
              <v-list-item @click="irPerfil()"> Perfil </v-list-item>
              <v-list-item @click="irPersonajes()"> Personajes </v-list-item>
              <v-list-item @click="irComparar()">
                Comparar Personajes
              </v-list-item>
              <v-list-item @click="salir()"> Salir </v-list-item>
            </v-list>
          </v-menu>
        </v-sheet>
      </v-row>
      <v-snackbar v-model="snackbar" timeout="3000" top>
        <span>¡Sesión cerrada con éxito!</span>
        <v-btn @click="snackbar = false">Cerrar</v-btn>
      </v-snackbar>
    </v-toolbar>
  </client-only>
</template>

<style scoped></style>

<script>
export default {
  data() {
    return {
      usuarioLogeado: false,
      usuario: null,
      snackbar: false,
    }
  },
  methods: {
    iniciarSesion() {
      this.$router.push('/login') // vamos hacia la ruta de perfil
    },
    irPerfil() {
      if (this.usuarioLogeado) {
        this.$router.push('/perfil')
      }
    },
    irPersonajes() {
      if (this.usuarioLogeado) {
        this.$router.push('/personajes')
      }
    },
    irComparar() {
      if (this.usuarioLogeado) {
        this.$router.push('/comparar')
      }
    },
    comprobarUsuario() {
      const usuario = this.$store.state.usuario
      if (usuario != null) {
        this.usuario = usuario
        this.usuarioLogeado = true
      } else {
        this.usuarioLogeado = false
      }
    },
    salir() {
      this.snackbar = true
      this.$store.dispatch('salir')
      this.$router.push({ name: 'index' })
    },
  },
}
</script>
