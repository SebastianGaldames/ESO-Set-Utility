<template>
  <div style="height: 100%" class="primario">
    <div style="margin: 2%">
      <v-item-group>
        <v-row>
          <v-item>
            <v-card width="30%">
              <!-- Aqui se debe seleccionar personaje -->
              <div v-if="personajes.length > 0" style="margin: 2%">
                <v-combobox
                  v-model="selectedPersonaje"
                  item-text="nombre"
                  :items="personajes"
                  label="Seleccionar un personaje"
                ></v-combobox>
                <personaje
                  :personaje="selectedPersonaje"
                  class="bordes"
                ></personaje>
              </div>
            </v-card>
          </v-item>
          <!-- Aqui deberia ir el componente central -->
          <v-item>
            <v-card class="secundario--text" width="40%">stats</v-card>
          </v-item>
          <v-item>
            <v-card width="30%">
              <!-- Segunda seleccion -->
              <div v-if="personajes.length > 0" style="margin: 2%">
                <v-combobox
                  v-model="selectedPersonaje2"
                  item-text="nombre"
                  :items="personajes"
                  label="Seleccionar un personaje"
                ></v-combobox>
                <personaje
                  :personaje="selectedPersonaje2"
                  class="bordes"
                ></personaje>
              </div>
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
export default {
  components: { Personaje },
  data() {
    return {
      personajes: [],
      selectedPersonaje: [],
      selectedPersonaje2: [],
    }
  },
  mounted() {},
  beforeMount() {
    const storeUser = this.$store.state.usuario
    this.fetchUser(storeUser)
  },
  methods: {
    async fetchUser(userName) {
      const user = await this.$axios.$get(
        process.env.VUE_APP_SERVER_URL + '/Usuario/querynombre',
        { params: { usuario: userName } }
      )
      await this.fetchPersonajes(user.personajes)
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
