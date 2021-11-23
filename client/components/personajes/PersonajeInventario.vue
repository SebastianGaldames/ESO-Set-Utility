<template>
  <div class="pa-2">
    <div class="d-flex flex-direction:column">
      <v-card width="30%" class="pa-2">
        <v-text-field
          v-model="setFilter"
          label="Buscar Set"
          color="acentuado1"
          clearable
          append-icon="fas fa-lock"
        ></v-text-field>
        <v-list nav dense>
          <v-list-item-group
            v-model="selectedFamilia"
            class="scrollable"
            mandatory
          >
            <v-list-item
              v-for="(familia, nombre) in filteredSets"
              :key="nombre"
              :value="familia"
            >
              <v-list-item-content>
                <v-list-item-title v-text="familia.nombre"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-card>
      <v-card width="70%">
        <!-- <item-box :item="items[0]"></item-box> -->
        <div id="itemsPanel">
          <div class="d-flex pa-2">
            <v-text-field
              id="buscador"
              v-model="busqueda"
              label="Buscar Item"
              clearable
              append-icon="fas fa-lock"
              color="acentuado1"
            ></v-text-field>
            <v-combobox
              v-model="categoriaFilterValue"
              label="Categoría"
              :items="categorias"
              outlined
              dense
              color="acentuado1"
              clearable
              hide-selected
            ></v-combobox>
          </div>
          <v-item-group v-model="selectedItem">
            <v-container fluid>
              <v-row no-gutters>
                <v-col
                  v-for="item in filteredItems"
                  :key="item.nombre"
                  cols="12"
                  md="3"
                  no-gutters
                >
                  <v-item v-slot="{ active, toggle }" :value="item">
                    <v-sheet class="d-flex align-center ma-1" @click="toggle">
                      <v-card
                        v-if="active"
                        width="100%"
                        color="acentuado1"
                        outlined
                      >
                        <v-sheet rounded>
                          <item-box :item="item"></item-box>
                        </v-sheet>
                      </v-card>
                      <v-card v-else width="100%" outlined>
                        <item-box :item="item"></item-box>
                      </v-card>
                    </v-sheet>
                  </v-item>
                </v-col>
              </v-row>
            </v-container>
          </v-item-group>
        </div>
      </v-card>
    </div>
  </div>
</template>
<script>
import ItemBox from '~/components/personajes/ItemBox.vue'
export default {
  /* eslint-disable vue/no-unused-components */
  components: { ItemBox },
  props: {
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
    inventario: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      selectedItem: {},
      selectedFamilia: {},
      busqueda: '',
      categoriaFilterValue: '',
      setFilter: '',
    }
  },
  computed: {
    filteredItems() {
      return this.filterByText(this.filterByTipo())
    },
    filteredSets() {
      return this.filterSetByText()
    },
    categorias() {
      const cats = new Set()
      for (const item of this.items) {
        cats.add(item.categoria)
      }
      return [...cats]
    },
  },
  watch: {
    selectedFamilia(val) {
      this.selectedFamilyChanged()
    },
    selectedItem(val) {
      this.selectedItemChanged()
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
    filterSetByText() {
      return this.familias.filter((set) => {
        if (this.setFilter === '' || this.setFilter == null) {
          return set
        }
        return this.setFilter
          .toLowerCase()
          .split(' ')
          .every(
            (v) => set.nombre.toLowerCase().includes(v)
            // || item.tipo.toLowerCase().includes(v)
          )
      })
    },
    // emits an event to update the parent component
    selectedFamilyChanged() {
      this.$emit('familyChanged', this.selectedFamilia)
    },
    selectedItemChanged() {
      this.$emit('itemChanged', this.selectedItem)
    },
  },
}
</script>
<style>
.scrollable {
  overflow-y: scroll;
  height: 60vh;
}
</style>
