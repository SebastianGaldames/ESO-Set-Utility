<template>
  <v-form ref="form" v-model="valid">
    <v-card outlined>
      <v-col cols="12">
        <v-snackbar v-model="snackbar" timeout="3000" top>
          <span>¡Personaje agregado exitosamente!</span>
          <v-btn @click="snackbar = false">Cerrar</v-btn>
        </v-snackbar>
        <v-card-title primary-title> Agregar Personaje </v-card-title>
        <v-text-field
          v-model="character.characterName"
          clearable
          color="acentuado1"
          label="Nombre del personaje"
          :rules="rules"
          hide-details="auto"
        ></v-text-field>
        <v-textarea
          v-model="character.characterDescription"
          clearable
          label="Descripción del personaje"
          auto-grow
          row="2"
          color="acentuado1"
          row-height="20"
        ></v-textarea>
      </v-col>
      <v-card-actions class="px-5 pb-4">
        <v-flex text-center>
          <v-btn
            color="acentuado2"
            class="mx-10"
            :disabled="!valid"
            @click="addCharacter"
            >Agregar Personaje</v-btn
          >
          <v-btn outlined blame @click="closeDialogEvent">Cancelar</v-btn>
        </v-flex>
      </v-card-actions>
    </v-card>
  </v-form>
</template>
<script>
export default {
  data: () => ({
    snackbar: false,
    valid: true,
    rules: [
      (value) => !!value || 'Campo obligatorio',
      (value) => (value && value.length >= 2) || 'Min 2 caracteres',
    ],
    character: { characterName: '', characterDescription: '' },
  }),
  methods: {
    addCharacter() {
      this.$refs.form.validate()
      this.$emit('newCharacterEvent', this.character)
      this.snackbar = true
      this.$refs.form.reset()
    },
    closeDialogEvent() {
      this.$emit('closeNewCharacterDialogEvent')
      this.$refs.form.reset()
    },
  },
}
</script>
