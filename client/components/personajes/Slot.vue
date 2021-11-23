<template>
  <div>
    <div>
      <v-btn
        v-if="enableItem"
        color="acentuado3"
        class="texto1--text"
        :height="defaultItemHeight"
        :width="defaultItemWidth"
        @click="agregarSlotItem"
      >
        +
      </v-btn>
      <v-img
        v-else
        class="mx-1"
        contain
        :height="defaultItemHeight"
        :src="itemImage"
        :width="defaultItemWidth"
      ></v-img>
      <div class="d-flex py-2">
        <v-btn
          v-if="enableTrait"
          color="acentuado3"
          class="texto1--text"
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
        <v-btn
          v-if="enableGlyph"
          color="acentuado3"
          class="mx-2 texto1--text"
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
          class="mx-2"
          :src="glyphImage"
          :max-height="defaultGlyphTraitHeight"
          :max-width="defaultGlyphTraitWidth"
        ></v-img>
      </div>
    </div>
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
      defaultItemHeight: '50',
      defaultItemWidth: '50',
      defaultGlyphTraitHeight: '25',
      defaultGlyphTraitWidth: '25',
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
        return this.slotProp.item.imagen
      }
      return ''
    },
    traitImage() {
      if (!(this.slotProp.trait === undefined)) {
        return this.slotProp.item.imagen
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
