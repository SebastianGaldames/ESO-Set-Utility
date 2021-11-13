<template>
  <div>
    <h1 class="secundario--text" style="text-align: center">{{ nombre }}</h1>
    <v-item-group>
      <v-container class="equipamiento secundario--text">
        <p style="text-align: center">Equipamiento</p>
        <v-container>
          <v-row align="center" justify="center">
            <v-col v-for="n in 7" :key="n" md="3">
              <v-card outlined>slot{{ n }}</v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-container>
      <v-container class="accesorios secundario--text">
        <p style="text-align: center">Accesorios</p>
        <v-container>
          <v-row align="center" justify="center">
            <v-col v-for="n in 3" :key="n" md="3">
              <v-card outlined>slot{{ n }}</v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-container>
      <v-container class="armas secundario--text">
        <p style="text-align: center">Armas</p>
        <v-container>
          <v-row align="center" justify="center">
            <v-col v-for="n in 3" :key="n" md="3">
              <v-card outlined>slot{{ n }}</v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-container>
    </v-item-group>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nombre: 'Pepe',
    }
  },
}
</script>
