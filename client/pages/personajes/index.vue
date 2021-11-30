<template>
  <div class="d-flex">
    <!-- <v-btn @click="updateInventario">add inventario</v-btn> -->
    <div style="width: 70%" class="pa-3">
      <seleccion-personaje
        :selected="selectedPersonaje"
        :personajes="personajes"
        @createNewCharacterEvent="handleCreateCharacter"
        @personajeSelectionChanged="handlerSeleccionDePersonaje"
      >
      </seleccion-personaje>
      <v-tabs color="acentuado1">
        <v-tab key="items"> items </v-tab>
        <v-tab-item key="items">
          <div>
            <!-- {{ selectedSet === undefined ? 'none' : selectedSet.nombre }} <br />
            {{ selectedItem === undefined ? 'none' : selectedItem.nombre }}
            <br /> -->
            <!-- {{ currentUser.inventario }} -->
          </div>
          <v-divider></v-divider>
          <personaje-inventario
            :familias="familias"
            :items="itemsSingleSet"
            :inventario="currentUser.inventario"
            :all-items="items"
            @familyChanged="handleFamilyChanged"
            @itemChanged="handleItemChanged"
            @updateInventory="handleUpdateInventory"
          ></personaje-inventario
        ></v-tab-item>
        <v-tab key="glifos"> glifos </v-tab>
        <v-tab-item key="glifos">
          <gliphs-comp :lista-glifos="glyphs"></gliphs-comp
        ></v-tab-item>
        <v-tab key="traits"> traits </v-tab>
        <v-tab-item key="traits">
          <traits-comp :lista-rasgos="traits"></traits-comp
        ></v-tab-item>
      </v-tabs>
    </div>
    <div style="width: 30%">
      <personaje
        v-if="selectedPersonaje !== undefined"
        :personaje="selectedPersonaje"
        :item="selectedItem"
        :set="selectedSet"
        :all-items="items"
        :all-sets="familias"
      ></personaje>
    </div>
    <v-snackbar v-model="snackbar" timeout="3000" top>
      <span>¡Personaje agregado exitosamente!</span>
      <v-btn @click="snackbar = false">Cerrar</v-btn>
    </v-snackbar>
  </div>
</template>

<script>
import PersonajeInventario from '~/components/personajes/PersonajeInventario.vue'
import SeleccionPersonaje from '~/components/personajes/SeleccionPersonaje.vue'
import Personaje from '~/components/personajes/Personaje.vue'
import gliphsComp from '~/components/Glifos/gliphsComp.vue'
import traitsComp from '~/components/Traits/traitsComp.vue'
export default {
  components: {
    SeleccionPersonaje,
    PersonajeInventario,
    Personaje,
    gliphsComp,
    traitsComp,
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

    const traitsResponse = await $axios.$get(
      process.env.VUE_APP_SERVER_URL + '/Trait/list'
    )

    return {
      items: itemsResponse,
      familias: familiasResponse,
      glyphs: glifosResponse,
      traits: traitsResponse,
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
      snackbar: false,
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
    // makeDummyData() {
    //   const p1 = { nombre: 'juanin', email: 'asd@asd.com' }
    //   const p2 = { nombre: 'tulio', email: 'qwe@asd.com' }
    //   const p3 = { nombre: 'calcetin con rombosman', email: 'zxc@asd.com' }
    //   this.personajes.push(p1, p2, p3)
    // },
    async fetchUser(userName) {
      const user = await this.$axios.$get(
        process.env.VUE_APP_SERVER_URL + '/Usuario/querynombre',
        { params: { usuario: userName } }
      )
      await this.fetchPersonajes(user.personajes)
      this.selectedPersonaje = this.personajes[0]
      this.currentUser = user
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
    async updateInventario() {
      const response = await this.$axios.$put(
        process.env.VUE_APP_SERVER_URL + '/Usuario/actualizarInventario',
        {
          _id: this.currentUser._id,
          inventario: this.currentUser.inventario,
        }
      )
      console.log(response)
    },
    handleFamilyChanged(content) {
      // console.log(content.nombre)
      this.selectedSet = content
    },
    handleItemChanged(content) {
      // console.log(content.nombre)
      this.selectedItem = content
    },
    handleUpdateInventory(event) {
      const newItem = {
        item: this.selectedItem._id,
        set: this.selectedSet._id,
      }
      this.currentUser.inventario.push(newItem)
      this.updateInventario()
    },
    async handleCreateCharacter(event) {
      console.log(event)

      const newPj = {
        _id: this.currentUser._id,
        nombre: event.nombre,
        description: event.description,
      }

      // crear personaje
      await this.$axios.$post(
        process.env.VUE_APP_SERVER_URL + '/Usuario/addPersonaje',
        newPj
      )

      // actualizar current user characters
      const user = await this.$axios.$get(
        process.env.VUE_APP_SERVER_URL + '/Usuario/querynombre',
        { params: { usuario: this.currentUser.usuario } }
      )
      this.currentUser.personajes = user.personajes
      // call fetch personajes
      this.fetchPersonajes(this.currentUser.personajes)

      // console.log(user.usuario)
      this.snackbar = true
    },
    handlerSeleccionDePersonaje(content) {
      this.selectedPersonaje = content
    },
  },
}
</script>
