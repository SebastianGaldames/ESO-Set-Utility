<template>
  <div>
    <div>
      <v-img
        class="mx-1"
        :height="defaultItemHeight"
        :src="item.imagen"
        :width="defaultItemWidth"
        @click="test"
      ></v-img>
      <div class="d-flex py-2">
        <v-img
          :max-height="defaultGlyphTraitHeight"
          :src="trait.imagen"
          :max-width="defaultGlyphTraitWidth"
          @click="test"
        ></v-img>
        <v-img
          class="mx-2"
          :max-height="defaultGlyphTraitHeight"
          :src="glyph.imagen"
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
    casilla: {
      type: String,
      default: '',
    },
    item: {
      type: Object,
      required: true,
      default: null,
    },
    trait: {
      type: Object,
      required: true,
      default: null,
    },
    glyph: {
      type: Object,
      required: true,
      default: null,
    },
    arma: {
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
  methods: {
    test(event) {
      console.log('evento capturado')
    },
  },
}
</script>
