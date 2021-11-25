<template>
  <div>
    <h1 style="text-align: center">
      {{ personaje === undefined ? 'Personaje' : personaje.nombre }}
    </h1>
    <div class="">
      <v-item-group v-model="selectedSlot" mandatory>
        <v-container fluid>
          <h2 style="text-align: center">Equipment</h2>
          <v-row align="center" justify="center" no-gutters>
            <v-col
              v-for="(slotI, index) in inventario"
              :key="index"
              align="center"
              justify="center"
              no-gutters
              md="4"
            >
              <h2 v-if="index === 7" style="text-align: center">Accessories</h2>
              <h2 v-if="index === 10" style="text-align: center">Weapons</h2>
              <h4 style="text-align: center">{{ slotI.categoria }}</h4>
              <v-item v-slot="{ toggle }">
                <v-card outlined width="90" height="90" @click="toggle">
                  <itemSlot
                    v-if="isItem(slotI.categoria)"
                    :id="slotI.categoria"
                    :enable-item="slotI.enable"
                    :enable-glyph="isAgregarGlyph('Armor')"
                    :enable-trait="isAgregarTrait('Armor')"
                    :slot-prop="slotI.slotPJ"
                    style="padding: 5%"
                    @agregarSlotItem="
                      handleAgregarSlotItem(slotI.slotPJ, index)
                    "
                  ></itemSlot>
                </v-card>
              </v-item>
            </v-col>
          </v-row>
        </v-container>
      </v-item-group>
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
      required: true,
    },
    set: {
      type: Object,
      required: true,
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
      inventario: [],
    }
  },
  watch: {
    item() {
      this.selectedItem = this.item
    },
  },
  mounted() {
    this.buildPJ()
  },
  methods: {
    buildPJ() {
      const partes = [
        'Head',
        'Shoulders',
        'Chest',
        'Hands',
        'Legs',
        'Waist',
        'Feet',
        'Neck',
        'Ring 1',
        'Ring 2',
        'One-Handed',
        'Two-Handed',
        'Off Hand',
      ]
      for (let index = 0; index < partes.length; index++) {
        const parte = {
          enable: true,
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
    handleAgregarSlotItem(slotItem, index) {
      slotItem.item = this.allItems.find(
        (itemTemp) => itemTemp._id === this.selectedItem._id
      )
      this.inventario[index].slotPJ.item = slotItem.item
      this.inventario[index].enable = false
      console.log(this.inventario[index].slotPJ.item)
    },
    isItem(val) {
      return (
        !(this.selectedItem === undefined) &&
        this.selectedItem.categoria === val
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
