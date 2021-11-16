<!-- Page Personajes -->
<template>
  <div>
    Page Personajes
    <seleccion-personaje v-model="selectedPersonaje" :personajes="personajes">
    </seleccion-personaje>
    {{ selectedPersonaje }}
    <personaje-inventario
      :familias="familias"
      :items="items"
    ></personaje-inventario>
  </div>
</template>

<script>
import PersonajeInventario from '~/components/personajes/PersonajeInventario.vue'
import SeleccionPersonaje from '~/components/personajes/SeleccionPersonaje.vue'
export default {
  components: { SeleccionPersonaje, PersonajeInventario },
  async asyncData({ store, $axios }) {
    const itemsResponse = await $axios.$get(
      process.env.VUE_APP_SERVER_URL + '/Item/list'
    )
    const familiasResponse = await $axios.$get(
      process.env.VUE_APP_SERVER_URL + '/Familia/list'
    )
    return { items: itemsResponse, familias: familiasResponse }
  },

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
      selectedPersonaje: {},
      currentUser: {},
    }
  },
  mounted() {
    this.makeDummyData()
    this.selectedPersonaje = this.personajes[0]
  },
  beforeMount() {
    const storeUser = this.$store.state.usuario
    console.log('store: ' + storeUser)
    console.log(this.currentUser)
    this.currentUser = this.fetchUser(storeUser)
  },
  methods: {
    makeDummyData() {
      const p1 = { nombre: 'juanin', email: 'asd@asd.com' }
      const p2 = { nombre: 'tulio', email: 'qwe@asd.com' }
      const p3 = { nombre: 'calcetin con rombosman', email: 'zxc@asd.com' }
      this.personajes.push(p1, p2, p3)
      // const item1 = { nombre: 'item1', tipo: 'two handed back scratcher' }
      // const item2 = { nombre: 'item2', tipo: 'light socks' }
      // const item3 = { nombre: 'item3', tipo: 'heavy eyelashes' }
      // const item4 = { nombre: 'item4', tipo: 'weed pipe' }
      // this.items.push(item1, item2, item3, item4)
    },
    async fetchUsers() {
      const user = await this.$axios.$get(
        process.env.VUE_APP_SERVER_URL + '/Usuario/list'
      )
      console.log(user)
      this.currentUser = user[0]
    },
    async fetchUser(userName) {
      const user = await this.$axios.$get(
        process.env.VUE_APP_SERVER_URL + '/Usuario/querynombre',
        { params: { usuario: userName } }
      )
      console.log(user)
    },
  },
}
</script>
