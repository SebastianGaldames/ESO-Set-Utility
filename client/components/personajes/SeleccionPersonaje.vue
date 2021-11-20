<template>
  <div>
    <v-combobox
      v-model="value"
      :items="personajes"
      item-text="nombre"
      outlined
      solo
      @input="triggerUpdate"
    ></v-combobox>
  </div>
</template>
<script>
export default {
  props: {
    personajes: {
      type: Array,
      default: () => [],
    },
    value: {
      type: Object,
      default: () => {},
      required: true,
    },
  },
  data() {
    return {
      selectedPersonaje: this.value,
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
