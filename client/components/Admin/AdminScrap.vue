<template>
  <v-card class="mx-auto" max-width="344" outlined>
    <v-list-item three-line>
      <v-list-item-content>
        <div class="text-overline mb-4">BIENVENIDO ADMINISTRADOR</div>
        <v-list-item-title class="text-h5 mb-1">
          Pulsa boton para scrap
        </v-list-item-title>
      </v-list-item-content>
    </v-list-item>
    <v-progress-linear
      v-model="power"
      color="amber"
      height="25"
    ></v-progress-linear>
    <v-card-actions>
      <v-btn outlined rounded text class="center" @click="scrapPage">
        Pulsa
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      power: 0,
    }
  },
  methods: {
    scrapPage() {
      let i = 0
      for (this.power; i < 100; i++) {
        this.power += i
      }
    },
  },
}
</script>
