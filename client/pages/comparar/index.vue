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
          <!-- Aqui deberia ir la comparacion de las estadisticas -->
          <v-item>
            <v-card class="" width="40%">
              <div class="dif font">Diferencia de estadisticas</div>
              <div
                v-for="stat in stats"
                :key="stat[1]"
                class="stastCenter font"
              >
                <div v-if="stat[0] > stat[2]" class="stats">
                  <p style="color: green">{{ stat[0] }}</p>
                  <p>{{ stat[1] }}</p>
                  <p style="color: red">{{ stat[2] }}</p>
                </div>
                <div v-else-if="stat[0] < stat[2]" class="stats">
                  <p style="color: red">{{ stat[0] }}</p>
                  <p>{{ stat[1] }}</p>
                  <p style="color: green">{{ stat[2] }}</p>
                </div>
                <div v-else class="stats">
                  <p>{{ stat[0] }}</p>
                  <p>{{ stat[1] }}</p>
                  <p>{{ stat[2] }}</p>
                </div>
              </div>
            </v-card>
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
.font {
  font-size: 130%;
}
.dif {
  margin-top: 20px;
  margin-bottom: 10%;
  align-items: center;
  justify-content: center;
  display: flex;
}
.stastCenter {
  align-items: center;
  justify-content: center;
  display: flex;
}
.stats {
  display: flex;
  justify-content: space-between;
  width: 80%;
}
.nombre {
  margin-left: 5px;
  margin-right: 5px;
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
      statsSelectedPersonaje1: {
        MaximumMagicka: ['Maximum Magicka', '1'],
        MaximumMagicka2: ['Maximum Magickax', '5'],
      },
      statsSelectedPersonaje2: {
        MaximumMagicka: ['Maximum Magicka', '3'],
        MaximumMagicka2: ['Maximum Magickax', '2'],
      },
      stats: [
        [1, 'Maximum Magicka', 0],
        [2, 'Magicka Recovery', 0],
        [0, 'Maximum Health', 3],
        [0, 'Health Recovery', 0],
        [0, 'Maximum Stamina', 0],
        [0, 'Stamina Recovery', 0],
        [0, 'Spell Damage', 0],
        [0, 'Spell Critical', 0],
        [0, 'Spell Penetration', 0],
        [0, 'Weapon Damage', 0],
        [0, 'Weapon Critical', 0],
        [0, 'Physical Penetration', 0],
        [0, 'Spell Resistance', 0],
        [0, 'Physical Resistance', 0],
        [0, 'Critical Resistance', 0],
      ],
    }
  },
  computed: {
    stats1() {
      return this.statsSelectedPersonaje1
    },
    stats2() {
      return this.statsSelectedPersonaje2
    },
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
      if (this.personajes.length > 0) {
        this.selectedPersonaje = this.personajes[0]
        this.selectedPersonaje2 = this.personajes[0]
      }
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
