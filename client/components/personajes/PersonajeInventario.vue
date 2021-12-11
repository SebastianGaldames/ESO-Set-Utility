<template>
  <div class="pa-2">
    <div class="d-flex flex-direction:column">
      <v-card width="30%" class="pa-2">
        <h3>Sets</h3>
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
        <!-- {{ inventarioViewModel }} <br /> -->
        <!-- <item-box :item="items[0]"></item-box> -->
        <h3>Inventario</h3>
        <v-item-group @change="handleSelectionInventory">
          <v-container fluid>
            <v-row no-gutters>
              <v-col
                v-for="inventarioItem in inventarioViewModel"
                :key="inventarioItem._id"
                cols="12"
                md="3"
                no-gutters
              >
                <v-item v-slot="{ active, toggle }" :value="inventarioItem">
                  <v-sheet class="d-flex align-center pa-1" @click="toggle">
                    <v-card
                      v-if="active"
                      width="100%"
                      color="acentuado1"
                      outlined
                    >
                      <v-sheet rounded class="pa-2">
                        <!-- <item-box :item="item.item"></item-box> -->
                        {{ inventarioItem.item.nombre }}<br />
                        <h5>{{ inventarioItem.set.nombre }}</h5>
                      </v-sheet>
                    </v-card>
                    <v-card v-else width="100%" outlined class="pa-2">
                      {{ inventarioItem.item.nombre }}<br />
                      <h5>{{ inventarioItem.set.nombre }}</h5>
                      <!-- <item-box :item="item.item"></item-box> -->
                    </v-card>
                  </v-sheet>
                </v-item>
              </v-col>
              <v-dialog v-model="eliminar" width="600">
                <div>
                  <v-card class="justify-center" max-width="600">
                    <v-card-title class="justify-center"
                      >Eliminar Items</v-card-title
                    >
                    <div v-if="inventarioViewModel !== undefined">
                      <v-card-text>
                        <v-checkbox
                          v-model="selectedAllItems"
                          label="Seleccionar todo"
                        ></v-checkbox>
                        <div
                          v-for="(itemInventario, index) in inventarioViewModel"
                          :key="itemInventario.nombre"
                        >
                          <v-checkbox
                            v-model="checkboxes[index]"
                            :label="
                              itemInventario.item.nombre +
                              ' from set ' +
                              itemInventario.set.nombre
                            "
                          ></v-checkbox></div
                      ></v-card-text>
                    </div>
                    <v-card-actions class="justify-center">
                      <v-btn @click="deleteItems"> Eliminar </v-btn>
                      <v-btn @click="eliminar = false"> Cancelar </v-btn>
                    </v-card-actions>
                  </v-card>
                </div>
              </v-dialog>
            </v-row>
            <v-btn v-if="inventario.length > 0" @click="eliminarItems">
              Eliminar Items
            </v-btn>
          </v-container>
        </v-item-group>
        <v-divider></v-divider>
        <div id="itemsPanel">
          <h3>Items</h3>
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
          <v-btn @click="updateInventoryEvent()">Agregar a Inventario</v-btn>
          <v-snackbar v-model="snackbar" timeout="3000" top>
            <span>¡Item agregado al inventario exitosamente!</span>
            <v-btn @click="snackbar = false">Cerrar</v-btn>
          </v-snackbar>
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
    allItems: {
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
      snackbar: false,
      eliminar: false,
      checkboxes: [],
      largoCheckBoxes: 0,
      deletedItems: [],
    }
  },
  computed: {
    // Seleccionar todos los checkbox de eliminar item
    selectedAllItems: {
      set(val) {
        this.checkboxes = []
        if (val) {
          for (let i = 0; i < this.inventario.length; i++) {
            this.checkboxes.push(true)
          }
        }
      },
      get() {
        return this.largoCheckBoxes === this.inventario.length
      },
    },
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
    inventarioViewModel() {
      const tempVM = []
      try {
        for (const inventoryItem of this.inventario) {
          const targetSet = this.familias.find(
            (set) => set._id === inventoryItem.set
          )

          const targetItem = this.allItems.find(
            (item) => item._id === inventoryItem.item
          )
          tempVM.push({ set: targetSet, item: targetItem })
          // tempVM.push({ itemId: inventoryItem.item, setId: inventoryItem.set })
        }
      } catch {}
      return tempVM
    },
  },
  watch: {
    selectedFamilia(val) {
      this.selectedFamilyChanged()
    },
    selectedItem(val) {
      this.selectedItemChanged()
    },
    deletedItems(val) {
      this.deletedItemsChanged()
    },
  },
  methods: {
    // Se agregan los items del inventario eliminados a la lista de items eliminados
    deleteItems() {
      this.deletedItems = []
      for (let i = 0; i < this.checkboxes.length; i++) {
        if (this.checkboxes[i] === true) {
          this.deletedItems.push(i)
        }
      }
      this.eliminar = false
    },
    // Se inicia el v-dialog
    eliminarItems() {
      this.eliminar = true
      this.checkboxes = []
      for (let i = 0; i < this.checkboxes.length; i++) {
        this.checkboxes[i] = false
      }
    },
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
    updateInventoryEvent() {
      this.$emit('updateInventory')
      this.snackbar = true
    },
    handleSelectionInventory(event) {
      if (event === undefined) {
      } else {
        this.selectedItem = event.item
        this.selectedFamilia = event.set
      }
    },
    deletedItemsChanged() {
      this.$emit('deletedItems', this.deletedItems)
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
