<template>
  <div></div>
</template>

<script>
export default {
  props: {
    casilla: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      default: '',
    },
    trait: {
      type: Object,
      default: null,
    },
    glyph: {
      type: Object,
      default: null,
    },
    arma: {
      type: Boolean,
      default: false,
    },
  },
}
</script>
