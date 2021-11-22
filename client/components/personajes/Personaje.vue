<template>
  <div>
    {{ item === undefined ? 'none' : item.nombre }}
    {{ set === undefined ? 'none' : set.nombre }}

    <h1 style="text-align: center">{{ nombre }}</h1>
    <div class="d-flex flex-direction:column">
      <v-item-group v-model="selectedSlot">
        <v-container fluid>
          <h2 style="text-align: center">Equipamiento</h2>
          <v-row align="center" justify="center" no-gutters>
            <v-col align="center" justify="center" no-gutters>
              <h4 style="text-align: center">Cabeza</h4>
              <v-item v-slot="{ toggle }">
                <v-card outlined width="90" height="90" @click="toggle">
                </v-card>
              </v-item>
            </v-col>
          </v-row>
          <v-row align="center" justify="center" no-gutters>
            <v-col
              v-for="n in 6"
              :key="n"
              align="center"
              justify="center"
              md="4"
              no-gutters
            >
              <h4 style="text-align: center">{{ equipamiento[n] }}</h4>
              <v-item v-slot="{ toggle }">
                <v-card
                  class="d-flex align-center"
                  outlined
                  width="90"
                  height="90"
                  @click="toggle"
                >
                  <itemSlot
                    :id="equipamiento[n]"
                    :slot1="auxSlot"
                    style="padding: 5%; margin: auto"
                  ></itemSlot>
                </v-card>
              </v-item>
            </v-col>
          </v-row>
          <h2 style="text-align: center">Accesorios</h2>
          <v-row align="center" justify="center">
            <v-col
              v-for="n in 3"
              :key="n"
              align="center"
              justify="center"
              md="4"
            >
              <h4 style="text-align: center">{{ accesorios[n] }}</h4>
              <v-item v-slot="{ toggle }">
                <v-card outlined width="90" height="90" @click="toggle">
                  <itemSlot
                    :id="accesorios[n]"
                    :slot1="auxSlot"
                    style="padding: 5%; margin: auto"
                  ></itemSlot>
                </v-card>
              </v-item>
            </v-col>
          </v-row>
          <h2 style="text-align: center">Armas</h2>
          <v-row align="center" justify="center">
            <v-col
              v-for="n in 3"
              :key="n"
              align="center"
              justify="center"
              md="4"
            >
              <h4 style="text-align: center">{{ armas[n] }}</h4>
              <v-item v-slot="{ toggle }">
                <v-card outlined width="90" height="90" @click="toggle">
                  <itemSlot
                    :id="armas[n]"
                    :slot1="auxSlot"
                    style="padding: 5%"
                  ></itemSlot>
                </v-card>
              </v-item>
            </v-col>
          </v-row>
        </v-container>
      </v-item-group>
    </div>
  </div>
</template>

<style></style>

<script>
import itemSlot from '~/components/personajes/Slot.vue'

export default {
  components: {
    itemSlot,
  },
  props: {
    item: {
      type: Object,
      default: () => {},
    },
    set: {
      type: Object,
      default: () => {},
    },
    inventario: {
      type: Array,
      default: () => [],
    },
    value: {
      type: Object,
      default: () => {},
    },
    nombre: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      // Datos de prueba
      selectedSlot: {},
      auxSlot: {
        item: this.item,
        glyph: undefined,
        trait: undefined,
      },
      equipamiento: [
        '',
        'Hombros',
        'Peto',
        'Brazos',
        'Piernas',
        'Cintura',
        'Pies',
      ],
      accesorios: ['', 'Cuello', 'Anillo', 'Anillo'],
      armas: ['', 'Arma1', 'Arma2', 'Arma3'],
    }
  },
}
</script>
