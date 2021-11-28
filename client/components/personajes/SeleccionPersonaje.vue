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
    <v-dialog v-model="dialog" width="480">
      <CreacionPersonaje
        @closeNewCharacterDialogEvent="closeNewCharacterDialogHandler"
        @newCharacterEvent="createPersonajeEmit"
      ></CreacionPersonaje>
    </v-dialog>
    <v-btn @click="dialog = true"> Agregar Personaje </v-btn>
  </div>
</template>
<script>
import CreacionPersonaje from '~/components/personajes/CreacionPersonaje.vue'
export default {
  components: { CreacionPersonaje },
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
      dialog: false,
    }
  },
  methods: {
    // emits an event to update the parent component
    triggerUpdate(event) {
      this.$emit('input', this.value)
    },
    createPersonajeEmit(content) {
      this.dialog = false
      this.$emit('createNewCharacterEvent', {
        nombre: content.characterName,
        descripcion: content.characterDescription,
      })
    },
    closeNewCharacterDialogHandler() {
      this.dialog = false
    },
  },
}
</script>
