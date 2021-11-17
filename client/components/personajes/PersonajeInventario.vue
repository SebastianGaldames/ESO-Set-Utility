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
    selecteditem: {{ selectedItem }} <br />
    selectedFamilia: {{ selectedFamilia.nombre }}
    <div class="d-flex flex-direction:column">
      <v-item-group v-model="selectedFamilia">
        <v-container fluid>
          <v-row no-gutters>
            <v-col
              v-for="familia in familias"
              :key="familia.nombre"
              cols="12"
              md="12"
              no-gutters
            >
              <v-sheet min-height="16" class="fill-height" color="transparent">
                <v-lazy>
                  <v-item v-slot="{ toggle }" class="ma-1" :value="familia">
                    <v-card @click="toggle">
                      {{ familia.nombre }}
                    </v-card>
                  </v-item>
                </v-lazy>
              </v-sheet>
            </v-col>
          </v-row>
        </v-container>
      </v-item-group>

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
              <v-sheet min-height="100" class="fill-height" color="transparent">
                <v-lazy>
                  <v-item v-slot="{ toggle }" class="ma-1" :value="item">
                    <v-card @click="toggle">
                      <item-box :item="item"></item-box>
                    </v-card>
                  </v-item>
                </v-lazy>
              </v-sheet>
            </v-col>
          </v-row>
        </v-container>
      </v-item-group>
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
      selectedFamilia: {},
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
