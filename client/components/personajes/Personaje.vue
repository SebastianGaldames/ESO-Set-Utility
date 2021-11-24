<template>
  <div>
    {{ item === undefined ? 'none' : item.nombre }}
    {{ set === undefined ? 'none' : set.nombre }}
    {{ selectedSlot === undefined ? 'none' : selectedSlot }}
    <h1 style="text-align: center">{{ nombre }}</h1>
    <div class="d-flex flex-direction:column">
      <v-item-group v-model="selectedSlot" mandatory>
        <v-container fluid>
          <h2 style="text-align: center">Equipment</h2>
          <v-row align="center" justify="center" no-gutters>
            <v-col align="center" justify="center" no-gutters>
              <h4 style="text-align: center">Head</h4>
              <v-item v-slot="{ toggle }">
                <v-card outlined width="90" height="90" @click="toggle">
                  <itemSlot
                    v-if="isAgregarItem('Head')"
                    :id="'Head'"
                    :enable-item="isAgregarItem('Head')"
                    :enable-glyph="isAgregarGlyph('Armor')"
                    :enable-trait="isAgregarTrait('Armor')"
                    :slot-prop="newSlot"
                    style="padding: 5%"
                  ></itemSlot>
                </v-card>
              </v-item>
            </v-col>
          </v-row>
          <v-row align="center" justify="center" no-gutters>
            <v-col
              v-for="category in equipamiento"
              :key="category"
              align="center"
              justify="center"
              md="4"
              no-gutters
            >
              <h4 style="text-align: center">{{ category }}</h4>
              <v-item v-slot="{ toggle }">
                <v-card outlined width="90" height="90" @click="toggle">
                  <itemSlot
                    v-if="isAgregarItem(category)"
                    :id="category"
                    :enable-item="isAgregarItem(category)"
                    :enable-glyph="isAgregarGlyph('Armor')"
                    :enable-trait="isAgregarTrait('Armor')"
                    :slot-prop="newSlot"
                    style="padding: 5%"
                    @agregarSlotItem="setImagen"
                  ></itemSlot>
                </v-card>
              </v-item>
            </v-col>
          </v-row>
          <h2 style="text-align: center">Accessories</h2>
          <v-row align="center" justify="center">
            <v-col
              v-for="category in accesorios"
              :key="category"
              align="center"
              justify="center"
              md="4"
            >
              <h4 style="text-align: center">{{ category }}</h4>
              <v-item v-slot="{ toggle }">
                <v-card outlined width="90" height="90" @click="toggle">
                  <itemSlot
                    v-if="isAgregarItem(category)"
                    :id="category"
                    :enable-item="isAgregarItem(category)"
                    :enable-glyph="isAgregarGlyph('Jewelry')"
                    :enable-trait="isAgregarTrait('Jewelry')"
                    :slot-prop="newSlot"
                    style="padding: 5%"
                  ></itemSlot>
                </v-card>
              </v-item>
            </v-col>
          </v-row>
          <h2 style="text-align: center">Weapons</h2>
          <v-row align="center" justify="center">
            <v-col
              v-for="category in armas"
              :key="category"
              align="center"
              justify="center"
              md="4"
            >
              <h4 style="text-align: center">{{ category }}</h4>
              <v-item v-slot="{ toggle }">
                <v-card outlined width="90" height="90" @click="toggle">
                  <itemSlot
                    v-if="isAgregarItem(category)"
                    :id="category"
                    :enable-item="isAgregarItem(category)"
                    :enable-glyph="isAgregarGlyph('Weapon')"
                    :enable-trait="isAgregarTrait('Weapon')"
                    :slot-prop="newSlot"
                    style="padding: 5%"
                  >
                  </itemSlot>
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
    item: {
      type: Object,
      required: true,
    },
    set: {
      type: Object,
      required: true,
    },
    nombre: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      // Datos de prueba
      selectedSlot: {},
      equipamiento: ['Shoulders', 'Chest', 'Hands', 'Legs', 'Waist', 'Feet'],
      accesorios: ['Cuello', 'Anillo1', 'Anillo2'],
      armas: ['One-Handed', 'Two-Handed', 'Off Hand'],
      slotsInv: [
        ['Head'],
        ['Shoulders'],
        ['Chest'],
        ['Hands'],
        ['Legs'],
        ['Waist'],
        ['Feet'],
      ],
    }
  },
  computed: {
    newSlot() {
      let slotVal = {}
      if (!(this.item === undefined || this.set === undefined)) {
        const tempSlot = {
          item: this.item,
          glyph: undefined,
          trait: undefined,
          set: this.set,
        }
        slotVal = tempSlot
      } else {
        const empty = {
          item: undefined,
          glyph: undefined,
          trait: undefined,
          set: undefined,
        }
        slotVal = empty
      }
      return slotVal
    },
  },
  methods: {
    /* findSlot(val) {
      this.slotsInv.forEach((element) => {
        if (element[0] === val) {
          element[0].append(this.item)
          element[0].append(this.set)
        }
      })
    }, */
    setImagen() {
      return this.item.imagen
    },
    isAgregarItem(val) {
      return (
        !(this.item === undefined || this.set === undefined) &&
        this.item.categoria === val
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
