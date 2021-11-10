<template>
  <v-card>
    <v-toolbar flat color="primary" dark>
      <v-toolbar-title>Perfil</v-toolbar-title>
    </v-toolbar>
    <v-tabs vertical>
      <v-tab> Cuenta </v-tab>
      <v-tab> Inventario </v-tab>
      <v-tab> Personajes </v-tab>
      <v-tab-item> <cuenta> </cuenta> </v-tab-item>
      <v-tab-item> <inventario> </inventario> </v-tab-item>
      <v-tab-item> <personajes> </personajes> </v-tab-item>
    </v-tabs>
  </v-card>
</template>

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
