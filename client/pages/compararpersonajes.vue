<template>
  <div class="primario" style="height: 100%">
    <v-item-group>
      <v-container>
        <v-row>
          <v-item class="primario" style="overflow: hidden">
            <v-card width="33%">
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
            <v-card class="bordes secundario--text" width="33%">stats</v-card>
          </v-item>
          <v-item class="primario">
            <v-card width="33%">
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
      </v-container>
    </v-item-group>
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
