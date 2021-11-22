<template>
  <div>
    {{ item === undefined ? 'none' : item.nombre }}
    {{ selectedSlot === undefined ? 'none' : selectedSlot }}
    <h1 style="text-align: center">{{ nombre }}</h1>
    <div class="d-flex flex-direction:column">
      <v-item-group v-model="selectedSlot" mandatory>
        <v-container fluid>
          <h2 style="text-align: center">Equipment</h2>
          <v-row align="center" justify="center" no-gutters>
            <v-col align="center" justify="center" no-gutters>
              <h4 style="text-align: center">Head</h4>
              <v-item v-slot="{ toggle }">
                <v-card outlined width="90" height="90" @click="toggle">
                  <itemSlot
                    v-if="!(item === undefined) && item.categoria == 'Head'"
                    :id="'Head'"
                    :slot-prop="newSlot"
                    style="padding: 5%"
                  ></itemSlot>
                  <itemSlot
                    v-else
                    :id="'Head'"
                    :slot-prop="emptySlot"
                    style="padding: 5%"
                  ></itemSlot>
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
                    v-if="
                      !(item === undefined) &&
                      item.categoria === equipamiento[n]
                    "
                    :id="equipamiento[n]"
                    :slot-prop="newSlot"
                    style="padding: 5%"
                  ></itemSlot>
                  <itemSlot
                    v-else
                    :id="equipamiento[n]"
                    :slot-prop="emptySlot"
                    style="padding: 5%"
                  ></itemSlot>
                </v-card>
              </v-item>
            </v-col>
          </v-row>
          <h2 style="text-align: center">Accesories</h2>
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
                    v-if="
                      !(item === undefined) && item.categoria == accesorios[n]
                    "
                    :id="accesorios[n]"
                    :slot-prop="newSlot"
                    style="padding: 5%"
                  ></itemSlot>
                  <itemSlot
                    v-else
                    :id="accesorios[n]"
                    :slot-prop="emptySlot"
                    style="padding: 5%"
                  ></itemSlot>
                </v-card>
              </v-item>
            </v-col>
          </v-row>
          <h2 style="text-align: center">Weapons</h2>
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
                    v-if="!(item === undefined) && item.categoria == armas[n]"
                    :id="armas[n]"
                    :slot-prop="newSlot"
                    style="padding: 5%"
                  ></itemSlot>
                  <itemSlot
                    v-else
                    :id="armas[n]"
                    :slot-prop="emptySlot"
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
      required: true,
    },
    set: {
      type: Object,
      required: true,
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
      equipamiento: [
        '',
        'Shoulders',
        'Chest',
        'Hands',
        'Legs',
        'Waist',
        'Feet',
      ],
      accesorios: ['', 'Cuello', 'Anillo', 'Anillo'],
      armas: ['', 'Arma1', 'Arma2', 'Arma3'],
    }
  },
  computed: {
    newSlot() {
      if (!(this.item === undefined && this.set === undefined)) {
        const tempSlot = {
          item: this.item,
          glyph: undefined,
          trait: undefined,
          set: this.set,
        }
        return tempSlot
      }
      return ''
    },
    emptySlot() {
      if (this.item === undefined && this.set === undefined) {
        const empty = {
          item: undefined,
          glyph: undefined,
          trait: undefined,
          set: undefined,
        }
        return empty
      }
      return ''
    },
  },
}
</script>
