<template>
  <div>
    <h1 style="text-align: center">
      {{ selectedPj === undefined ? 'Personaje' : selectedPj.nombre }}
    </h1>

    <div>
      <v-item-group>
        <v-container fluid>
          <h2 style="text-align: center">Armor</h2>
          <v-row align="center" justify="center" no-gutters>
            <v-col
              v-for="(slotEq, index) in inventario"
              :key="index"
              align="center"
              justify="center"
              no-gutters
              md="3"
            >
              <div v-if="slotEq.tipo === 'Armor'">
                <v-item>
                  <itemSlot
                    :id="slotEq.slotPJ.posicion"
                    :enable-delete="enableDelete"
                    :enable-item="slotEq.enableItem"
                    :enable-glyph="slotEq.enableGlyph"
                    :enable-trait="slotEq.enableTrait"
                    :slot-prop="slotEq.slotPJ"
                    @agregarSlotItem="handleAgregarSlotItem(index)"
                    @agregarSlotGlyph="handleAgregarSlotGlyph(index)"
                    @agregarSlotTrait="handleAgregarSlotTrait(index)"
                    @deleteSlot="handleEliminarSlot(index)"
                  ></itemSlot>
                </v-item>
              </div>
            </v-col>
          </v-row>
          <h2 style="text-align: center">Accessories</h2>
          <v-row align="center" justify="center" no-gutters>
            <v-col
              v-for="(slotEq, index) in inventario.slice(7)"
              :key="index"
              align="center"
              justify="center"
              no-gutters
              md="4"
            >
              <div v-if="slotEq.tipo === 'Jewelry'">
                <v-item>
                  <itemSlot
                    :id="slotEq.slotPJ.posicion"
                    :enable-delete="enableDelete"
                    :enable-item="slotEq.enableItem"
                    :enable-glyph="slotEq.enableGlyph"
                    :enable-trait="slotEq.enableTrait"
                    :slot-prop="slotEq.slotPJ"
                    @agregarSlotItem="handleAgregarSlotItem(index + 7)"
                    @agregarSlotGlyph="handleAgregarSlotGlyph(index + 7)"
                    @agregarSlotTrait="handleAgregarSlotTrait(index + 7)"
                    @deleteSlot="handleEliminarSlot(index + 7)"
                  ></itemSlot>
                </v-item>
              </div>
            </v-col>
          </v-row>
          <h2 style="text-align: center">Weapons</h2>
          <v-row align="center" justify="center" no-gutters>
            <v-col
              v-for="(slotEq, index) in inventario.slice(10)"
              :key="index"
              align="center"
              justify="center"
              no-gutters
              md="4"
            >
              <div v-if="slotEq.tipo === 'Weapon'">
                <v-item>
                  <itemSlot
                    :id="slotEq.slotPJ.posicion"
                    :enable-delete="enableDelete"
                    :enable-item="slotEq.enableItem"
                    :enable-glyph="slotEq.enableGlyph"
                    :enable-trait="slotEq.enableTrait"
                    :slot-prop="slotEq.slotPJ"
                    @agregarSlotItem="handleAgregarSlotItem(index + 10)"
                    @agregarSlotGlyph="handleAgregarSlotGlyph(index + 10)"
                    @agregarSlotTrait="handleAgregarSlotTrait(index + 10)"
                    @deleteSlot="handleEliminarSlot(index + 10)"
                  ></itemSlot>
                </v-item>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </v-item-group>
      <div class="d-flex align-center">
        <v-switch
          v-model="enableDelete"
          label="Limpiar Slots"
          :width="30"
          color="red darken-3"
          class="mr-6"
        >
        </v-switch>
        <span v-if="enableDelete"
          >Clickee el titulo del slot para limpiarlo</span
        >
      </div>

      <v-btn color="positive" @click="guardarInventario"> Save </v-btn>
      <span v-if="save"> Hay cambios sin guardar en este personaje </span>
      <!-- <span v-else> Personaje guardado </span> -->
      <!-- {{ selectedPj.slots }} -->
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
    glyphSlot: {
      type: Object,
      default: undefined,
    },
    traitSlot: {
      type: Object,
      default: undefined,
    },
  },
  data() {
    return {
      selectedGlyph: {},
      selectedTrait: {},
      selectedItem: {},
      selectedSet: {},
      selectedPj: {},
      inventario: [],
      enableDelete: false,
      save: false,
    }
  },
  watch: {
    personaje() {
      this.selectedPj = this.personaje
      this.inventario = []
      this.buildPJ()
    },
    selectedPj() {
      this.updatePj()
    },
    set() {
      this.selectedSet = this.set
    },
    item() {
      this.selectedItem = this.item
    },
    glyphSlot() {
      this.selectedGlyph = this.glyphSlot
    },
    traitSlot() {
      this.selectedTrait = this.traitSlot
    },
    selectedItem() {
      for (let index = 0; index < this.inventario.length; index++) {
        this.inventario[index].enableItem = false
        if (this.isItem(this.inventario[index].slotPJ.posicion, index)) {
          this.inventario[index].enableItem = true
        }
      }
    },
    selectedGlyph() {
      for (let index = 0; index < this.inventario.length; index++) {
        this.inventario[index].enableGlyph = false
        if (this.isGlyph(index)) {
          this.inventario[index].enableGlyph = true
        }
      }
    },
    selectedTrait() {
      for (let index = 0; index < this.inventario.length; index++) {
        this.inventario[index].enableTrait = false
        if (this.isTrait(index)) {
          this.inventario[index].enableTrait = true
        }
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
        'Off Hand',
        'Two-Handed',
      ]
      let tipoTemp = 'Armor'
      for (let index = 0; index < secciones.length; index++) {
        let temp = secciones[index]
        if (index === 7) {
          tipoTemp = 'Jewelry'
        }
        if (index === 8) {
          temp = 'Ring 1'
        }
        if (index === 9) {
          temp = 'Ring 2'
        }
        if (index === 10) {
          tipoTemp = 'Weapon'
          temp = 'Hand L'
        }
        if (index === 11) {
          temp = 'Hand R'
        }
        const seccion = {
          tipo: tipoTemp,
          enableItem: false,
          enableGlyph: false,
          enableTrait: false,
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
    },
    updatePj() {
      for (const invTemp of this.inventario) {
        const target = this.selectedPj.slots.find(
          (slotTemp) => slotTemp.tag === invTemp.slotPJ.tag
        )
        if (target !== undefined) {
          const aux = {
            item: target.item,
            familia: target.familia,
            nivel: target.nivel,
            calidad: target.calidad,
            posicion: target.posicion,
            tag: target.tag,
            glyph: target.glyph,
            potenciaGlyph: target.potenciaGlyph,
            calidadGlyph: target.calidadGlyph,
            trait: target.trait,
          }
          invTemp.enableItem = false
          invTemp.slotPJ = aux
        }
      }
    },
    handleAgregarSlotItem(index) {
      this.save = true
      const itemAux = this.allItems.find(
        (itemTemp) => itemTemp._id === this.selectedItem._id
      )
      const setAux = this.allSets.find(
        (setTemp) => setTemp._id === this.selectedSet._id
      )
      if (this.isTwoHanded()) {
        this.$emit('deleteSlot', this.inventario[10].slotPJ)
        this.inventario[10].slotPJ.item = undefined
        this.inventario[10].slotPJ.familia = undefined
        this.inventario[10].slotPJ.glyph = undefined
        this.inventario[10].slotPJ.potenciaGlyph = undefined
        this.inventario[10].slotPJ.calidadGlyph = undefined
        this.inventario[10].slotPJ.trait = undefined
        this.inventario[10].slotPJ.calidadTrait = undefined
        this.$emit('deleteSlot', this.inventario[11].slotPJ)
        this.inventario[11].slotPJ.item = undefined
        this.inventario[11].slotPJ.familia = undefined
        this.inventario[11].slotPJ.glyph = undefined
        this.inventario[11].slotPJ.potenciaGlyph = undefined
        this.inventario[11].slotPJ.calidadGlyph = undefined
        this.inventario[11].slotPJ.trait = undefined
        this.inventario[11].slotPJ.calidadTrait = undefined
      }
      if (this.isOneHanded()) {
        this.$emit('deleteSlot', this.inventario[12].slotPJ)
        this.inventario[12].slotPJ.item = undefined
        this.inventario[12].slotPJ.familia = undefined
        this.inventario[12].slotPJ.glyph = undefined
        this.inventario[12].slotPJ.potenciaGlyph = undefined
        this.inventario[12].slotPJ.calidadGlyph = undefined
        this.inventario[12].slotPJ.trait = undefined
        this.inventario[12].slotPJ.calidadTrait = undefined
      }
      this.inventario[index].slotPJ.item = itemAux
      this.inventario[index].slotPJ.familia = setAux
      this.inventario[index].enableItem = false
      this.inventario[index].slotPJ.glyph = undefined
      this.inventario[index].slotPJ.potenciaGlyph = undefined
      this.inventario[index].slotPJ.calidadGlyph = undefined
      this.inventario[index].slotPJ.trait = undefined
      this.inventario[index].slotPJ.calidadTrait = undefined
      this.$emit('slotChanged', this.inventario[index].slotPJ)
    },
    handleAgregarSlotGlyph(index) {
      this.save = true
      this.inventario[index].slotPJ.glyph = this.selectedGlyph.glyph
      this.inventario[index].slotPJ.potenciaGlyph =
        this.selectedGlyph.potenciaGlyph
      this.inventario[index].slotPJ.calidadGlyph =
        this.selectedGlyph.calidadGlyph
      this.inventario[index].enableGlyph = false
      // console.log(this.inventario[index].slotPJ)
      this.selectedGlyph = {}
      this.$emit('slotChanged', this.inventario[index].slotPJ)
    },
    handleEliminarSlot(index) {
      this.save = true
      this.$emit('deleteSlot', this.inventario[index].slotPJ)
      this.inventario[index].slotPJ.item = undefined
      this.inventario[index].slotPJ.familia = undefined
      this.inventario[index].enableItem = false
      this.inventario[index].slotPJ.glyph = undefined
      this.inventario[index].slotPJ.potenciaGlyph = undefined
      this.inventario[index].slotPJ.calidadGlyph = undefined
      this.inventario[index].slotPJ.trait = undefined
      this.inventario[index].slotPJ.calidadTrait = undefined
    },
    handleAgregarSlotTrait(index) {
      this.save = true
      this.inventario[index].slotPJ.trait = this.selectedTrait.trait
      this.inventario[index].slotPJ.calidadTrait =
        this.selectedTrait.calidadTrait
      this.inventario[index].enableTrait = false
      // console.log(this.inventario[index].slotPJ)
      this.selectedTrait = {}
      this.$emit('slotChanged', this.inventario[index].slotPJ)
    },
    guardarInventario() {
      this.save = false
      this.$emit('saveBuild')
    },
    isItem(categoriaPj, index) {
      if (index === 11 && this.isOneHanded()) {
        return !(
          this.selectedItem === undefined || this.selectedSet === undefined
        )
      }
      return (
        !(this.selectedItem === undefined || this.selectedSet === undefined) &&
        this.selectedItem.categoria === categoriaPj
      )
    },
    isGlyph(index) {
      return (
        this.selectedGlyph !== undefined &&
        this.selectedGlyph.tipoGlyph === this.inventario[index].tipo &&
        this.inventario[index].slotPJ.item !== undefined
      )
    },
    isTrait(index) {
      return (
        this.selectedTrait !== undefined &&
        this.selectedTrait.tipoTrait === this.inventario[index].tipo &&
        this.inventario[index].slotPJ.item !== undefined
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
        (this.selectedItem.categoria === 'One-Handed' ||
          this.selectedItem.categoria === 'Off Hand')
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
