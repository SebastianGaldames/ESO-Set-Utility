<template>
  <div>
    <div class="d-flex" style="justify-content: center">
      <v-btn v-if="enableDelete" plain @click="deleteSlot">
        <h4 style="text-align: center; color: red">{{ slotProp.posicion }}</h4>
      </v-btn>
      <v-btn v-else plain disabled>
        <h4 style="text-align: center; color: white">
          {{ slotProp.posicion }}
        </h4>
      </v-btn>
    </div>
    <v-tooltip bottom color="acentuado2">
      <template v-slot:activator="{ on, attrs }">
        <v-card
          v-bind="attrs"
          height="34"
          min-width="100"
          max-width="100"
          outlined
          class="d-flex mx-1"
          v-on="on"
        >
          <div class="d-flex">
            <v-btn
              v-if="enableItem"
              x-small
              color="positive"
              :height="defaultItemHeight"
              @click="agregarSlotItem"
            >
              +
            </v-btn>

            <v-img
              v-else
              contain
              :height="defaultItemHeight"
              max-width="32"
              :src="itemImage"
            ></v-img>
          </div>
          <div class="d-flex">
            <v-btn
              v-if="enableTrait"
              color="positive"
              x-small
              :height="defaultGlyphTraitHeight"
              :width="defaultGlyphTraitWidth"
              @click="agregarSlotTrait"
            >
              +
            </v-btn>
            <v-img
              v-else
              contain
              :src="traitImage"
              :max-height="defaultGlyphTraitHeight"
              :max-width="defaultGlyphTraitWidth"
            ></v-img>
          </div>
          <div class="d-flex">
            <v-btn
              v-if="enableGlyph"
              color="positive"
              x-small
              :height="defaultGlyphTraitHeight"
              :width="defaultGlyphTraitWidth"
              @click="agregarSlotGlyph"
            >
              +
            </v-btn>
            <v-img
              v-else
              contain
              :src="glyphImage"
              :max-height="defaultGlyphTraitHeight"
              :max-width="defaultGlyphTraitWidth"
            ></v-img>
          </div>
        </v-card>
      </template>
      <div v-if="itemName !== ''">
        <span>{{ itemName }}</span
        ><br />
        <span>{{ familyName }}</span
        ><br />
        <span>{{ glyphName }}</span
        ><br />
        <span>{{ traitName }}</span>
      </div>
    </v-tooltip>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true,
    },
    slotProp: {
      type: Object,
      required: true,
    },
    enableItem: {
      type: Boolean,
      default: false,
    },
    enableGlyph: {
      type: Boolean,
      default: false,
    },
    enableTrait: {
      type: Boolean,
      default: false,
    },
    enableDelete: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      defaultItemHeight: '32',
      defaultItemWidth: '32',
      defaultGlyphTraitHeight: '32',
      defaultGlyphTraitWidth: '32',
      defaultButtonWidth: '20',
      defaultButtonHeight: '20',
      colorPos: 'white',
    }
  },
  computed: {
    itemImage() {
      if (!(this.slotProp.item === undefined)) {
        return this.slotProp.item.imagen
      }
      return ''
    },
    glyphImage() {
      if (!(this.slotProp.glyph === undefined)) {
        return this.slotProp.glyph.imagen
      }
      return ''
    },
    traitImage() {
      if (!(this.slotProp.trait === undefined)) {
        return this.slotProp.trait.imagen
      }
      return ''
    },
    itemName() {
      if (!(this.slotProp.item === undefined)) {
        return this.slotProp.item.nombre
      }
      return ''
    },
    familyName() {
      if (!(this.slotProp.familia === undefined)) {
        return this.slotProp.familia.nombre
      }
      return ''
    },
    glyphName() {
      if (!(this.slotProp.glyph === undefined)) {
        return this.slotProp.glyph.nombre
      }
      return ''
    },
    traitName() {
      if (!(this.slotProp.trait === undefined)) {
        return this.slotProp.trait.nombre
      }
      return ''
    },
  },
  methods: {
    agregarSlotItem() {
      this.$emit('agregarSlotItem', this.id)
    },
    agregarSlotTrait() {
      this.$emit('agregarSlotTrait', this.id)
    },
    agregarSlotGlyph() {
      this.$emit('agregarSlotGlyph', this.id)
    },
    deleteSlot() {
      this.$emit('deleteSlot', this.id)
    },
  },
}
</script>
<style>
/* p {
  font-size: 8px;
} */
</style>
