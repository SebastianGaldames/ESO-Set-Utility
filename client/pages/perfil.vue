<template>
  <v-card color="primario" height="100%">
    <div class="div1">
      <v-toolbar dark color="primario">
        <v-toolbar-title class="secundario--text">Perfil</v-toolbar-title>
      </v-toolbar>
    </div>
    <div class="div2">
      <v-tabs vertical class="tabPerfil primario" dark height="100%">
        <v-tab class="primario acentuado1--text"> Cuenta </v-tab>
        <v-tab class="primario acentuado1--text"> Inventario </v-tab>
        <v-tab class="primario acentuado1--text"> Personajes </v-tab>
        <v-tab-item> <cuenta> </cuenta> </v-tab-item>
        <v-tab-item> <inventario> </inventario> </v-tab-item>
        <v-tab-item> <personajes> </personajes> </v-tab-item>
      </v-tabs>
    </div>
  </v-card>
</template>

<style>
.div1 {
  border-width: 2px;
  border-style: solid;
  border-color: #a68f7b;
}
</style>

<script>
import Cuenta from '@/components/Cuenta.vue'
import Inventario from '@/components/Inventario.vue'
import Personajes from '@/components/Personajes.vue'

export default {
  components: {
    Cuenta,
    Inventario,
    Personajes,
  },
}
</script>
