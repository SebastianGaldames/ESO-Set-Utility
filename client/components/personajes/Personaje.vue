<template>
  <div>
    <h1 style="text-align: center">
      {{ selectedPj === undefined ? 'Personaje' : selectedPj.nombre }}
    </h1>
    <div class="">
      <v-item-group v-model="selectedSlot" mandatory>
        <v-container fluid>
          <h2 style="text-align: center">Equipment</h2>
          <v-row align="center" justify="center" no-gutters>
            <v-col
              v-for="(itemInv, index) in inventario"
              :key="index"
              align="center"
              justify="center"
              no-gutters
              md="4"
            >
              <h2 v-if="index === 7" style="text-align: center">Accessories</h2>
              <h2 v-if="index === 10" style="text-align: center">Weapons</h2>
              <h4
                v-if="index === 10 || index === 11"
                style="text-align: center"
              >
                Hand
              </h4>
              <h4 v-else style="text-align: center">{{ itemInv.categoria }}</h4>
              <v-item>
                <v-card outlined width="90" height="90">
                  <itemSlot
                    v-if="isItem(itemInv.categoria, index)"
                    :id="itemInv.categoria"
                    :enable-item="itemInv.enableItem"
                    :enable-glyph="false"
                    :enable-trait="false"
                    :slot-prop="itemInv.slotPJ"
                    style="padding: 5%"
                    @agregarSlotItem="handleAgregarSlotItem(index)"
                  ></itemSlot>
                  <itemSlot
                    v-else
                    :id="itemInv.categoria"
                    :enable-item="false"
                    :enable-glyph="false"
                    :enable-trait="false"
                    :slot-prop="itemInv.slotPJ"
                    style="padding: 5%"
                  ></itemSlot>
                </v-card>
              </v-item>
            </v-col>
          </v-row>
        </v-container>
      </v-item-group>
      <v-btn
        color="acentuado3"
        class="mx-2 texto1--text"
        x-small
        @click="guardarInventario"
      >
        Save
      </v-btn>
    </div>
  </div>
</template>

<style></style>

<script>
import itemSlot from '~/components/personajes/Slot.vue'

export default {
  components: {
    itemSlot,
  },
  props: {
    allItems: {
      type: Array,
      required: true,
    },
    allSets: {
      type: Array,
      required: true,
    },
    item: {
      type: Object,
      default: undefined,
    },
    set: {
      type: Object,
      default: undefined,
    },
    personaje: {
      type: Object,
      default: undefined,
    },
  },
  data() {
    return {
      selectedSlot: {},
      selectedItem: {},
      selectedSet: {},
      selectedPj: {},
      inventario: [],
    }
  },
  watch: {
    personaje() {
      this.selectedPj = this.personaje
    },
    set() {
      this.selectedSet = this.set
    },
    item() {
      this.selectedItem = this.item
    },
    selectedItem() {
      for (let index = 0; index < this.inventario.length; index++) {
        this.inventario[index].enableItem = true
      }
    },
  },
  beforeMount() {
    this.buildPJ()
  },
  methods: {
    buildPJ() {
      const partes = [
        'Head',
        'Shoulders',
        'Chest',
        'Hands',
        'Waist',
        'Legs',
        'Feet',
        'Necklace',
        'Ring',
        'Ring',
        'One-Handed',
        'One-Handed',
        'Off Hand',
      ]
      for (let index = 0; index < partes.length; index++) {
        const parte = {
          enableItem: true,
          categoria: partes[index],
          slotPJ: {
            item: undefined,
            glyph: undefined,
            trait: undefined,
            set: undefined,
          },
        }
        this.inventario.push(parte)
      }
    },
    handleAgregarSlotItem(index) {
      const itemAux = this.allItems.find(
        (itemTemp) => itemTemp._id === this.selectedItem._id
      )
      const setAux = this.allSets.find(
        (setTemp) => setTemp._id === this.selectedSet._id
      )
      this.inventario[index].slotPJ.item = itemAux
      this.inventario[index].slotPJ.set = setAux
      this.inventario[index].enableItem = false
      if (this.isTwoHanded()) {
        this.inventario[index - 1].slotPJ.item = itemAux
        this.inventario[index - 1].slotPJ.set = setAux
      }
      if (this.isOneHanded(index)) {
        this.inventario[index + 1].slotPJ.item = undefined
        this.inventario[index + 1].slotPJ.set = undefined
      }
      this.selectedPj.slots.push(this.inventario[index].slotPJ)
      this.$emit('slotChanged', this.selectedPj.slots)
    },
    guardarInventario() {
      this.$emit('saveBuild', this.selectedPj.slots)
    },
    isItem(val, index) {
      if (index === 11 && this.isTwoHanded()) {
        return (
          !(
            this.selectedItem === undefined || this.selectedSet === undefined
          ) && this.selectedItem.categoria === 'Two-Handed'
        )
      }
      return (
        !(this.selectedItem === undefined || this.selectedSet === undefined) &&
        this.selectedItem.categoria === val
      )
    },
    isTwoHanded() {
      if (
        this.selectedItem !== undefined &&
        this.selectedItem.categoria === 'Two-Handed'
      ) {
        return true
      }
      return false
    },
    isOneHanded(index) {
      return (
        index === 10 &&
        this.inventario[index + 1].categoria !== 'One-Handed' &&
        this.inventario[index + 1].slotPJ.item !== undefined
      )
    },
    isAgregarGlyph(val) {
      return !(this.glyph === undefined) && this.glyph.tipo === val
    },
    isAgregarTrait(val) {
      return !(this.trait === undefined) && this.trait.tipo === val
    },
  },
}
</script>
