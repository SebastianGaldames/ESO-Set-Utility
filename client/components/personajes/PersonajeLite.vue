<template>
  <div>
    <h1 style="text-align: center">
      {{ selectedPj === undefined ? 'Personaje' : selectedPj.nombre }}
    </h1>
    <div>
      <v-item-group>
        <v-container fluid>
          <h2 style="text-align: center">Armor</h2>
          <v-row align="center" justify="center" no-gutters>
            <v-col
              v-for="(slotEq, index) in inventario"
              :key="index"
              align="center"
              justify="center"
              no-gutters
              md="3"
            >
              <div v-if="slotEq.tipo === 'Armor'">
                <v-item>
                  <itemSlot
                    :id="slotEq.slotPJ.posicion"
                    :slot-prop="slotEq.slotPJ"
                  ></itemSlot>
                </v-item>
              </div>
            </v-col>
          </v-row>
          <h2 style="text-align: center">Accessories</h2>
          <v-row align="center" justify="center" no-gutters>
            <v-col
              v-for="(slotEq, index) in inventario.slice(7)"
              :key="index"
              align="center"
              justify="center"
              no-gutters
              md="4"
            >
              <div v-if="slotEq.tipo === 'Jewelry'">
                <v-item>
                  <itemSlot
                    :id="slotEq.slotPJ.posicion"
                    :slot-prop="slotEq.slotPJ"
                  ></itemSlot>
                </v-item>
              </div>
            </v-col>
          </v-row>
          <h2 style="text-align: center">Weapons</h2>
          <v-row align="center" justify="center" no-gutters>
            <v-col
              v-for="(slotEq, index) in inventario.slice(10)"
              :key="index"
              align="center"
              justify="center"
              no-gutters
              md="4"
            >
              <div v-if="slotEq.tipo === 'Weapon'">
                <v-item>
                  <itemSlot
                    :id="slotEq.slotPJ.posicion"
                    :slot-prop="slotEq.slotPJ"
                  ></itemSlot>
                </v-item>
              </div>
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
    personaje: {
      type: Object,
      default: undefined,
    },
  },
  data() {
    return {
      selectedPj: {},
      inventario: [],
      enableDelete: false,
    }
  },
  watch: {
    personaje() {
      this.selectedPj = this.personaje
      this.inventario = []
      this.buildPJ()
    },
    selectedPj() {
      this.updatePj()
    },
  },
  beforeMount() {
    this.buildPJ()
  },
  methods: {
    buildPJ() {
      const secciones = [
        'Head',
        'Shoulders',
        'Chest',
        'Hands',
        'Waist',
        'Legs',
        'Feet',
        'Necklace',
        'Ring',
        'Ring',
        'One-Handed',
        'Off Hand',
        'Two-Handed',
      ]
      let tipoTemp = 'Armor'
      for (let index = 0; index < secciones.length; index++) {
        let temp = secciones[index]
        if (index === 7) {
          tipoTemp = 'Jewelry'
        }
        if (index === 8) {
          temp = 'Ring 1'
        }
        if (index === 9) {
          temp = 'Ring 2'
        }
        if (index === 10) {
          tipoTemp = 'Weapon'
          temp = 'Hand L'
        }
        if (index === 11) {
          temp = 'Hand R'
        }
        const seccion = {
          tipo: tipoTemp,
          enableItem: false,
          enableGlyph: false,
          enableTrait: false,
          slotPJ: {
            item: undefined,
            familia: undefined,
            nivel: 50,
            calidad: 'dorada',
            posicion: secciones[index],
            tag: temp,
            glyph: undefined,
            potenciaGlyph: undefined,
            calidadGlyph: undefined,
            trait: undefined,
          },
        }
        this.inventario.push(seccion)
      }
    },
    updatePj() {
      for (const invTemp of this.inventario) {
        const target = this.selectedPj.slots.find(
          (slotTemp) => slotTemp.tag === invTemp.slotPJ.tag
        )
        if (target !== undefined) {
          const aux = {
            item: target.item,
            familia: target.familia,
            nivel: target.nivel,
            calidad: target.calidad,
            posicion: target.posicion,
            tag: target.tag,
            glyph: target.glyph,
            potenciaGlyph: target.potenciaGlyph,
            calidadGlyph: target.calidadGlyph,
            trait: target.trait,
          }
          invTemp.enableItem = false
          invTemp.slotPJ = aux
        }
      }
    },
  },
}
</script>
