<template>
  <div>
    {{ slot1.item }}
    {{ id }}
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
    slot1: {
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
    /* let itemImage = ''
    let glyphImage = ''
    let traitImage = ''
    console.log(this.slot1.item)
    if (!(this.slot1.item === null || this.slot1.item === undefined)) {
      itemImage = this.slot1.item.imagen
    }
    if (!(this.slot1.glyph === null || this.slot1.glyph === undefined)) {
      glyphImage = this.slot1.glyph.imagen
    }
    if (!(this.slot1.trait === null || this.slot1.trait === undefined)) {
      traitImage = this.slot1.trait.imagen
    } */
    return {
      itemImage: this.slot1.item.imagen,
      glyphImage: '',
      traitImage: '',
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
