<template>
  <div>
    <div>inventario</div>
    <div>items</div>
    <v-text-field
      id="buscador"
      v-model="busqueda"
      label="Buscar"
      append-icon="fas fa-lock"
    ></v-text-field>
    <v-combobox :items="categorias" outlined solo></v-combobox>
    {{ items[0] }}
    <div class="d-flex align-content-start flex-wrap">
      <div v-for="item in resultadoBusqueda" :key="item.nombre" flat>
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
    resultadoBusqueda() {
      if (this.busqueda) {
        return this.items.filter((item) => {
          return this.busqueda
            .toLowerCase()
            .split(' ')
            .every(
              (v) =>
                item.nombre.toLowerCase().includes(v) ||
                item.tipo.toLowerCase().includes(v)
            )
        })
      } else {
        return this.items
      }
    },
    categorias() {
      const cats = new Set()
      for (const item of this.items) {
        cats.add(item.tipo)
      }
      return [...cats]
    },
  },
}
</script>
