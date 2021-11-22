<template>
  <div>
    <div>
      <v-img
        class="mx-1"
        :height="defaultItemHeight"
        :src="itemImage"
        :width="defaultItemWidth"
        @click="test"
      ></v-img>
      <div class="d-flex py-2">
        <v-img
          :max-height="defaultGlyphTraitHeight"
          :src="traitImage"
          :max-width="defaultGlyphTraitWidth"
          @click="test"
        ></v-img>
        <v-img
          class="mx-2"
          :max-height="defaultGlyphTraitHeight"
          :src="glyphImage"
          :max-width="defaultGlyphTraitWidth"
          @click="test"
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
    agregarItem: {
      type: Boolean,
      default: false,
    },
    agregarGlyph: {
      type: Boolean,
      default: false,
    },
    agregarTrait: {
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
    test(event) {
      console.log('evento capturado')
    },
  },
}
</script>
