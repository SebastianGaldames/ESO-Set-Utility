<template>
  <div>
    <h1 style="text-align: center">
      {{ selectedPj === undefined ? 'Personaje' : selectedPj.nombre }}
    </h1>
    <div class="">
      <v-item-group>
        <v-container fluid>
          <h2 style="text-align: center">Equipment</h2>
          <v-row align="center" justify="center" no-gutters>
            <v-col
              v-for="(slotEq, index) in inventario"
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
              <h4 v-else style="text-align: center">
                {{ slotEq.slotPJ.posicion }}
              </h4>
              <v-item>
                <v-card outlined width="90" height="90">
                  <itemSlot
                    v-if="isItem(slotEq.slotPJ.posicion, index)"
                    :id="slotEq.slotPJ.posicion"
                    :enable-item="slotEq.enableItem"
                    :enable-glyph="false"
                    :enable-trait="false"
                    :slot-prop="slotEq.slotPJ"
                    style="padding: 5%"
                    @agregarSlotItem="handleAgregarSlotItem(index)"
                  ></itemSlot>
                  <itemSlot
                    v-else
                    :id="slotEq.slotPJ.posicion"
                    :enable-item="false"
                    :enable-glyph="false"
                    :enable-trait="false"
                    :slot-prop="slotEq.slotPJ"
                    style="padding: 5%"
                  ></itemSlot>
                </v-card>
              </v-item>
            </v-col>
          </v-row>
        </v-container>
      </v-item-group>
      <v-btn color="acentuado3" @click="guardarInventario"> Save </v-btn>
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
    selectedPj() {
      this.inventario = []
      this.selectedItem = {}
      this.buildPJ()
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
      const secciones = [
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
      for (let index = 0; index < secciones.length; index++) {
        let temp = secciones[index]
        if (index === 8) {
          temp = 'Ring 1'
        }
        if (index === 9) {
          temp = 'Ring 2'
        }
        if (index === 10) {
          temp = 'Hand L'
        }
        if (index === 11) {
          temp = 'Hand R'
        }
        const seccion = {
          enableItem: true,
          slotPJ: {
            item: undefined,
            familia: undefined,
            nivel: 50,
            calidad: 'dorada',
            posicion: secciones[index],
            tag: temp,
            glyph: undefined,
            potenciaGlyph: undefined,
            calidadGlyph: undefined,
            trait: undefined,
          },
        }
        this.inventario.push(seccion)
      }
      // this.selectedPj.slots = slotsAux
      // console.log(this.selectedPj.slots)
    },
    handleAgregarSlotItem(index) {
      const itemAux = this.allItems.find(
        (itemTemp) => itemTemp._id === this.selectedItem._id
      )
      const setAux = this.allSets.find(
        (setTemp) => setTemp._id === this.selectedSet._id
      )
      if (this.isTwoHanded()) {
        this.inventario[11].slotPJ.posicion = 'Two-Handed'
        this.inventario[index - 1].slotPJ.item = itemAux
        this.inventario[index - 1].slotPJ.familia = setAux
      }
      if (this.isOneHanded()) {
        this.inventario[11].slotPJ.item = undefined
        this.inventario[11].slotPJ.familia = undefined
        this.inventario[11].slotPJ.posicion = 'One-Handed'
      }
      this.inventario[index].slotPJ.item = itemAux
      this.inventario[index].slotPJ.familia = setAux
      this.inventario[index].enableItem = false
      this.$emit('slotChanged', this.inventario[index].slotPJ)
    },
    guardarInventario() {
      this.$emit('saveBuild')
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
      return (
        this.selectedItem !== undefined &&
        this.selectedItem.categoria === 'Two-Handed'
      )
    },
    isOneHanded() {
      return (
        this.selectedItem !== undefined &&
        this.selectedItem.categoria === 'One-Handed' &&
        this.inventario[11].slotPJ.item !== undefined &&
        this.inventario[11].slotPJ.posicion !== 'One-Handed'
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
