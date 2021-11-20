<template>
  <div>
    <h1 class="secundario--text" style="text-align: center">{{ nombre }}</h1>
    <v-item-group>
      <v-container class="equipamiento secundario--text">
        <p style="text-align: center">Equipamiento</p>
        <v-container>
          <v-row align="center" justify="center">
            <v-col align="center" justify="center">
              <p style="text-align: center">Cabeza</p>
              <v-card outlined width="125" height="125">
                <v-card-title
                  class="justify-center"
                  style="height: 25%; padding: 0"
                  ><p style="font-size: 15px; height: 25%">
                    Casco shoro
                  </p></v-card-title
                >
                <itemSlot
                  :item="item"
                  :trait="trait"
                  :glyph="glyph"
                  style="padding: 5%; margin: auto; width: 50%; height: 75%"
                ></itemSlot>
              </v-card>
            </v-col>
          </v-row>
          <v-row align="center" justify="center">
            <v-col v-for="n in 6" :key="n" md="4">
              <p style="text-align: center">{{ equipamiento[n] }}</p>
              <v-card outlined width="125" height="125">
                <v-card-title
                  class="justify-center"
                  style="height: 25%; padding: 0"
                  ><p style="font-size: 15px; height: 25%">
                    Casco shoro
                  </p></v-card-title
                >
                <itemSlot
                  :item="item"
                  :trait="trait"
                  :glyph="glyph"
                  style="padding: 5%; margin: auto; width: 50%; height: 75%"
                ></itemSlot>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-container>
      <v-container class="accesorios secundario--text">
        <p style="text-align: center">Accesorios</p>
        <v-container>
          <v-row align="center" justify="center">
            <v-col v-for="n in 3" :key="n" md="4">
              <p style="text-align: center">{{ accesorios[n] }}</p>
              <v-card outlined width="125" height="125">
                <v-card-title
                  class="justify-center"
                  style="height: 25%; padding: 0"
                  ><p style="font-size: 15px; height: 25%">
                    Casco shoro
                  </p></v-card-title
                ><itemSlot
                  :item="item"
                  :trait="trait"
                  :glyph="glyph"
                  style="padding: 5%; margin: auto; width: 50%; height: 75%"
                ></itemSlot
              ></v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-container>
      <v-container class="armas secundario--text">
        <p style="text-align: center">Armas</p>
        <v-container>
          <v-row align="center" justify="center">
            <v-col v-for="n in 2" :key="n" md="4">
              <p style="text-align: center">{{ armas[n] }}</p>
              <v-card outlined width="125" height="125">
                <v-card-title
                  class="justify-center"
                  style="height: 25%; padding: 0"
                  ><p style="font-size: 15px; height: 25%">
                    Casco shoro
                  </p></v-card-title
                ><itemSlot
                  :item="item"
                  :trait="trait"
                  :glyph="glyph"
                  style="padding: 5%; margin: auto; width: 50%; height: 75%"
                ></itemSlot
              ></v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-container>
    </v-item-group>
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
    /*
    equipamiento: {
      type: Array,
      default: () => [],
    },
    accesorios: {
      type: Array,
      default: () => [],
    },
    armas: {
      type: Array,
      default: () => [],
    } */
  },
  data() {
    return {
      // Datos de prueba
      item: {
        imagen: 'https://cdn.vuetifyjs.com/images/cards/cooking.png',
      },
      glyph: {
        imagen: 'https://cdn.vuetifyjs.com/images/cards/cooking.png',
      },
      trait: {
        imagen: 'https://cdn.vuetifyjs.com/images/cards/cooking.png',
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
      armas: ['', 'Arma1', 'Arma2'],
    }
  },
}
</script>
