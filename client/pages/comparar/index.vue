<template>
  <div style="height: 100%" class="primario">
    <div style="margin: 20px">
      <v-item-group>
        <v-row>
          <v-item dark style="overflow: hidden">
            <v-card dark width="30%">
              <seleccion-personaje
                v-model="selectedPersonaje"
                :personajes="personajes"
              >
              </seleccion-personaje>
              <personaje
                :nombre="selectedPersonaje.nombre"
                class="bordes"
              ></personaje>
            </v-card>
          </v-item>
          <v-item dark>
            <v-card class="secundario--text" width="40%">stats</v-card>
          </v-item>
          <v-item dark>
            <v-card dark width="30%">
              <seleccion-personaje
                v-model="selectedPersonajeRef"
                :personajes="personajes"
              >
              </seleccion-personaje>
              <personaje
                :nombre="selectedPersonajeRef.nombre"
                class="bordes"
              ></personaje>
            </v-card>
          </v-item>
        </v-row>
      </v-item-group>
    </div>
  </div>
</template>

<style>
.bordes {
  border-width: 2px;
  border-style: solid;
  border-color: #a68f7b;
}
</style>
<script>
import Personaje from '~/components/personajes/Personaje.vue'
import SeleccionPersonaje from '~/components/personajes/SeleccionPersonaje.vue'
export default {
  components: { SeleccionPersonaje, Personaje },
  data() {
    return {
      personajes: [],
      selectedPersonaje: {},
      selectedPersonajeRef: {},
    }
  },
  mounted() {
    this.makeDummyData()
    this.selectedPersonaje = this.personajes[0]
    this.selectedPersonajeRef = this.personajes[1]
  },
  methods: {
    makeDummyData() {
      const p1 = { nombre: 'juanin' }
      const p2 = { nombre: 'tulio' }
      const p3 = { nombre: 'calcetin con rombosman' }
      this.personajes.push(p1, p2, p3)
    },
  },
}
</script>
