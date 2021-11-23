<template>
  <div>
    <v-card class="mx-auto" max-width="344">
      <v-list-item three-line>
        <v-list-item-content>
          <h2>{{ data.trait }}</h2>
          <v-list-item-title class="text-h5 mb-1"
            >{{ data.material }}
          </v-list-item-title>
          <v-list-item-subtitle>{{
            data.traitProperties
          }}</v-list-item-subtitle>
          <!--   <v-list-item v-for="(item, i) in data.listaTraits.calidades" :key="i">
            <v-list-item-content>
              <v-list-item-title v-text="item.Legendary"></v-list-item-title>
            </v-list-item-content>
          </v-list-item> -->
          <h4 {{}}>valor Legendary</h4>
        </v-list-item-content>
      </v-list-item>
    </v-card>
  </div>
</template>
<script>
export default {
  props: ['data'],
  data() {
    return {
      trait: '',
      material: '',
      to: '',
      traitProperties: '',
      calidades: [],
    }
  },
}
</script>
