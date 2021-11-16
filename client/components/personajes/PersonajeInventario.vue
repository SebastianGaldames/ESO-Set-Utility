<template>
  <div>
    <div>inventario</div>
    <div>items</div>
    <div class="d-flex pa-2">
      <v-text-field
        id="buscador"
        v-model="busqueda"
        label="Buscar"
        clearable
        append-icon="fas fa-lock"
      ></v-text-field>
      <v-combobox
        v-model="categoriaFilterValue"
        :items="categorias"
        outlined
        solo
        clearable
      ></v-combobox>
    </div>

    {{ items[0] }} <br />
    {{ categoriaFilterValue }}
    <div class="d-flex align-content-start flex-wrap">
      <div v-for="item in filteredItems" :key="item.nombre" flat>
        <item-box :item="item"></item-box>
      </div>
    </div>
  </div>
</template>
<script>
import ItemBox from '~/components/personajes/ItemBox.vue'
export default {
  components: { ItemBox },
  props: {
    // value: {
    //   type: Object,
    //   default: () => {},
    //   required: true,
    // },
    items: {
      type: Array,
      default: () => [],
      required: true,
    },
    familias: {
      type: Array,
      default: () => [],
      required: true,
    },
  },
  data() {
    return {
      selectedItem: {},
      busqueda: '',
      categoriaFilterValue: '',
    }
  },
  computed: {
    filteredItems() {
      return this.filterByText(this.filterByTipo())
    },
    categorias() {
      const cats = new Set()
      for (const item of this.items) {
        cats.add(item.categoria)
      }
      return [...cats]
    },
  },
  methods: {
    filterByTipo() {
      return this.items.filter((item) => {
        if (
          this.categoriaFilterValue === '' ||
          this.categoriaFilterValue == null
        ) {
          return item
        }
        if (item.categoria === this.categoriaFilterValue) {
          return item
        }
      })
    },
    filterByText(items) {
      return items.filter((item) => {
        if (this.busqueda === '' || this.busqueda == null) {
          return item
        }
        return this.busqueda
          .toLowerCase()
          .split(' ')
          .every(
            (v) =>
              item.nombre.toLowerCase().includes(v) ||
              item.tipo.toLowerCase().includes(v)
          )
      })
    },
  },
}
</script>
