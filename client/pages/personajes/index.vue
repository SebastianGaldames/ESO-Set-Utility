<template>
  <div>Page Personajes</div>
</template>

<script>
export default {
  // components: { componente1... },
  //   async asyncData({ $axios }) {
  //     const personajesResponse = await $axios.$get(
  //       process.env.VUE_APP_SERVER_URL + '/Personaje/list'
  //     )
  //     return { personajes: personajesResponse }
  //   },
  data() {
    return {
      personajes: [],
      items: [],
      itemsInventario: [],
      familias: [],
      glyphs: [],
      traits: [],
    }
  },
}
</script>
