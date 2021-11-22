<template>
  <div class="d-flex flex-direction:column">
    <v-combobox
      v-model="value"
      :items="personajes"
      item-text="nombre"
      outlined
      solo
      dense
      color="acentuado1"
      class="pr-2"
      @input="triggerUpdate"
    ></v-combobox>
    <v-btn> Agregar Personaje </v-btn>
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
    createPersonajeEmit() {
      //
    },
  },
}
</script>
