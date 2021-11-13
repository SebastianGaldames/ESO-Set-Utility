<template>
  <div class="ajustes color primario">
    <div v-if="usuarioLogeado">
      <v-btn dark color="black" @click="iniciarSesion()"> {{ usuario }}</v-btn>
    </div>
    <div v-else>
      <v-btn dark color="black" @click="iniciarSesion()"> iniciar sesión</v-btn>
    </div>

    <v-btn class="mx-2" fab dark small color="black" @click="irPerfil()">
      <v-icon dark>mdi-account</v-icon>
    </v-btn>
  </div>
</template>

<script>
export default {
  data() {
    return {
      usuarioLogeado: false,
      usuario: null,
    }
  },
  mounted() {
    const usuario = this.$store.state.usuario
    if (usuario != null) {
      this.usuario = usuario
      this.usuarioLogeado = true
    } else {
    }
  },
  methods: {
    iniciarSesion() {
      this.$router.push('/login') // vamos hacia la ruta de perfil
    },
    irPerfil() {
      this.$router.push('/perfil')
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
</style>
