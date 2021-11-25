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
      inventario: [
        {
          enable: true,
          categoria: 'Head',
          slotPJ: {
            item: undefined,
            glyph: undefined,
            trait: undefined,
            set: undefined,
          },
        },
        {
          enable: true,
          categoria: 'Shoulders',
          slotPJ: {
            item: undefined,
            glyph: undefined,
            trait: undefined,
            set: undefined,
          },
        },
        {
          enable: true,
          categoria: 'Chest',
          slotPJ: {
            item: undefined,
            glyph: undefined,
            trait: undefined,
            set: undefined,
          },
        },
        {
          enable: true,
          categoria: 'Hands',
          slotPJ: {
            item: undefined,
            glyph: undefined,
            trait: undefined,
            set: undefined,
          },
        },
        {
          enable: true,
          categoria: 'Legs',
          slotPJ: {
            item: undefined,
            glyph: undefined,
            trait: undefined,
            set: undefined,
          },
        },
        {
          enable: true,
          categoria: 'Waist',
          slotPJ: {
            item: undefined,
            glyph: undefined,
            trait: undefined,
            set: undefined,
          },
        },
        {
          enable: true,
          categoria: 'Feet',
          slotPJ: {
            item: undefined,
            glyph: undefined,
            trait: undefined,
            set: undefined,
          },
        },
        {
          enable: true,
          categoria: 'Neck',
          slotPJ: {
            item: undefined,
            glyph: undefined,
            trait: undefined,
            set: undefined,
          },
        },
        {
          enable: true,
          categoria: 'Ring 1',
          slotPJ: {
            item: undefined,
            glyph: undefined,
            trait: undefined,
            set: undefined,
          },
        },
        {
          enable: true,
          categoria: 'Ring 2',
          slotPJ: {
            item: undefined,
            glyph: undefined,
            trait: undefined,
            set: undefined,
          },
        },
        {
          enable: true,
          categoria: 'One-Handed',
          slotPJ: {
            item: undefined,
            glyph: undefined,
            trait: undefined,
            set: undefined,
          },
        },
        {
          enable: true,
          categoria: 'Two-Handed',
          slotPJ: {
            item: undefined,
            glyph: undefined,
            trait: undefined,
            set: undefined,
          },
        },
        {
          enable: true,
          categoria: 'Off Hand',
          slotPJ: {
            item: undefined,
            glyph: undefined,
            trait: undefined,
            set: undefined,
          },
        },
      ],
    }
  },
  watch: {
    item() {
      this.selectedItem = this.item
    },
  },
  methods: {
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
