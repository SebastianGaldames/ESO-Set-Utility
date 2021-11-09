<template>
  <v-card>
    <v-list>
      <v-subheader>Personajes</v-subheader>

      <v-dialog v-model="CrearPjDialog" max-width="600px">
        <template v-slot:activator="{ on, attrs }">
          <v-btn v-bind="attrs" v-on="on"> + </v-btn>
        </template>
        <div>
          <crear-personaje @cerrarDialog="cerrarPjDialog"></crear-personaje>
        </div>
      </v-dialog>
      <personaje-card v-for="pj in personajes" :key="pj.id" :nombre="pj.nombre">
      </personaje-card>
    </v-list>
  </v-card>
</template>

<script>
import PersonajeCard from '@/components/PersonajeCard.vue'
import CrearPersonaje from '@/components/CrearPersonaje.vue'

export default {
  components: {
    PersonajeCard,
    CrearPersonaje,
  },
  data() {
    return {
      // array temporal de prueba
      personajes: [
        { nombre: 'Foo', stats: 'stronk', id: 0 },
        { nombre: 'Bar', stats: 'weak', id: 1 },
      ],
      CrearPjDialog: false,
    }
  },
  methods: {
    agregarPersonaje() {},
    cerrarPjDialog() {
      this.CrearPjDialog = false
    },
  },
}
</script>
