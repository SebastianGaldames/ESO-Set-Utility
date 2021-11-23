<template>
  <v-card>
    <v-col cols="12">
      <v-card-title primary-title> Agregar Personaje </v-card-title>
      <v-text-field
        v-model="character.characterName"
        label="Nombre del personaje"
        :rules="rules"
        hide-details="auto"
      ></v-text-field>
      <v-textarea
        v-model="character.characterDescription"
        label="Descripción del personaje"
        auto-grow
        row="2"
        row-height="20"
      ></v-textarea>
    </v-col>
    <v-card-actions class="px-5 pb-4">
      <v-flex text-center>
        <v-btn color="acentuado2" class="mx-10" @click="addCharacter"
          >Agregar Personaje</v-btn
        >
        <v-btn outlined blame @click="closeDialogEvent">Cancelar</v-btn>
      </v-flex>
    </v-card-actions>
  </v-card>
</template>
<script>
export default {
  data: () => ({
    rules: [
      (value) => !!value || 'Campo obligatorio',
      (value) => (value && value.length >= 2) || 'Min 2 caracteres',
    ],
    character: { characterName: '', characterDescription: '' },
  }),
  methods: {
    addCharacter() {
      this.$emit('newCharacterEvent', this.character)
    },
    closeDialogEvent() {
      this.character.characterName = ''
      this.character.characterDescription = ''
      this.$emit('closeNewCharacterDialogEvent')
    },
  },
}
</script>
