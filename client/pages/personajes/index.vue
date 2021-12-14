<template>
  <div class="d-flex">
    <div style="width: 70%" class="pa-3">
      <seleccion-personaje
        :selected="selectedPersonaje"
        :personajes="personajes"
        @createNewCharacterEvent="handleCreateCharacter"
        @personajeSelectionChanged="handlerSeleccionDePersonaje"
        @eliminarSelectedPersonaje="handlerEliminarSelectedPersonaje"
      >
      </seleccion-personaje>
      <v-tabs color="acentuado1">
        <v-tab key="items"> items </v-tab>
        <v-tab-item key="items">
          <v-divider></v-divider>
          <personaje-inventario
            :familias="familias"
            :items="itemsSingleSet"
            :inventario="currentUser.inventario"
            :all-items="items"
            @familyChanged="handleFamilyChanged"
            @itemChanged="handleItemChanged"
            @updateInventory="handleUpdateInventory"
            @deletedItems="handleItemsDeleted"
          ></personaje-inventario
        ></v-tab-item>
        <v-tab key="glifos"> glifos </v-tab>
        <v-tab-item key="glifos">
          <gliphs-comp
            :lista-glifos="glyphs"
            @selectionGlyphChanged="handleGlyphChanged"
          ></gliphs-comp>
        </v-tab-item>
        <v-tab key="traits"> traits </v-tab>
        <v-tab-item key="traits">
          <traits-comp
            :lista-rasgos="traits"
            @selectionTraitChanged="handleTraitChanged"
          ></traits-comp
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
        :glyph-slot="selectedSetGlyphInfo"
        :trait-slot="selectedSetTraitInfo"
        @slotChanged="handleSlotChanged"
        @deleteSlot="handleDeleteSlot"
        @saveBuild="handleSaveBuild"
      ></personaje>
      <estadisticas-personaje
        v-if="selectedPersonaje !== undefined"
        :personaje-slots="selectedPersonaje.slots"
        :stats="stats"
      ></estadisticas-personaje>
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
import EstadisticasPersonaje from '~/components/personajes/EstadisticasPersonaje.vue'
import gliphsComp from '~/components/Glifos/gliphsComp.vue'
import traitsComp from '~/components/Traits/traitsComp.vue'
export default {
  components: {
    SeleccionPersonaje,
    PersonajeInventario,
    EstadisticasPersonaje,
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
      itemsInventario: [],
      familias: [],
      glyphs: [],
      traits: [],
      selectedPersonaje: {},
      selectedSet: undefined,
      selectedItem: {},
      selectedSetGlyphInfo: undefined,
      selectedSetTraitInfo: undefined,
      currentUser: {},
      snackbar: false,
      itemsBorrados: [],
      stats: {},
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

  beforeMount() {
    const storeUser = this.$store.state.usuario
    if (storeUser === null) {
      this.$router.push('/')
    } else {
      this.currentUser = this.fetchUser(storeUser)
    }
  },
  methods: {
    async fetchUser(userName) {
      const user = await this.$axios.$get(
        process.env.VUE_APP_SERVER_URL + '/Usuario/querynombre',
        { params: { usuario: userName } }
      )
      await this.fetchPersonajes(user.personajes)
      this.selectedPersonaje = this.personajes[0]
      if (this.selectedPersonaje !== undefined) {
        this.stats = this.$calculateStats(this.selectedPersonaje.slots)
      }

      this.currentUser = user
    },
    async fetchPersonajes(idsArray) {
      this.personajes = []
      for (const id of idsArray) {
        const pj = await this.$axios.$get(
          process.env.VUE_APP_SERVER_URL + '/Personaje/query',
          { params: { _id: id } }
        )
        this.personajes.push(pj)
      }
    },
    async updateInventario() {
      await this.$axios.$put(
        process.env.VUE_APP_SERVER_URL + '/Usuario/actualizarInventario',
        {
          _id: this.currentUser._id,
          inventario: this.currentUser.inventario,
        }
      )
    },
    // Items eliminados del inventario por el usuario
    handleItemsDeleted(content) {
      this.itemsBorrados = content

      // Si el usuario decide borrar todos los items
      if (this.itemsBorrados.length === this.currentUser.inventario.length) {
        this.currentUser.inventario = []
      } else {
        const nuevosItems = []
        const nuevosItemsAux = []
        const itemsABorrar = []
        for (let i = 0; i < this.itemsBorrados.length; i++) {
          itemsABorrar.push(this.currentUser.inventario[this.itemsBorrados[i]])
        }
        for (let j = 0; j < this.currentUser.inventario.length; j++) {
          nuevosItems.push(this.currentUser.inventario[j])
        }
        for (let j = 0; j < this.itemsBorrados.length; j++) {
          nuevosItems[this.itemsBorrados[j]] = 0
        }
        for (let j = 0; j < nuevosItems.length; j++) {
          if (nuevosItems[j] !== 0) {
            nuevosItemsAux.push(nuevosItems[j])
          }
        }
        this.currentUser.inventario = nuevosItemsAux
      }
      this.updateInventario()
    },
    handleFamilyChanged(content) {
      this.selectedSet = content
    },
    handleItemChanged(content) {
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
    handleDeleteSlot(content) {
      const auxSlots = this.selectedPersonaje.slots.filter(
        (value) => value.tag !== content.tag
      )
      this.selectedPersonaje.slots = auxSlots
      this.stats = this.$calculateStats(this.selectedPersonaje.slots)
    },
    handleSlotChanged(content) {
      let slot = this.selectedPersonaje.slots.find(
        (slot) => slot.tag === content.tag
      )
      if (slot !== undefined) {
        slot.item = content.item
        slot.familia = content.familia
        slot.nivel = content.nivel
        slot.calidad = content.calidad
        slot.posicion = content.posicion
        slot.glyph = content.glyph
        slot.potenciaGlyph = content.potenciaGlyph
        slot.calidadGlyph = content.calidadGlyph
        slot.trait = content.trait
      } else {
        slot = {
          item: content.item,
          familia: content.familia,
          nivel: content.nivel,
          calidad: content.calidad,
          posicion: content.posicion,
          tag: content.tag,
          glyph: content.glyph,
          potenciaGlyph: content.potenciaGlyph,
          calidadGlyph: content.calidadGlyph,
          trait: content.trait,
        }
        this.selectedPersonaje.slots.push(slot)
      }
      // recalc stats
      this.stats = this.$calculateStats(this.selectedPersonaje.slots)
    },
    async handleSaveBuild() {
      const auxSlots = []
      for (const item of this.selectedPersonaje.slots) {
        const aux = {
          item: item.item,
          familia: item.familia,
          nivel: item.nivel,
          calidad: item.calidad,
          posicion: item.posicion,
          tag: item.tag,
          glyph: item.glyph !== undefined ? item.glyph._id : undefined,
          potenciaGlyph: item.potenciaGlyph,
          calidadGlyph: item.calidadGlyph,
          trait: item.trait,
        }
        auxSlots.push(aux)
      }
      // handles the endpoint call for saving the equipment of a character
      // TODO build a propper slot according to schema
      const slots = {
        _id: this.selectedPersonaje._id,
        slots: auxSlots,
      }
      await this.$axios.$put(
        process.env.VUE_APP_SERVER_URL + '/Personaje/update',
        slots
      )
    },
    async handleCreateCharacter(event) {
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

      this.snackbar = true
    },
    handleGlyphChanged(content) {
      this.selectedSetGlyphInfo = {
        imagen: content.glyph.imagen,
        glyph: content.glyph,
        calidadGlyph: content.calidad,
        potenciaGlyph: content.potencia,
        tipoGlyph: content.glyph.tipo,
      }
    },
    handleTraitChanged(content) {
      this.selectedSetTraitInfo = {
        imagen: content.trait.imagen,
        trait: content.trait,
        calidadTrait: content.calidad,
        tipoTrait: content.trait.tipo,
      }
    },
    handlerSeleccionDePersonaje(content) {
      this.selectedPersonaje = content
      this.stats = this.$calculateStats(this.selectedPersonaje.slots)
    },
    async handlerEliminarSelectedPersonaje(event) {
      await this.$axios.$put(
        process.env.VUE_APP_SERVER_URL + '/Usuario/removePersonaje',
        {
          usuario: this.currentUser._id,
          deletedPersonaje: this.selectedPersonaje._id,
        }
      )

      const user = await this.$axios.$get(
        process.env.VUE_APP_SERVER_URL + '/Usuario/querynombre',
        { params: { usuario: this.currentUser.usuario } }
      )
      this.currentUser.personajes = user.personajes
      // call fetch personajes
      await this.fetchPersonajes(this.currentUser.personajes)
      this.selectedPersonaje = this.personajes[0]
    },
  },
}
</script>
