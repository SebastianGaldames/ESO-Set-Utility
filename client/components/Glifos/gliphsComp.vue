<template>
  <section>
    <div class="w-100 mx-auto">
      <h3>Lista de Glifos</h3>
    </div>
    <div class="w-100 mx-auto">
      <v-responsive class="overflow-y-auto" max-height="200">
        <v-row class="galery">
          <v-col v-for="n in glifos" :key="n" md="3">
            <v-card v-ripple outlined @click="selectGlyph(n)">
              <img
                class="img"
                src="https://elderscrollsonline.wiki.fextralife.com/file/Elder-Scrolls-Online/glyph_of_health-eso-wiki-guide.png"
                alt=""
              />
              <h5 class="centro">{{ n.Para }}</h5>
              <v-spacer />
              <hr class="linea" />
              <h4 class="centro">{{ n.Nombre }}</h4>
              <hr class="linea" />
              <v-spacer />
              <h5 class="centro">{{ n.Efecto }}</h5>
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
    listaGlifos: {
      type: Array,
      default: () => [],
    },
    value: {
      type: Object,
      default: () => {},
      required: true,
    },
  },
  data() {
    return {
      selectedGlyph: this.value,
      glifos: this.listaGlifos,
    }
  },
  methods: {
    // selecciona y envia el glifo, para despues usarlo
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
  padding: 5px;
}
</style>
