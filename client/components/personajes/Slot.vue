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
    slot: {
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
    let itemImage = ''
    let glyphImage = ''
    let traitImage = ''
    if (!(this.slot.item === null || this.slot.item === undefined)) {
      itemImage = this.slot.item.imagen
    }
    if (!(this.slot.glyph === null || this.slot.glyph === undefined)) {
      glyphImage = this.slot.glyph.imagen
    }
    if (!(this.slot.trait === null || this.slot.trait === undefined)) {
      traitImage = this.slot.trait.imagen
    }
    return {
      itemImage,
      glyphImage,
      traitImage,
      defaultItemHeight: '50',
      defaultItemWidth: '50',
      defaultGlyphTraitHeight: '25',
      defaultGlyphTraitWidth: '25',
    }
  },
  methods: {
    test(event) {
      console.log('evento capturado')
    },
  },
}
</script>
