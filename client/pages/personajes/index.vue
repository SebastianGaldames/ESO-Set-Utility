<!-- Page Personajes -->
<template>
  <div></div>
</template>

<script>
export default {
  // components: { componente1... },
  async asyncData({ $axios }) {
    // arreglo de pruebas, antes de implementar la obtención de inventario
    const inventarioTest = []

    // arreglo de pruebas, antes de implementar la obtención de glyphs
    const glyphsTest = []

    // arreglo de pruebas, antes de implementar la obtención de traits
    const traitsTest = []

    const personajesResponse = await $axios.$get(
      process.env.VUE_APP_SERVER_URL + '/Personaje/list'
    )

    const itemsResponse = await $axios.$get(
      process.env.VUE_APP_SERVER_URL + '/Item/list'
    )

    const inventarioResponse = inventarioTest

    const familiasResponse = await $axios.$get(
      process.env.VUE_APP_SERVER_URL + '/Familia/list'
    )

    const glyphsResponse = glyphsTest

    const traitsResponse = traitsTest

    return {
      personajes: personajesResponse,
      items: itemsResponse,
      inventario: inventarioResponse,
      familias: familiasResponse,
      glyphs: glyphsResponse,
      traits: traitsResponse,
    }
  },
  data() {
    return {
      personajes: [],
      items: [],
      inventario: [],
      familias: [],
      glyphs: [],
      traits: [],
    }
  },
}
</script>
