<template>
  <v-card>
    <v-card-title primary-title> Crear Personaje </v-card-title>
    <v-card-text>
      <v-container grid-list-xs>
        <v-row>
          <v-col>
            <v-text-field
              v-model="newPersonaje.nombre"
              label="Nombre"
              clearable
            ></v-text-field>
          </v-col>
        </v-row>
      </v-container>
    </v-card-text>

    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn text @click="cerrarEvent()">Cancelar</v-btn>
      <v-btn text @click="postPersonaje()">Crear</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      newPersonaje: {
        nombre: '',
      },
      formHasErrors: false,
    }
  },
  computed: {
    form() {
      return {
        nombre: this.newPersonaje.nombre,
      }
    },
  },
  methods: {
    clearData() {
      this.newPersonaje.nombre = ''
    },
    cerrarEvent() {
      this.clearData()
      this.$emit('cerrarDialog')
    },
    postPersonaje() {
      //   const newPersonaje = {
      //     nombre: this.newPersonaje.nombre,
      //   }
      this.cerrarEvent()
    },
  },
}
</script>
