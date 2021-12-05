<template>
  <div>
    <h4 style="text-align: center">
      {{ slotProp.posicion }}
    </h4>
    <v-tooltip bottom color="red">
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
              color="acentuado3"
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
            <!-- <p>{{ itemName }}</p> -->
          </div>
          <div class="d-flex">
            <v-btn
              v-if="enableTrait"
              color="acentuado3"
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
            <!-- <p>{{ slotProp.glyph }}</p> -->
          </div>
          <div class="d-flex">
            <v-btn
              v-if="enableGlyph"
              color="acentuado3"
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
            <!-- <p>{{ traitName }}</p> -->
          </div>
        </v-card>
      </template>
      <div>
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
  },
  data() {
    return {
      defaultItemHeight: '32',
      defaultItemWidth: '32',
      defaultGlyphTraitHeight: '32',
      defaultGlyphTraitWidth: '32',
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
      if (!(this.slotProp.glyphImage === undefined)) {
        return this.slotProp.glyphImage
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
    // test(event) {
    //   console.log('evento capturado')
    // },
    agregarSlotItem() {
      this.$emit('agregarSlotItem', this.id)
    },
    agregarSlotTrait() {
      this.$emit('agregarSlotTrait', this.id)
    },
    agregarSlotGlyph() {
      this.$emit('agregarSlotGlyph', this.id)
    },
  },
}
</script>
<style>
/* p {
  font-size: 8px;
} */
</style>
