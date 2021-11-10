<template>
  <v-list-item>
    <v-list-item-content id="personaje-card">
      <v-list-item-title>{{ nombre }}</v-list-item-title>
      <v-list-item-subtitle>info por definir</v-list-item-subtitle>
    </v-list-item-content>
  </v-list-item>
</template>

<script>
export default {
  props: {
    nombre: {
      type: String,
      required: true,
    },
  },
}
</script>
