<template>
  <div>
    <v-card>
      <v-card-title>
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Buscar familia"
          single-line
          hide-details
        ></v-text-field>
      </v-card-title>
      <div>
        <v-row align="center">
          <v-col class="d-flex">
            <v-select :items="items" label="filtro 1" solo></v-select>
          </v-col>
          <v-col class="d-flex">
            <v-select :items="items" label="filtro 2" solo></v-select>
          </v-col>
          <v-col class="d-flex">
            <v-select
              :items="items"
              item-text="filtro"
              label="filtro 3"
              solo
            ></v-select>
          </v-col>
        </v-row>
      </div>
      <v-data-table :headers="columnas" :items="families" :search="search">
        <template v-slot:item.imagen="{ item }">
          <router-link
            :to="{
              name: 'familia-id',
              params: { id: item.nombre, item: item },
            }"
          >
            <div>
              <v-img
                :src="item.imagen"
                :alt="item.name"
                height="64px"
                width="64px"
              ></v-img>
            </div>
          </router-link>
        </template>
      </v-data-table>
    </v-card>
  </div>
</template>
<script>
export default {
  props: {
    families: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      items: ['filtro1', 'filtro2', 'filtro3', 'filtro4'],
      search: '',
      columnas: [
        { value: 'imagen', sortable: false, width: '1%' },
        {
          sortable: false,
          value: 'nombre',
          width: '30%',
        },
        { sortable: false, value: 'calories' },
      ],
      familias: [
        {
          name: 'Frozen Yogurt',
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
          iron: '1%',
          imagen:
            'https://eso-hub.com/storage/icons/gear_breton_heavy_head_d.webp',
        },
        {
          name: 'Ice cream sandwich',
          calories: 237,
          fat: 9.0,
          carbs: 37,
          protein: 4.3,
          iron: '1%',
          imagen:
            'https://eso-hub.com/storage/icons/gear_breton_heavy_head_d.webp',
        },
        {
          name: 'Eclair',
          calories: 262,
          fat: 16.0,
          carbs: 23,
          protein: 6.0,
          iron: '7%',
          imagen:
            'https://eso-hub.com/storage/icons/gear_breton_heavy_head_d.webp',
        },
        {
          name: 'Cupcake',
          calories: 305,
          fat: 3.7,
          carbs: 67,
          protein: 4.3,
          iron: '8%',
          imagen:
            'https://eso-hub.com/storage/icons/gear_breton_heavy_head_d.webp',
        },
        {
          name: 'Gingerbread',
          calories: 356,
          fat: 16.0,
          carbs: 49,
          protein: 3.9,
          iron: '16%',
          imagen:
            'https://eso-hub.com/storage/icons/gear_breton_heavy_head_d.webp',
        },
        {
          name: 'Jelly bean',
          calories: 375,
          fat: 0.0,
          carbs: 94,
          protein: 0.0,
          iron: '0%',
          imagen:
            'https://eso-hub.com/storage/icons/gear_breton_heavy_head_d.webp',
        },
        {
          name: 'Lollipop',
          calories: 392,
          fat: 0.2,
          carbs: 98,
          protein: 0,
          iron: '2%',
          imagen:
            'https://eso-hub.com/storage/icons/gear_breton_heavy_head_d.webp',
        },
        {
          name: 'Honeycomb',
          calories: 408,
          fat: 3.2,
          carbs: 87,
          protein: 6.5,
          iron: '45%',
          imagen:
            'https://eso-hub.com/storage/icons/gear_breton_heavy_head_d.webp',
        },
        {
          name: 'Donut',
          calories: 452,
          fat: 25.0,
          carbs: 51,
          protein: 4.9,
          iron: '22%',
          imagen:
            'https://eso-hub.com/storage/icons/gear_breton_heavy_head_d.webp',
        },
        {
          name: 'KitKat',
          calories: 518,
          fat: 26.0,
          carbs: 65,
          protein: 7,
          iron: '6%',
          imagen:
            'https://eso-hub.com/storage/icons/gear_breton_heavy_head_d.webp',
        },
      ],
    }
  },
  mounted() {
    console.log('soy:' + this.hola)
  },
}
</script>
