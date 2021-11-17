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
  data() {
    return {
      personajes: [],
      items: [],
      itemsInventario: [],
      familias: [],
      glyphs: [],
      traits: [],
      selectedPersonaje: {},
      currentUser: {},
    }
  },
  mounted() {
    // this.makeDummyData()
    // this.selectedPersonaje = this.personajes[0]
  },
  beforeMount() {
    const storeUser = this.$store.state.usuario
    this.currentUser = this.fetchUser(storeUser)
  },
  methods: {
    makeDummyData() {
      const p1 = { nombre: 'juanin', email: 'asd@asd.com' }
      const p2 = { nombre: 'tulio', email: 'qwe@asd.com' }
      const p3 = { nombre: 'calcetin con rombosman', email: 'zxc@asd.com' }
      this.personajes.push(p1, p2, p3)
    },
    async fetchUsers() {
      const user = await this.$axios.$get(
        process.env.VUE_APP_SERVER_URL + '/Usuario/list'
      )
      this.currentUser = user[0]
    },
    async fetchUser(userName) {
      const user = await this.$axios.$get(
        process.env.VUE_APP_SERVER_URL + '/Usuario/querynombre',
        { params: { usuario: userName } }
      )
      await this.fetchPersonajes(user.personajes)
      this.selectedPersonaje = this.personajes[0]
    },
    async fetchPersonajes(idsArray) {
      for (const id of idsArray) {
        const pj = await this.$axios.$get(
          process.env.VUE_APP_SERVER_URL + '/Personaje/query',
          { params: { _id: id } }
        )
        this.personajes.push(pj)
      }
    },
  },
}
</script>
