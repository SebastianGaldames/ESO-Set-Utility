<template>
  <div class="d-flex">
    <div style="width: 70%" class="pa-3">
      <seleccion-personaje v-model="selectedPersonaje" :personajes="personajes">
      </seleccion-personaje>
      <v-tabs color="acentuado1">
        <v-tab key="items"> items </v-tab>
        <v-tab-item key="items">
          <div>
            {{ selectedSet === undefined ? 'none' : selectedSet.nombre }} <br />
            {{ selectedItem === undefined ? 'none' : selectedItem.nombre }}
          </div>
          <personaje-inventario
            :familias="familias"
            :items="itemsSingleSet"
            @familyChanged="handleFamilyChanged"
            @itemChanged="handleItemChanged"
          ></personaje-inventario
        ></v-tab-item>
        <v-tab key="glifos"> glifos </v-tab>
        <v-tab-item key="glifos">
          <gliphs-comp :lista-glifos="glyphs"></gliphs-comp
        ></v-tab-item>
      </v-tabs>
    </div>
    <div style="width: 30%">
      <personaje :nombre="selectedPersonaje.nombre"></personaje>
    </div>
  </div>
</template>

<script>
import PersonajeInventario from '~/components/personajes/PersonajeInventario.vue'
import SeleccionPersonaje from '~/components/personajes/SeleccionPersonaje.vue'
import Personaje from '~/components/personajes/Personaje.vue'
import gliphsComp from '~/components/Glifos/gliphsComp.vue'
export default {
  components: {
    SeleccionPersonaje,
    PersonajeInventario,
    Personaje,
    gliphsComp,
  },
  async asyncData({ store, $axios }) {
    const itemsResponse = await $axios.$get(
      process.env.VUE_APP_SERVER_URL + '/Item/list'
    )
    const familiasResponse = await $axios.$get(
      process.env.VUE_APP_SERVER_URL + '/Familia/list'
    )

    const glifosResponse = await $axios.$get(
      process.env.VUE_APP_SERVER_URL + '/Glyph/list'
    )

    return {
      items: itemsResponse,
      familias: familiasResponse,
      glyphs: glifosResponse,
    }
  },
  data() {
    return {
      personajes: [],
      items: [],
      itemsCache: [],
      itemsInventario: [],
      familias: [],
      glyphs: [],
      traits: [],
      selectedPersonaje: {},
      selectedSet: undefined,
      selectedItem: {},
      currentUser: {},
    }
  },
  computed: {
    itemsSingleSet() {
      if (this.selectedSet === undefined) return []
      const filtered = []
      for (const itemId of this.selectedSet.itemsFamilia) {
        const found = this.items.find((item) => item._id === itemId)
        filtered.push(found)
      }
      return filtered
    },
  },
  watch: {
    //
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
    handleFamilyChanged(content) {
      // console.log(content.nombre)
      this.selectedSet = content
    },
    handleItemChanged(content) {
      // console.log(content.nombre)
      this.selectedItem = content
    },
  },
}
</script>
