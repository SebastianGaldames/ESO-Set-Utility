<template>
  <div dark color="primario">
    <v-card dark color="primario">
      <v-card dark color="primario">
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Buscar familia"
          single-line
          hide-details
          white
          rounded
          solo
          class="pt-2"
        ></v-text-field>
      </v-card>

      <div dark color="primario" class="pt-2">
        <v-row align="center">
          <v-col class="d-flex">
            <v-select
              v-model="selectedUbi"
              :items="ubicaciones"
              label="Ubicacion"
              solo
              @change="selected = true"
            ></v-select>
          </v-col>
          <v-col class="d-flex">
            <v-select :items="estilo" label="Estilo" solo></v-select>
          </v-col>
          <v-col class="d-flex">
            <v-select :items="tipo" label="Tipo" solo></v-select>
          </v-col>
        </v-row>
      </div>
      <div>
        <v-btn
          v-if="(selected, selectedUbi !== '')"
          elevation="2"
          @click=";(selectedUbi = ''), (select = false)"
          >{{ selectedUbi }}</v-btn
        >
      </div>
      <p>Familias</p>
      <v-data-table
        :headers="columnas"
        :items="computed_items"
        :search="search"
      >
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
          <v-divider></v-divider>
        </template>
      </v-data-table>
    </v-card>
  </div>
</template>

<style scoped>
.centrar {
  text-align: left;
  padding-left: 50%;
  background-color: dimgray;
}
.bordes {
  border-width: 2px;
  border-style: solid;
  border-color: gold;
}
</style>

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
      selected: false,
      ubicaciones: [],
      estilo: [],
      tipo: [],
      search: '',
      selectedUbi: '',
      auxNombre: '',
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
  computed: {
    computed_items() {
      const filtroUbi = this.selectedUbi
      const aux = this.auxNombre
      return this.families.filter(function (item) {
        let filtered = true
        if (filtered) {
          if (filtroUbi) {
            filtered = item.nombre === aux
            item.ubicacion.forEach((element) => {
              filtered += element === filtroUbi
            })
          } else {
            // cuando no hay filtros
            filtered = item
          }
        }
        return filtered
      })
    },
  },
  created() {
    this.transformarUbis()
  },
  methods: {
    familiaToJson(item) {
      const myJSON = JSON.stringify(item)
      return myJSON
    },
    transformarUbis() {
      for (let i = 0; i < this.families.length; i++) {
        for (let j = 0; j < this.families[i].ubicacion.length; j++) {
          this.ubicaciones.push(this.families[i].ubicacion[j])
        }
      }
    },
  },
}
</script>
