<template>
  <v-toolbar dark>
    <v-row class="d-flex justify-center">
      <v-btn text> <NuxtLink to="/">Inicio</NuxtLink> </v-btn>
      <v-btn text> Familias </v-btn>
      <v-btn text> Personajes </v-btn>
      <v-btn text> Items </v-btn>
      <div>
        <v-autocomplete
          v-model="model"
          :items="items"
          :loading="isLoading"
          :search-input.sync="search"
          chips
          clearable
          hide-details
          hide-selected
          item-text="name"
          item-value="symbol"
          label="Búsqueda..."
        >
        </v-autocomplete>
      </div>
    </v-row>
  </v-toolbar>
</template>

<script>
export default {}
</script>
