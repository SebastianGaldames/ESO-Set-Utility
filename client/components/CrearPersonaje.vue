<template>
  <v-card>
    <v-card-title primary-title> Crear Personaje </v-card-title>
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col>
              <v-text-field
                v-model="newPersonaje.nombre"
                label="Nombre"
                :counter="20"
                :rules="nombreRules"
                required
                clearable
              ></v-text-field>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn text @click="cerrarEvent()">Cancelar</v-btn>
        <v-btn text :disabled="!valid" @click="postPersonaje()">Crear</v-btn>
      </v-card-actions>
    </v-form>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      newPersonaje: {
        nombre: '',
      },
      valid: true,
      nombreRules: [
        (v) => !!v || 'Se requiere un nombre',
        (v) => (v && v.length <= 20) || 'Máximo de 20 caracteres',
      ],
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
      this.reset()
      this.$emit('cerrarDialog')
    },
    postPersonaje() {
      this.validate()
      if (this.valid) {
        this.cerrarEvent()
      }
    },
    validate() {
      this.valid = this.$refs.form.validate()
    },
    reset() {
      this.$refs.form.reset()
    },
    resetValidation() {
      this.$refs.form.resetValidation()
    },
  },
}
</script>
