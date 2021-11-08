<template>
  <v-card>
    <v-list>
      <v-subheader>Personajes</v-subheader>
      <v-btn @click="agregarPersonaje()">+</v-btn>
      <personaje-card v-for="pj in personajes" :key="pj.id" :nombre="pj.nombre">
      </personaje-card>
    </v-list>
  </v-card>
</template>

<script>
import PersonajeCard from '@/components/PersonajeCard.vue'

export default {
  components: {
    PersonajeCard,
  },
  data() {
    return {
      // array temporal de prueba
      personajes: [
        { nombre: 'Foo', stats: 'stronk', id: 0 },
        { nombre: 'Bar', stats: 'weak', id: 1 },
      ],
    }
  },
  methods: {
    agregarPersonaje() {},
  },
}
</script>
