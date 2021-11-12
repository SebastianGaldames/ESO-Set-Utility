<template>
  <div>
    Page Personajes
    <seleccion-personaje
      v-model="selectedPersonaje"
      :personajes="personajes"
    ></seleccion-personaje>
    {{ selectedPersonaje }}
  </div>
</template>

<script>
import SeleccionPersonaje from '~/components/personajes/SeleccionPersonaje.vue'
export default {
  components: { SeleccionPersonaje },
  data() {
    return {
      personajes: [],
      items: [],
      itemsInventario: [],
      familias: [],
      glyphs: [],
      traits: [],
      selectedPersonaje: 'not selected',
    }
  },
  // components: { componente1... },
  //   async asyncData({ $axios }) {
  //     const personajesResponse = await $axios.$get(
  //       process.env.VUE_APP_SERVER_URL + '/Personaje/list'
  //     )
  //     return { personajes: personajesResponse }
  //   },
  mounted() {
    this.personajes.push('juanin', 'juan carlos', 'tulio')
  },
}
</script>
