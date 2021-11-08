<template>
  <v-card tile>
    <v-btn @click="agregarItem()">+</v-btn>
    <v-list>
      <v-subheader>Lista de Items</v-subheader>
      <v-list-item-group v-model="selectedItem" color="primary">
        <v-list-item v-for="(item, i) in items" :key="i">
          <v-list-item-content>
            <v-list-item-title v-text="item.nombre"></v-list-item-title>
            <v-list-item-title v-text="item.familia"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    selectedItem: 1,
    items: [
      { nombre: 'Breton Helm', familia: 'ADEPT RIDER' },
      { nombre: 'Breton Cuirass', familia: 'ADEPT RIDER' },
      { nombre: 'Breton Gauntlets', familia: 'HIST WHISPERER' },
    ],
  }),
  methods: {},
}
</script>
