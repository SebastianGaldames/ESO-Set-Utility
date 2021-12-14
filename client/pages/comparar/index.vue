<template>
  <div v-if="personajes.length > 0" class="d-flex mt-4">
    <v-card class="ml-2" width="30%">
      <!-- Aqui se debe seleccionar personaje -->

      <div style="margin: 2%">
        <v-combobox
          v-model="selectedPersonaje"
          item-text="nombre"
          :items="personajes"
          outlined
          solo
          dense
          color="acentuado1"
          class="pr-2"
          label="Seleccionar un personaje"
          @keydown="$event.target.blur()"
          @keypress="$event.target.blur()"
          @keyup="$event.target.blur()"
        ></v-combobox>
        <personaje-lite
          :personaje="selectedPersonaje"
          class="bordes"
        ></personaje-lite>
      </div>
    </v-card>
    <!-- Aqui deberia ir la comparacion de las estadisticas -->
    <v-card class="mx-2" width="40%" img="https://imgur.com/faXqoLO.png">
      <h2 class="dif">Diferencia de estadísticas</h2>
      <div
        v-for="stat in statsPersonajes"
        :key="stat[1]"
        class="stastCenter font"
      >
        <div v-if="stat[0] > stat[2]" class="stats">
          <div class="ancho">
            <span style="color: green">{{ stat[0] }}</span>
          </div>
          <span>{{ stat[1] }}</span>
          <div class="ancho2">
            <span style="color: red">{{ stat[2] }}</span>
          </div>
        </div>
        <div v-else-if="stat[0] < stat[2]" class="stats">
          <div class="ancho">
            <span style="color: red">{{ stat[0] }}</span>
          </div>
          <span>{{ stat[1] }}</span>
          <div class="ancho2">
            <span style="color: green">{{ stat[2] }}</span>
          </div>
        </div>
        <div v-else class="stats">
          <div class="ancho">
            <span>{{ stat[0] }}</span>
          </div>
          <span>{{ stat[1] }}</span>
          <div class="ancho2">
            <span>{{ stat[2] }}</span>
          </div>
        </div>
      </div>
    </v-card>
    <v-card class="mr-3" width="30%">
      <!-- Segunda seleccion -->
      <div style="margin: 2%">
        <v-combobox
          v-model="selectedPersonaje2"
          item-text="nombre"
          :items="personajes"
          outlined
          solo
          dense
          color="acentuado1"
          class="pr-2"
          label="Seleccionar un personaje"
          @keydown="$event.target.blur()"
          @keypress="$event.target.blur()"
          @keyup="$event.target.blur()"
        ></v-combobox>
        <personaje-lite
          :personaje="selectedPersonaje2"
          class="bordes"
        ></personaje-lite>
      </div>
    </v-card>
  </div>
</template>

<style>
.noPersonajes {
  margin-top: 10%;
  align-items: center;
  justify-content: center;
  display: flex;
}
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
  margin-bottom: 2%;
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
  width: 90%;
}
.ancho {
  width: 100px;
}
.ancho2 {
  width: 100px;
  align-items: flex-end;
  justify-content: flex-end;
  display: flex;
}
.nombre {
  margin-left: 5px;
  margin-right: 5px;
}
</style>
<script>
import PersonajeLite from '~/components/personajes/PersonajeLite.vue'
export default {
  components: { PersonajeLite },
  data() {
    return {
      personajes: [],
      selectedPersonaje: {},
      selectedPersonaje2: {},
      stats: [
        [0, 'Armor', 0],
        [0, 'Maximum Magicka', 0],
        [0, 'Magicka Recovery', 0],
        [0, 'Maximum Health', 0],
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
    statsPersonajes() {
      if (this.selectedPersonaje.nombre !== undefined) {
        const newStats = this.$calculateStats(this.selectedPersonaje.slots)
        const stats2 = []
        for (let i = 0; i < this.stats.length; i++) {
          stats2.push(this.stats[i])
        }
        for (let i = 0; i < this.stats.length; i++) {
          for (const key in newStats) {
            if (
              key ===
              this.stats[i][1].replace(/\s+/g, '').charAt(0).toLowerCase() +
                this.stats[i][1].replace(/\s+/g, '').slice(1)
            ) {
              stats2[i][0] = newStats[key]
            }
          }
        }
      }
      if (this.selectedPersonaje2.nombre !== undefined) {
        const newStats = this.$calculateStats(this.selectedPersonaje2.slots)
        const stats2 = []
        for (let i = 0; i < this.stats.length; i++) {
          stats2.push(this.stats[i])
        }
        for (let i = 0; i < this.stats.length; i++) {
          for (const key in newStats) {
            if (
              key ===
              this.stats[i][1].replace(/\s+/g, '').charAt(0).toLowerCase() +
                this.stats[i][1].replace(/\s+/g, '').slice(1)
            ) {
              stats2[i][2] = newStats[key]
            }
          }
        }
      }
      return this.stats
    },
  },
  beforeMount() {
    const storeUser = this.$store.state.usuario
    if (storeUser === null) {
      this.$router.push({ name: 'index' })
    } else {
      this.fetchUser(storeUser)
    }
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
      } else {
        this.$router.push('/')
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
