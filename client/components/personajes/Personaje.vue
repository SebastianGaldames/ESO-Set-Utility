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
            <v-col align="center" justify="center" no-gutters>
              <h4 style="text-align: center">Head</h4>
              <v-item v-slot="{ toggle }">
                <v-card outlined width="90" height="90" @click="toggle">
                  <itemSlot
                    v-if="isAgregarItem('Head')"
                    :id="'Head'"
                    :enable-item="enableAgregarItemHead"
                    :enable-glyph="isAgregarGlyph('Armor')"
                    :enable-trait="isAgregarTrait('Armor')"
                    :slot-prop="headSlot"
                    style="padding: 5%"
                    @agregarSlotItem="handleAgregarSlotItem(headSlot, 'Head')"
                  ></itemSlot>
                </v-card>
              </v-item>
            </v-col>
          </v-row>
          <v-row align="center" justify="center">
            <v-col align="center" justify="center" md="4">
              <h4 style="text-align: center">Shoulders</h4>
              <v-item v-slot="{ toggle }">
                <v-card outlined width="90" height="90" @click="toggle">
                  <itemSlot
                    v-if="isAgregarItem('Shoulders')"
                    :id="'Shoulders'"
                    :enable-item="enableAgregarItemShoulders"
                    :enable-glyph="isAgregarGlyph('Armor')"
                    :enable-trait="isAgregarTrait('Armor')"
                    :slot-prop="shouldersSlot"
                    style="padding: 5%"
                    @agregarSlotItem="
                      handleAgregarSlotItem(shouldersSlot, 'Shoulders')
                    "
                  ></itemSlot>
                </v-card>
              </v-item>
              <h4 style="text-align: center">Legs</h4>
              <v-item v-slot="{ toggle }">
                <v-card outlined width="90" height="90" @click="toggle">
                  <itemSlot
                    v-if="isAgregarItem('Legs')"
                    :id="'Legs'"
                    :enable-item="enableAgregarItemLegs"
                    :enable-glyph="isAgregarGlyph('Armor')"
                    :enable-trait="isAgregarTrait('Armor')"
                    :slot-prop="legsSlot"
                    style="padding: 5%"
                    @agregarSlotItem="handleAgregarSlotItem(legsSlot, 'Legs')"
                  ></itemSlot>
                </v-card>
              </v-item>
            </v-col>
            <v-col align="center" justify="center" md="4">
              <h4 style="text-align: center">Chest</h4>
              <v-item v-slot="{ toggle }">
                <v-card outlined width="90" height="90" @click="toggle">
                  <itemSlot
                    v-if="isAgregarItem('Chest')"
                    :id="'Chest'"
                    :enable-item="enableAgregarItemChest"
                    :enable-glyph="isAgregarGlyph('Armor')"
                    :enable-trait="isAgregarTrait('Armor')"
                    :slot-prop="chestSlot"
                    style="padding: 5%"
                    @agregarSlotItem="handleAgregarSlotItem(chestSlot, 'Chest')"
                  ></itemSlot>
                </v-card>
              </v-item>
              <h4 style="text-align: center">Waist</h4>
              <v-item v-slot="{ toggle }">
                <v-card outlined width="90" height="90" @click="toggle">
                  <itemSlot
                    v-if="isAgregarItem('Waist')"
                    :id="'Waist'"
                    :enable-item="enableAgregarItemWaist"
                    :enable-glyph="isAgregarGlyph('Armor')"
                    :enable-trait="isAgregarTrait('Armor')"
                    :slot-prop="waistSlot"
                    style="padding: 5%"
                    @agregarSlotItem="handleAgregarSlotItem(waistSlot, 'Waist')"
                  ></itemSlot>
                </v-card>
              </v-item>
            </v-col>
            <v-col align="center" justify="center" md="4">
              <h4 style="text-align: center">Hands</h4>
              <v-item v-slot="{ toggle }">
                <v-card outlined width="90" height="90" @click="toggle">
                  <itemSlot
                    v-if="isAgregarItem('Hands')"
                    :id="'Hands'"
                    :enable-item="enableAgregarItemHands"
                    :enable-glyph="isAgregarGlyph('Armor')"
                    :enable-trait="isAgregarTrait('Armor')"
                    :slot-prop="handsSlot"
                    style="padding: 5%"
                    @agregarSlotItem="handleAgregarSlotItem(handsSlot, 'Hands')"
                  ></itemSlot>
                </v-card>
              </v-item>
              <h4 style="text-align: center">Feet</h4>
              <v-item v-slot="{ toggle }">
                <v-card outlined width="90" height="90" @click="toggle">
                  <itemSlot
                    v-if="isAgregarItem('Feet')"
                    :id="'Feet'"
                    :enable-item="enableAgregarItemFeet"
                    :enable-glyph="isAgregarGlyph('Armor')"
                    :enable-trait="isAgregarTrait('Armor')"
                    :slot-prop="feetSlot"
                    style="padding: 5%"
                    @agregarSlotItem="handleAgregarSlotItem(feetSlot, 'Feet')"
                  ></itemSlot>
                </v-card>
              </v-item>
            </v-col>
          </v-row>
          <h2 style="text-align: center">Accessories</h2>
          <v-row align="center" justify="center">
            <v-col align="center" justify="center" md="4">
              <h4 style="text-align: center">Neck</h4>
              <v-item v-slot="{ toggle }">
                <v-card outlined width="90" height="90" @click="toggle">
                  <itemSlot
                    v-if="isAgregarItem('Neck')"
                    :id="'Neck'"
                    :enable-item="enableAgregarItemNeck"
                    :enable-glyph="isAgregarGlyph('Jewelry')"
                    :enable-trait="isAgregarTrait('Jewelry')"
                    :slot-prop="neckSlot"
                    style="padding: 5%"
                    @agregarSlotItem="handleAgregarSlotItem(neckSlot, 'Neck')"
                  ></itemSlot>
                </v-card>
              </v-item>
            </v-col>
            <v-col align="center" justify="center" md="4">
              <h4 style="text-align: center">Ring</h4>
              <v-item v-slot="{ toggle }">
                <v-card outlined width="90" height="90" @click="toggle">
                  <itemSlot
                    v-if="isAgregarItem('Ring 1')"
                    :id="'Ring 1'"
                    :enable-item="enableAgregarItemRing1"
                    :enable-glyph="isAgregarGlyph('Jewelry')"
                    :enable-trait="isAgregarTrait('Jewelry')"
                    :slot-prop="ring1Slot"
                    style="padding: 5%"
                    @agregarSlotItem="
                      handleAgregarSlotItem(ring1Slot, 'Ring 1')
                    "
                  ></itemSlot>
                </v-card>
              </v-item>
            </v-col>

            <v-col align="center" justify="center" md="4">
              <h4 style="text-align: center">Ring</h4>
              <v-item v-slot="{ toggle }">
                <v-card outlined width="90" height="90" @click="toggle">
                  <itemSlot
                    v-if="isAgregarItem('Ring')"
                    :id="'Ring'"
                    :enable-item="enableAgregarItemRing2"
                    :enable-glyph="isAgregarGlyph('Jewelry')"
                    :enable-trait="isAgregarTrait('Jewelry')"
                    :slot-prop="ring2Slot"
                    style="padding: 5%"
                    @agregarSlotItem="handleAgregarSlotItem(ring2Slot, 'Ring')"
                  ></itemSlot>
                </v-card>
              </v-item>
            </v-col>
          </v-row>
          <h2 style="text-align: center">Weapons</h2>
          <v-row align="center" justify="center">
            <v-col align="center" justify="center" md="4">
              <h4 style="text-align: center">One-Handed</h4>
              <v-item v-slot="{ toggle }">
                <v-card outlined width="90" height="90" @click="toggle">
                  <itemSlot
                    v-if="isAgregarItem('One-Handed')"
                    :id="'One-Handed'"
                    :enable-item="enableAgregarItemOneHanded"
                    :enable-glyph="isAgregarGlyph('Weapon')"
                    :enable-trait="isAgregarTrait('Weapon')"
                    :slot-prop="oneHSlot"
                    style="padding: 5%"
                    @agregarSlotItem="
                      handleAgregarSlotItem(oneHSlot, 'One-Handed')
                    "
                  >
                  </itemSlot>
                </v-card>
              </v-item>
            </v-col>
            <v-col align="center" justify="center" md="4">
              <h4 style="text-align: center">Two-Handed</h4>
              <v-item v-slot="{ toggle }">
                <v-card outlined width="90" height="90" @click="toggle">
                  <itemSlot
                    v-if="isAgregarItem('Two-Handed')"
                    :id="'Two-Handed'"
                    :enable-item="enableAgregarItemTwoHanded"
                    :enable-glyph="isAgregarGlyph('Weapon')"
                    :enable-trait="isAgregarTrait('Weapon')"
                    :slot-prop="twoHSlot"
                    style="padding: 5%"
                    @agregarSlotItem="
                      handleAgregarSlotItem(twoHSlot, 'Two-Handed')
                    "
                  >
                  </itemSlot>
                </v-card>
              </v-item>
            </v-col>
            <v-col align="center" justify="center" md="4">
              <h4 style="text-align: center">Off Hand</h4>
              <v-item v-slot="{ toggle }">
                <v-card outlined width="90" height="90" @click="toggle">
                  <itemSlot
                    v-if="isAgregarItem('Off Hand')"
                    :id="'Off Hand'"
                    :enable-item="enableAgregarItemOffHand"
                    :enable-glyph="isAgregarGlyph('Weapon')"
                    :enable-trait="isAgregarTrait('Weapon')"
                    :slot-prop="offHSlot"
                    style="padding: 5%"
                    @agregarSlotItem="
                      handleAgregarSlotItem(offHSlot, 'Off Hand')
                    "
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
    personaje: {
      type: Object,
      default: undefined,
    },
  },
  data() {
    return {
      selectedSlot: {},
      selectedItem: this.item,
      headSlot: {
        categoria: 'Head',
        item: undefined,
        glyph: undefined,
        trait: undefined,
        set: undefined,
      },
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
      neckSlot: {
        categoria: 'Neck',
        item: undefined,
        glyph: undefined,
        trait: undefined,
        set: undefined,
      },
      ring1Slot: {
        categoria: 'Ring 1',
        item: undefined,
        glyph: undefined,
        trait: undefined,
        set: undefined,
      },
      ring2Slot: {
        categoria: 'Ring 2',
        item: undefined,
        glyph: undefined,
        trait: undefined,
        set: undefined,
      },
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
      enableAgregarItemHead: true,
      enableAgregarItemShoulders: true,
      enableAgregarItemChest: true,
      enableAgregarItemHands: true,
      enableAgregarItemLegs: true,
      enableAgregarItemWaist: true,
      enableAgregarItemFeet: true,
      enableAgregarItemNeck: true,
      enableAgregarItemRing1: true,
      enableAgregarItemRing2: true,
      enableAgregarItemOneHanded: true,
      enableAgregarItemTwoHanded: true,
      enableAgregarItemOffHand: true,
    }
  },
  watch: {
    item() {
      this.selectedItem = this.item
    },
    selectedItem() {
      if (this.isAgregarItem('Head')) {
        this.enableAgregarItemHead = true
      }
      if (this.isAgregarItem('Shoulders')) {
        this.enableAgregarItemShoulders = true
      }
      if (this.isAgregarItem('Chest')) {
        this.enableAgregarItemChest = true
      }
      if (this.isAgregarItem('Hands')) {
        this.enableAgregarItemHands = true
      }
      if (this.isAgregarItem('Legs')) {
        this.enableAgregarItemLegs = true
      }
      if (this.isAgregarItem('Waist')) {
        this.enableAgregarItemWaist = true
      }
      if (this.isAgregarItem('Feet')) {
        this.enableAgregarItemFeet = true
      }
      if (this.isAgregarItem('Neck')) {
        this.enableAgregarItemNeck = true
      }
      if (this.isAgregarItem('Ring 1')) {
        this.enableAgregarItemRing1 = true
      }
      if (this.isAgregarItem('Ring 2')) {
        this.enableAgregarItemRing2 = true
      }
      if (this.isAgregarItem('One-Handed')) {
        this.enableAgregarItemOneHanded = true
      }
      if (this.isAgregarItem('Two-Handed')) {
        this.enableAgregarItemTwoHanded = true
      }
      if (this.isAgregarItem('Off Hand')) {
        this.enableAgregarItemOffHand = true
      }
    },
  },
  methods: {
    handleAgregarSlotItem(slotItem, id) {
      slotItem.item = this.allItems.find(
        (itemTemp) => itemTemp._id === this.selectedItem._id
      )
      switch (id) {
        case 'Head':
          this.enableAgregarItemHead = false
          break
        case 'Shoulders':
          this.enableAgregarItemShoulders = false
          break
        case 'Chest':
          this.enableAgregarItemChest = false
          break
        case 'Hands':
          this.enableAgregarItemHands = false
          break
        case 'Legs':
          this.enableAgregarItemLegs = false
          break
        case 'Waist':
          this.enableAgregarItemWaist = false
          break
        case 'Feet':
          this.enableAgregarItemFeet = false
          break
        case 'Neck':
          this.enableAgregarItemNeck = false
          break
        case 'Ring 1':
          this.enableAgregarItemRing1 = false
          break
        case 'Ring 2':
          this.enableAgregarItemRing2 = false
          break
        case 'One-Handed':
          this.enableAgregarItemOneHanded = false
          break
        case 'Two-Handed':
          this.enableAgregarItemTwoHanded = false
          break
        case 'Off Hand':
          this.enableAgregarItemOffHand = false
          break
        default:
          break
      }
    },
    isAgregarItem(val) {
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
