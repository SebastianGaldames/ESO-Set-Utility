<template>
  <v-card color="primario">
    <div>
      <v-header class="secundario--text">Personajes</v-header>
      <v-dialog v-model="crearPjDialog" max-width="600px">
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            v-bind="attrs"
            color="acentuado1"
            class="texto1--text"
            v-on="on"
          >
            +
          </v-btn>
        </template>
        <div>
          <crear-personaje @cerrarDialog="cerrarPjDialog"></crear-personaje>
        </div>
      </v-dialog>
    </div>

    <div class="d-flex">
      <v-list color="primario">
        <v-list-item-group v-model="personajeSeleccionado">
          <personaje-card
            v-for="pj in personajes"
            :key="pj.id"
            :nombre="pj.nombre"
          >
          </personaje-card>
        </v-list-item-group>
      </v-list>
      <div>
        <equipamiento-personaje :equip="pjSeleccionadoEquip" />
      </div>
    </div>
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
        {
          nombre: 'Foo',
          stats: 'stronk',
          id: 0,
          equip: [
            { id: 123, nombre: 'casco1', categoria: 'casco' },
            { id: 234, nombre: 'hombros1', categoria: 'hombros' },
            { id: 345, nombre: 'pies1', categoria: 'pies' },
          ],
        },
        {
          nombre: 'Bar',
          stats: 'weak',
          id: 1,
          equip: [
            { id: 456, nombre: 'casco2', categoria: 'casco' },
            { id: 567, nombre: 'hombros2', categoria: 'hombros' },
            { id: 678, nombre: 'pies2', categoria: 'pies' },
          ],
        },
        {
          nombre: 'Fox',
          stats: 'aaaa',
          id: 2,
          equip: [],
        },
      ],
      crearPjDialog: false,
      personajeSeleccionado: null,
    }
  },
  computed: {
    pjSeleccionadoEquip() {
      if (Number.isInteger(this.personajeSeleccionado)) {
        return this.personajes[this.personajeSeleccionado].equip
      } else return []
    },
  },
  methods: {
    agregarPersonaje() {},
    cerrarPjDialog() {
      this.crearPjDialog = false
    },
  },
}
</script>
