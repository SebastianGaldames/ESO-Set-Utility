<template>
  <client-only>
    <div class="ajustes color primario">
      {{ comprobarUsuario() }}
      <div>
        <v-menu open-on-hover offset-y>
          <template v-slot:activator="{ on, attrs }">
            <!-- Verificamos si el usuario esta logeado para mostrar lo del usuario -->
            <div v-if="usuarioLogeado">
              <v-btn v-bind="attrs" dark color="black" v-on="on">
                <div>
                  <font color="white">{{ usuario }}</font>
                </div>
                <div>
                  <div><v-icon dark>mdi-account</v-icon></div>
                </div>
              </v-btn>
            </div>
            <!-- En caso de no estar logeado mostramos la opcion de iniciar sesion -->
            <div v-else>
              <v-btn dark color="black" @click="iniciarSesion()">
                iniciar sesión <v-icon dark>mdi-account</v-icon></v-btn
              >
            </div>
          </template>
          <div>
            <v-list v-if="usuarioLogeado" class="tile">
              <v-list class="tile">
                <div class="columnaOpciones tile2">
                  <v-btn @click="irPerfil()">Perfil</v-btn>
                  <v-btn @click="salir()">Salir</v-btn>
                </div>
              </v-list>
            </v-list>
          </div>
        </v-menu>
      </div>
      <v-snackbar v-model="snackbar" timeout="3000" top>
        <span>¡Sesión cerrada con éxito!</span>
        <v-btn @click="snackbar = false">Cerrar</v-btn>
      </v-snackbar>
    </div>
  </client-only>
</template>

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

<style>
.tile {
  background-color: black !important;
}
.tile:hover {
  background-color: black !important;
}
.tile:active {
  background-color: black !important;
}
.tile2 {
  background-color: black;
}
.ajustes {
  display: flex;
  height: 60px;
  align-items: center;
  justify-content: flex-end;
}
.columnaOpciones {
  flex-direction: column;
  display: flex;
  align-content: center;
  justify-content: space-between;
}
</style>
