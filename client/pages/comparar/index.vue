<template>
  <div class="primario" style="height: 100%">
    <div style="margin: 20px">
      <v-item-group>
        <v-row>
          <v-item class="primario" style="overflow: hidden">
            <v-card width="30%">
              <v-autocomplete
                :items="personajes"
                placeholder="Selecciona un personaje"
                outlined
                background-color="acentuado2"
                color="acentuado1"
              ></v-autocomplete>
              <personaje class="bordes"></personaje>
            </v-card>
          </v-item>
          <v-item class="primario">
            <v-card class="secundario--text" width="40%">stats</v-card>
          </v-item>
          <v-item class="primario">
            <v-card width="30%">
              <v-autocomplete
                :items="personajes"
                placeholder="Selecciona un personaje de referencia"
                outlined
                background-color="acentuado2"
                color="acentuado1"
              ></v-autocomplete>
              <personaje class="bordes"></personaje>
            </v-card>
          </v-item>
        </v-row>
      </v-item-group>
    </div>
  </div>
</template>

<style>
.bordes {
  border-width: 2px;
  border-style: solid;
  border-color: #a68f7b;
}
</style>
<script>
import Personaje from '~/components/personajes/Personaje.vue'
export default {
  components: { Personaje },
  data() {
    return {
      personajes: ['Pepe', 'Jaime', 'Manuel'],
    }
  },
}
</script>
