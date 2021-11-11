<template>
  <v-list-item>
    <v-list-item-content id="personaje-card">
      <v-list-item-title class="texto1--text">{{ nombre }}</v-list-item-title>
      <v-list-item-subtitle class="secundario--text"
        >info por definir</v-list-item-subtitle
      >
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
