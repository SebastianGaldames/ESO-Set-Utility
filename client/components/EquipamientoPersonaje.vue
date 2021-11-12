<template>
  <v-card>
    <v-card-text>Cascos</v-card-text>
    <v-list>
      <v-list-item v-for="item in filteredCascos" :key="item.id" :value="item">
        <v-list-item-content>
          <v-list-item-title>{{ item.nombre }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>

    <v-card-text>Hombros</v-card-text>
    <v-list>
      <v-list-item v-for="item in filteredHombros" :key="item.id" :value="item">
        <v-list-item-content>
          <v-list-item-title>{{ item.nombre }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>

    <v-card-text>Pies</v-card-text>
    <v-list>
      <v-list-item v-for="item in filteredPies" :key="item.id" :value="item">
        <v-list-item-content>
          <v-list-item-title>{{ item.nombre }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-card>
</template>

<script>
export default {
  props: {
    equip: {
      type: Array,
      default: () => [],
    },
  },
  data: () => ({
    cascos: [],
    hombros: [],
    pies: [],
  }),
  computed: {
    filteredCascos() {
      return this.equip.filter((item) => {
        return item.categoria.includes('casco')
      })
    },
    filteredHombros() {
      return this.equip.filter((item) => {
        return item.categoria.includes('hombros')
      })
    },
    filteredPies() {
      return this.equip.filter((item) => {
        return item.categoria.includes('pies')
      })
    },
  },
}
</script>
