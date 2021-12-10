<template>
  <div class="d-flex flex-direction:column">
    <v-combobox
      v-model="selected"
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
    <v-dialog v-model="confirmacion" width="600">
      <div v-if="selected !== undefined">
        <v-card class="justify-center" max-width="600">
          <v-card-title class="justify-center"
            >Está seguro que desea eliminar el personaje?</v-card-title
          >
          <div class="box">
            <v-card-text>Personaje: {{ selected.nombre }}</v-card-text>
          </div>
          <v-card-actions class="justify-center">
            <v-btn @click="eliminarSelectedPersonaje"> Eliminar </v-btn>
            <v-btn @click="confirmacion = false"> Cancelar </v-btn>
          </v-card-actions>
        </v-card>
      </div>
    </v-dialog>
    <v-btn @click="dialog = true"> Agregar Personaje </v-btn>
    <v-btn v-if="selected !== undefined" @click="eliminarPersonaje">
      Eliminar Personaje
    </v-btn>
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
    selected: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      dialog: false,
      confirmacion: false,
    }
  },
  methods: {
    // emits an event to update the parent component
    triggerUpdate(event) {
      this.$emit('personajeSelectionChanged', this.selected)
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
    eliminarPersonaje() {
      this.confirmacion = true
    },
    eliminarSelectedPersonaje() {
      this.$emit('eliminarSelectedPersonaje')
      this.confirmacion = false
    },
  },
}
</script>
<style>
.box {
  display: flex;
  align-items: center;
  justify-content: center;
}

.box div {
  width: 300px;
}
</style>
