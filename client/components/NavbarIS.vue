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

          <v-list v-if="usuarioLogeado">
            <v-list-item>
              <div class="columnaOpciones">
                <v-btn @click="irPerfil()">Perfil</v-btn>
                <v-btn @click="salir()">Salir</v-btn>
              </div>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
    </div>
  </client-only>
</template>

<script>
export default {
  data() {
    return {
      usuarioLogeado: false,
      usuario: null,
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
      this.$store.dispatch('salir')
      this.$router.push({ name: 'index' })
    },
  },
}
</script>

<style>
.ajustes {
  display: flex;
  height: 60px;
  align-items: center;
  justify-content: flex-end;
}
.columnaOpciones {
  flex-direction: column;
  display: flex;
  justify-content: space-between;
}
</style>
