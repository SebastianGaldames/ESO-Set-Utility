<template>
  <div>
    {{ selectedItem === undefined ? 'none' : selectedItem.nombre }}
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
                    :enable-item="enableAgregarItem"
                    :enable-glyph="isAgregarGlyph('Armor')"
                    :enable-trait="isAgregarTrait('Armor')"
                    :slot-prop="headSlot"
                    style="padding: 5%"
                    @agregarSlotItem="handleAgregarSlotItem"
                  ></itemSlot>
                </v-card>
              </v-item>
            </v-col>
          </v-row>
          <v-row align="center" justify="center" no-gutters>
            <v-col
              v-for="(slotArmor, index) in slotsEq"
              :key="index"
              align="center"
              justify="center"
              md="4"
              no-gutters
            >
              <h4 style="text-align: center">{{ slotArmor.categoria }}</h4>
              <v-item v-slot="{ toggle }">
                <v-card outlined width="90" height="90" @click="toggle">
                  <itemSlot
                    v-if="isAgregarItem(slotArmor.categoria)"
                    :id="slotArmor.categoria"
                    :enable-item="isAgregarItem(slotArmor.categoria)"
                    :enable-glyph="isAgregarGlyph('Armor')"
                    :enable-trait="isAgregarTrait('Armor')"
                    :slot-prop="slotArmor"
                    style="padding: 5%"
                  ></itemSlot>
                </v-card>
              </v-item>
            </v-col>
          </v-row>
          <h2 style="text-align: center">Accessories</h2>
          <v-row align="center" justify="center">
            <v-col
              v-for="(slotAcc, index) in slotsAcc"
              :key="index"
              align="center"
              justify="center"
              md="4"
            >
              <h4 style="text-align: center">{{ slotAcc.categoria }}</h4>
              <v-item v-slot="{ toggle }">
                <v-card outlined width="90" height="90" @click="toggle">
                  <itemSlot
                    v-if="isAgregarItem(slotAcc.categoria)"
                    :id="slotAcc.categoria"
                    :enable-item="isAgregarItem(slotAcc.categoria)"
                    :enable-glyph="isAgregarGlyph('Jewelry')"
                    :enable-trait="isAgregarTrait('Jewelry')"
                    :slot-prop="slotAcc"
                    style="padding: 5%"
                  ></itemSlot>
                </v-card>
              </v-item>
            </v-col>
          </v-row>
          <h2 style="text-align: center">Weapons</h2>
          <v-row align="center" justify="center">
            <v-col
              v-for="(slotWpn, index) in slotsArm"
              :key="index"
              align="center"
              justify="center"
              md="4"
            >
              <h4 style="text-align: center">{{ slotWpn.categoria }}</h4>
              <v-item v-slot="{ toggle }">
                <v-card outlined width="90" height="90" @click="toggle">
                  <itemSlot
                    v-if="isAgregarItem(slotWpn.categoria)"
                    :id="slotWpn.categoria"
                    :enable-item="isAgregarItem(slotWpn.categoria)"
                    :enable-glyph="isAgregarGlyph('Weapon')"
                    :enable-trait="isAgregarTrait('Weapon')"
                    :slot-prop="slotWpn"
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
      selectedItem: this.item,
      headSlot: {
        categoria: 'Head',
        item: undefined,
        glyph: undefined,
        trait: undefined,
        set: undefined,
      },
      slotsEq: {
        shouldersSlot: {
          categoria: 'Shoulders',
          item: undefined,
          glyph: undefined,
          trait: undefined,
          set: undefined,
        },
        chestSlot: {
          categoria: 'Chest',
          item: undefined,
          glyph: undefined,
          trait: undefined,
          set: undefined,
        },
        handsSlot: {
          categoria: 'Hands',
          item: undefined,
          glyph: undefined,
          trait: undefined,
          set: undefined,
        },
        legsSlot: {
          categoria: 'Legs',
          item: undefined,
          glyph: undefined,
          trait: undefined,
          set: undefined,
        },
        waistSlot: {
          categoria: 'Waist',
          item: undefined,
          glyph: undefined,
          trait: undefined,
          set: undefined,
        },
        feetSlot: {
          categoria: 'Feet',
          item: undefined,
          glyph: undefined,
          trait: undefined,
          set: undefined,
        },
      },
      slotsAcc: {
        neckSlot: {
          categoria: 'Neck',
          item: undefined,
          glyph: undefined,
          trait: undefined,
          set: undefined,
        },
        ring1Slot: {
          categoria: 'Ring',
          item: undefined,
          glyph: undefined,
          trait: undefined,
          set: undefined,
        },
        ring2Slot: {
          categoria: 'Ring',
          item: undefined,
          glyph: undefined,
          trait: undefined,
          set: undefined,
        },
      },
      slotsArm: {
        oneHSlot: {
          categoria: 'One-Handed',
          item: undefined,
          glyph: undefined,
          trait: undefined,
          set: undefined,
        },
        twoHSlot: {
          categoria: 'Two-Handed',
          item: undefined,
          glyph: undefined,
          trait: undefined,
          set: undefined,
        },
        offHSlot: {
          categoria: 'Off Hand',
          item: undefined,
          glyph: undefined,
          trait: undefined,
          set: undefined,
        },
      },
      enableAgregarItem: true,
    }
  },
  watch: {
    item() {
      this.selectedItem = this.item
    },
    selectedItem() {
      if (this.isAgregarItem('Head')) {
        this.enableAgregarItem = true
      }
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
    /* newSlot(posicion) {
      let slotVal = {}
      if (!(this.selectedItem === undefined || this.set === undefined)) {
        const tempSlot = {
          item: this.selectedItem,
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
    }, */
    handleAgregarSlotItem(id) {
      const targetItem = this.allItems.find(
        (itemTemp) => itemTemp._id === this.selectedItem._id
      )
      this.headSlot.item = targetItem
      this.enableAgregarItem = false
      console.log(this.headSlot.item)
    },
    isAgregarItem(val) {
      return (
        !(this.selectedItem === undefined) &&
        this.selectedItem.categoria === val
      )
    },
    test(val) {
      console.log(
        !(this.selectedItem === undefined) &&
          this.selectedItem.categoria === val
      )
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
