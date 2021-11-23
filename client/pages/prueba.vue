<template>
  <div>
    <v-dialog v-model="dialog" width="30%" persistent>
      <CreacionPersonaje @addCharacter="newCharacterEvent"></CreacionPersonaje>
    </v-dialog>
    <div>{{ characterDescription }} // {{ characterName }}</div>
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
    }
  },
}
</script>
