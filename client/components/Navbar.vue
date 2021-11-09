<template>
  <v-toolbar>
    <v-row class="d-flex justify-center">
      <v-btn text> Inicio </v-btn>
      <v-btn text> Familias </v-btn>
      <v-btn text> Personajes </v-btn>
      <v-btn text> Items </v-btn>
      <div align-h="end">
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
