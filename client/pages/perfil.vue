<template>
  <div>
    {{ comprobarUsuario() }}
    <v-card color="primario" height="100%">
      <div class="div1">
        <v-toolbar dark color="primario">
          <v-toolbar-title class="secundario--text">Perfil</v-toolbar-title>
        </v-toolbar>
      </div>
      <v-tabs vertical class="tabPerfil primario" dark height="100%">
        <v-tab class="primario acentuado1--text"> Cuenta </v-tab>
        <v-tab class="primario acentuado1--text"> Personajes </v-tab>
        <v-tab-item> <cuenta> </cuenta> </v-tab-item>
        <v-tab-item> <inventario> </inventario> </v-tab-item>
      </v-tabs>
    </v-card>
  </div>
</template>

<style>
.div1 {
  border-width: 2px;
  border-style: solid;
  border-color: goldenrod;
}
</style>

<script>
import Cuenta from '@/components/Cuenta.vue'
import { mapGetters } from 'vuex'

export default {
  components: {
    Cuenta,
  },
  computed: {
    // Obtenemos usuario
    ...mapGetters({
      usuario: 'obtenerUsuario',
    }),
  },
  methods: {
    comprobarUsuario() {
      if (this.$store.state.usuario == null) {
        this.$router.push({ name: 'index' })
      }
    },
  },
}
</script>
