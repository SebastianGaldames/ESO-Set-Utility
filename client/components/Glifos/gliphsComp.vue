<template>
  <section>
    <div class="w-100 mx-auto">
      <h3>Lista de Glifos</h3>
      <v-row>
        <v-col cols="5">
          <v-select
            v-model="selectedCalidad"
            :items="optionsCalidad"
            label="Calidad"
          ></v-select>
        </v-col>
        <v-col cols="5">
          <v-select
            v-model="selectedPotencia"
            :items="optionsPotencia"
            label="Potencia"
          ></v-select>
        </v-col>
      </v-row>
    </div>
    <div class="w-100 mx-auto scrollable">
      <v-row class="galery">
        <v-col v-for="n in glifos" :key="n._id" md="3">
          <v-card v-ripple outlined @click="selectGlyph(n)">
            <v-row>
              <v-col>
                <h5 class="centro">{{ n.tipo }}</h5>
              </v-col>
            </v-row>
            <hr class="linea" />
            <v-spacer />
            <v-row>
              <v-col md="2">
                <img :src="n.imagen" class="img" alt="" />
              </v-col>
              <v-col>
                <h4 class="centro">{{ selectedCalidad }} {{ n.nombre }}</h4>
              </v-col>
            </v-row>

            <hr class="linea" />
            <v-spacer />
            <h5 class="centro">
              {{ n.efectoDescripcion }}
            </h5>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    listaGlifos: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      selectedGlyph: undefined,
      selectedPotencia: undefined,
      selectedCalidad: undefined,
      glifos: this.listaGlifos,

      optionsCalidad: [
        'Trifling',
        'Inferior',
        'Petty',
        'Slight',
        'Minor',
        'Lesser',
        'Moderate',
        'Average',
        'Strong',
        'Major',
        'Greater',
        'Grand',
        'Splendid',
        'Monumental',
        'Superb',
        'Truly Superb',
      ],
      optionsPotencia: ['normal', 'fine', 'superior', 'epic', 'legendary'],
    }
  },
  methods: {
    // selecciona y envia el glifo, para despues usarlo
    selectGlyph(glifo) {
      this.selectedGlyph = glifo
      // console.log(this.selectGlyph)
      // const potenciaTemp = this.selectGlyph.potencias[15]
      const eventData = {
        glyph: this.selectedGlyph,
        potencia: this.selectedPotencia,
        calidad: this.selectedCalidad,
      }

      if (
        this.selectedPotencia !== undefined &&
        this.selectedCalidad !== undefined &&
        this.selectedGlyph !== undefined
      ) {
        this.$emit('selectionGlyphChanged', eventData)
        console.log(eventData)
      }
    },
  },
}
</script>

<style>
.w-100 {
  width: 100%;
}
.galery {
  width: 100%;
  margin: 0 auto;
}
.linea {
  width: 75%;
  align-content: center;
}
.centro {
  text-align: center;
  padding: 5px 10px;
}
.info {
  text-align: center;
}
.img {
  display: block;
  margin: 0 auto;
  padding: 10px;
}
.scrollable {
  overflow-y: scroll;
  height: 60vh;
}
</style>
