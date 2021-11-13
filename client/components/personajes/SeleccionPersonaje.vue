<template>
  <div>
    seleccion personaje component <br />
    {{ personajes }} <br />
    <v-combobox
      v-model="selectedPersonaje"
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
      selectedPersonaje: {},
    }
  },
  methods: {
    // emits an event to update the parent component
    triggerUpdate(event) {
      this.$emit('input', this.selectedPersonaje)
    },
  },
}
</script>
