<template>
  <div>
    <v-dialog v-model="dialog" width="480" persistent>
      <CreacionPersonaje
        @newCharacterEvent="newCharacterEvent"
        @closeNewCharacterDialogEvent="closeNewCharacterDialogHandler"
      ></CreacionPersonaje>
    </v-dialog>
    <v-btn @click="dialog = true">llamar Dialogo</v-btn>
  </div>
</template>
<script>
import CreacionPersonaje from '~/components/personajes/CreacionPersonaje.vue'
export default {
  components: { CreacionPersonaje },
  data() {
    return {
      dialog: false,
      character: {},
    }
  },

  methods: {
    newCharacterEvent(content) {
      console.log(content.characterName)
      console.log(content.characterDescription)
      // this.character = content
    },
    closeNewCharacterDialogHandler() {
      this.dialog = false
    },
  },
}
</script>
