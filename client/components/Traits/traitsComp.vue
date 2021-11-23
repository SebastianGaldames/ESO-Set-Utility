<template>
  <section>
    <div class="w-100 mx-auto">
      <h3>Lista de Rasgos</h3>
    </div>
    <div class="w-100 mx-auto scrollable">
      <v-row class="galery">
        <v-col v-for="n in Rasgos" :key="n" md="3">
          <v-card v-ripple outlined @click="selectTrait(n)">
            <h5 class="centro">{{ n.tipo }}</h5>
            <v-spacer />
            <hr class="linea" />

            <v-row>
              <v-col md="3">
                <img :src="n.imagen" class="img" alt="" />
              </v-col>
              <v-col>
                <h4 class="centro">{{ n.nombre }}</h4>

                <h5 class="centro">{{ n.gema }}</h5>
              </v-col>
            </v-row>

            <hr class="linea" />
            <v-spacer />
            <h5 v-for="e in n.efectos" :key="e" class="centro">{{ e }}</h5>
          </v-card>
        </v-col>
      </v-row>
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
    selectTrair(trait) {
      console.log(this.trait)
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
.scrollable {
  overflow-y: scroll;
  height: 60vh;
}
</style>
