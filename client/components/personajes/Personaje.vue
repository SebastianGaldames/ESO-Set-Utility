<template>
  <div>
    <h1 class="secundario--text" style="text-align: center">{{ nombre }}</h1>
    <v-item-group>
      <v-container class="equipamiento secundario--text">
        <p style="text-align: center">Equipamiento</p>
        <v-container>
          <v-row align="center" justify="center">
            <v-col v-for="n in 7" :key="n" md="3">
              <v-card outlined height="80px" width="62px"
                ><itemSlot :item="item" :trait="trait" :glyph="glyph"></itemSlot
              ></v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-container>
      <v-container class="accesorios secundario--text">
        <p style="text-align: center">Accesorios</p>
        <v-container>
          <v-row align="center" justify="center">
            <v-col v-for="n in 3" :key="n" md="3">
              <v-card outlined height="80px" width="62px"
                ><itemSlot :item="item" :trait="trait" :glyph="glyph"></itemSlot
              ></v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-container>
      <v-container class="armas secundario--text">
        <p style="text-align: center">Armas</p>
        <v-container>
          <v-row align="center" justify="center">
            <v-col v-for="n in 3" :key="n" md="3">
              <v-card outlined height="80px" width="62px" dark
                ><itemSlot :item="item" :trait="trait" :glyph="glyph"></itemSlot
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
    }
  },
}
</script>
