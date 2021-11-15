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
      <p>Familias</p>
      <v-data-table :headers="columnas" :items="families" :search="search">
        <template v-slot:item.imagen="{ item }">
          <router-link
            :to="{
              name: 'familia-id',
              params: { id: familiaToJson(item), item: item },
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
          sortable: true,
          value: 'nombre',
          width: '10%',
          text: 'Nombre',
        },
        {
          sortable: true,
          value: 'ubicacion',
          width: '30%',
          text: 'Ubicacion',
        },
      ],
    }
  },
  methods: {
    familiaToJson(item) {
      const myJSON = JSON.stringify(item)
      return myJSON
    },
  },
}
</script>
