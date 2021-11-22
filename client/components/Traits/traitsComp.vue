<template>
  <section>
    <div class="w-100 mx-auto">
      <h3>Lista de Rasgos</h3>
    </div>
    <div class="w-100 mx-auto">
      <v-responsive class="overflow-y-auto" max-height="400">
        <v-row class="galery">
          <v-col v-for="n in 27" :key="n" md="3">
            <v-card v-ripple outlined @click="selectTrait(n)">
              <h5 class="centro">Para</h5>
              <v-spacer />
              <hr class="linea" />

              <v-row>
                <v-col md="3">
                  <img
                    class="img"
                    src="https://elderscrollsonline.wiki.fextralife.com/file/Elder-Scrolls-Online/Amethyst.png"
                    alt=""
                  />
                </v-col>
                <v-col>
                  <h4 class="centro">Nombre Trair</h4>

                  <h5 class="centro">Nombre Gema</h5>
                </v-col>
              </v-row>

              <hr class="linea" />
              <v-spacer />
              <h5 class="centro">Efecto</h5>
            </v-card>
          </v-col>
        </v-row>
      </v-responsive>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    listaRasgos: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      selectedTrait: this.value,
      Rasgos: this.listaRasgos,
    }
  },
  methods: {
    // selecciona y envia el rasgo, para despues usarlo
    selectGlyph(glifo) {
      console.log(this.glifo)
      this.$emit('input', this.value)
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
  width: 100%;
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
.centrar {
  align-content: center;
}
</style>
