<template>
  <v-card>
    <v-col cols="12">
      <v-card-title primary-title> Agregar Personaje </v-card-title>
      <v-text-field
        v-model="characterName"
        label="Ingresa el nombre del personaje"
        :rules="rules"
        hide-details="auto"
      ></v-text-field>
      <v-textarea
        v-model="characterDescription"
        label="Descripción del personaje"
        auto-grow
        row="2"
        row-height="20"
      ></v-textarea>
    </v-col>
    <v-card-actions class="px-5 pb-4">
      <v-flex text-right>
        <v-btn rounded @click="dialog = false">Cancelar</v-btn>
        <v-btn rounded color="error" dark @click="addCharacter"
          >Agregar Personaje</v-btn
        >
      </v-flex>
    </v-card-actions>
  </v-card>
</template>
<script>
export default {
  data: () => ({
    rules: [
      (value) => !!value || 'Campo obligatorio',
      (value) => (value && value.length >= 2) || 'Min 3 caracteres',
    ],
    characterName: '',
    characterDescription: '',
  }),
  methods: {
    addCharacter() {
      this.$emit('newCharacterEvent', {
        characterName: '',
        characterDescription: '',
      })
    },
  },
}
</script>
