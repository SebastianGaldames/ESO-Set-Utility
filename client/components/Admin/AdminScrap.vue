<template>
  <v-card class="mx-auto" max-width="344" outlined>
    <v-list-item three-line>
      <v-list-item-content>
        <div class="text-overline mb-4">BIENVENIDO ADMINISTRADOR</div>
        <v-list-item-title class="text-h5 mb-1">
          Pulsa boton para scrap
        </v-list-item-title>
        <p id="p01"></p>
      </v-list-item-content>
    </v-list-item>
    <div v-if="power">
      <v-progress-linear color="amber" height="25"></v-progress-linear>
    </div>
    <div v-else>
      <v-progress-linear
        indeterminate
        color="amber"
        height="25"
      ></v-progress-linear>
    </div>
    <v-card-actions>
      <v-btn outlined rounded text class="center" @click="estasSeguro">
        Pulsa
      </v-btn>
      <v-dialog v-model="safe" persistent max-width="470">
        <v-card>
          <v-card-title class="text-h5">
            Estas seguro que deseas realizar este proceso?
          </v-card-title>
          <v-card-text
            >Este proceso puede durar bastaste tiempo en finalizar</v-card-text
          >
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="green darken-1" text @click="scrapPage">
              Si, estoy seguro
            </v-btn>
            <v-btn color="red darken-1" text @click="cancelar">
              Cancelar
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      power: true,
      safe: false,
    }
  },
  methods: {
    async scrapPage() {
      this.power = false
      const message = document.getElementById('p01')
      message.innerHTML = ''
      await this.$axios
        .post(process.env.VUE_APP_SERVER_URL + '/scrapper/scrap', {
          secret: 'HWFC8MEvqD',
        })
        .then((respuesta) => {
          this.power = true
          return respuesta
        })
        .catch((error) => {
          message.innerHTML = error
          this.power = true
          this.safe = false
        })
    },
    estasSeguro() {
      this.safe = true
    },
    cancelar() {
      this.safe = false
    },
  },
}
</script>
