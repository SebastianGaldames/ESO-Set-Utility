<template>
  <div>
    <v-sheet
      height="96"
      class="d-flex flex-direction:column align-center py-4 px-2"
    >
      <v-img contain :src="item.imagen" height="32px" />
      <h4>{{ item.nombre }}</h4>
    </v-sheet>
  </div>
</template>
<script>
export default {
  props: {
    item: {
      type: Object,
      default: () => {},
      required: false,
    },
  },
  data() {
    return {
      //   item: {},
      favorite: false,
    }
  },
  methods: {
    // emits an event to update the parent component
    triggerUpdate(event) {
      this.$emit('input', this.value)
    },
  },
}
</script>
<style>
.itemsB {
  border-width: 2px;
  border-style: solid;
  border-radius: 4px;
  border-color: #a68f7b;
}
</style>
