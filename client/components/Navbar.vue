<template>
  <v-toolbar>
    <v-row>
      <v-btn text> Inicio </v-btn>
      <v-btn text> Familias </v-btn>
      <v-btn text> Personajes </v-btn>
      <v-btn text> Items </v-btn>
      <v-autocomplete
        v-model="model"
        width="2%"
        height="3%"
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
        solo
        x-small
      >
        <template v-slot:no-data>
          <v-list-item>
            <v-list-item-title>
              Search for your favorite
              <strong>Cryptocurrency</strong>
            </v-list-item-title>
          </v-list-item>
        </template>
        <template v-slot:selection="{ attr, on, item, selected }">
          <v-chip
            v-bind="attr"
            :input-value="selected"
            color="blue-grey"
            class="white--text"
            v-on="on"
          >
            <v-icon left> mdi-bitcoin </v-icon>
            <span v-text="item.name"></span>
          </v-chip>
        </template>
        <template v-slot:item="{ item }">
          <v-list-item-avatar
            color="indigo"
            class="text-h5 font-weight-light white--text"
          >
            {{ item.name.charAt(0) }}
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title v-text="item.name"></v-list-item-title>
            <v-list-item-subtitle v-text="item.symbol"></v-list-item-subtitle>
          </v-list-item-content>
          <v-list-item-action>
            <v-icon></v-icon>
          </v-list-item-action>
        </template>
      </v-autocomplete>
    </v-row>
  </v-toolbar>
</template>

<script>
export default {
  name: 'Barra2',
}
</script>
