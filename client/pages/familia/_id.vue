<template>
  <section color="primario">
    <div class="w-100 mx-auto"></div>
    <hr class="secundario" />
    <div class="w-100 primario">
      <v-row class="galery">
        <v-col class="mx-auto" color="primario" md="6" sm="8">
          <v-container class="nombreUbi">
            <div>
              <h1>Set: {{ miFamilia.nombre }}</h1>
            </div>
            <div class="ubicacion">
              <h3>Localización:</h3>
              <div
                v-for="ubicacion in miFamilia.ubicacion"
                :key="ubicacion"
                md="2"
              >
                <p class="secundario--text">• {{ ubicacion }}</p>
              </div>
            </div>
          </v-container>
        </v-col>
        <v-col class="mx-auto" md="6" sm="8" color="primario">
          <div>
            <v-row no-gutters>
              <v-col class="bordes">
                <v-card dark outlined tile>
                  <v-row class="galery">
                    <v-col md="4">
                      <h5 class="texto1--text">"obtención"</h5>
                    </v-col>

                    <v-col md="8">
                      <h5 class="der texto1--text">level "50" - CP "160"</h5>
                    </v-col>
                  </v-row>
                  <v-spacer />
                  <v-row>
                    <v-col>
                      <v-img
                        :src="this.miFamilia.imagen"
                        height="64px"
                        width="64px"
                        class="test"
                      />
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col md="3"></v-col>
                    <v-col md="6">
                      <h1 class="centro texto1--text">
                        {{ miFamilia.nombre }}
                      </h1>
                    </v-col>
                    <v-col md="3"></v-col>
                  </v-row>
                  <v-spacer />
                  <v-row>
                    <v-col md="3"></v-col>
                    <v-col md="6">
                      <hr class="secundario" />
                    </v-col>
                    <v-col md="3"></v-col>
                  </v-row>
                  <v-spacer />
                  <div class="bonos">
                    <div
                      v-for="bono in miFamilia.bonos"
                      :key="bono.texto"
                      class="bonos2"
                    >
                      <p>{{ bono.texto }}</p>
                    </div>
                  </div>
                </v-card>
              </v-col>
            </v-row>
          </div>
        </v-col>
      </v-row>
    </div>
    <v-spacer />
    <div v-if="estanItems" class="w-100 primario">
      <v-row class="galery">
        <v-col v-for="item in items" :key="item.nombre" md="2">
          <v-card
            v-ripple
            outlined
            class="justify-center"
          >
            <div class="imagen">
              <v-img
                :src="item.imagen"
                :alt="item.nombre"
                height="64px"
                width="64px"
              />
              <h5 class="centro texto1--text">{{ item.nombre }}</h5>
            </div>
        <v-col v-for="n in 20" :key="n" md="2" class="bordes">
          <v-card v-ripple class="primario">
          </v-card>
        </v-col>
      </v-row>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      miFamilia: Object,
      items: [],
      imagenFamilia: '',
      estanItems: false,
    }
  },
  created() {
    this.busq()
    this.setImagenF()
  },
  methods: {
    async busq() {
      const get = await this.$axios.$get(
        process.env.VUE_APP_SERVER_URL +
          '/Familia/query?_id=' +
          this.$route.params.id
      )
      this.miFamilia = get
      for (let i = 0; i < this.miFamilia.itemsFamilia.length; i++) {
        const item = await this.$axios.get(
          process.env.VUE_APP_SERVER_URL +
            '/Item/query?_id=' +
            this.miFamilia.itemsFamilia[i]
        )
        this.items[i] = item.data
      }
      this.estanItems = true
    },
    setImagenF() {
      this.imagenFamilia = this.miFamilia.imagen
    },
  },
}
</script>

<style>
.imagen {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
}
.bonos {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 2%;
}
.ubicacion {
  margin-top: 3%;
}
.bonos2 {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
  max-width: 70%;
}
.test {
  display: block;
  margin: 0 auto;
}
.item {
  max-width: 150px;
  max-height: 150px;
}
.w-100 {
  width: 100%;
}
.galery {
  width: 75%;
  margin: 0 auto;
}
.der {
  justify-content: right;
  text-align: right;
}
.izq {
  text-align: left;
}
.centro {
  text-align: center;
}
.bordes {
  border-width: 2px;
  border-style: groove;
  border-color: gold;
}
.nombreUbi {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
</style>
