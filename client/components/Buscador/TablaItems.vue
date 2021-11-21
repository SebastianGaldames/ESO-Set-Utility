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
              color="primario"
              solo
              @change="selected1 = true"
            ></v-select>
          </v-col>
          <v-col class="d-flex">
            <v-select
              v-model="selectedTipo"
              :items="tipos"
              label="Tipo"
              solo
              @change="selected3 = true"
            ></v-select>
          </v-col>
          <v-col class="d-flex">
            <v-select
              v-model="selectedEstilo"
              :items="estilos"
              label="Estilo"
              solo
              @change="selected2 = true"
            ></v-select>
          </v-col>
        </v-row>
      </div>
      <div>
        <v-btn
          v-if="(selected1, selectedUbi !== '')"
          elevation="2"
          @click=";(selectedUbi = ''), (select = false)"
          >{{ selectedUbi }} x</v-btn
        >
        <v-btn
          v-if="(selected3, selectedTipo !== '')"
          elevation="2"
          @click=";(selectedTipo = ''), (select3 = false)"
          >{{ selectedTipo }} x</v-btn
        >
        <v-btn
          v-if="(selected2, selectedEstilo !== '')"
          elevation="2"
          @click=";(selectedEstilo = ''), (select2 = false)"
          >{{ selectedEstilo }} x</v-btn
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
              params: { id: item._id },
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
      selected1: false,
      selected2: false,
      selected3: false,
      ubicaciones: [],
      tipos: [],
      estilos: [],
      tipo: [],
      search: '',
      selectedUbi: '',
      selectedTipo: '',
      selectedEstilo: '',
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
        {
          sortable: true,
          value: 'tipo',
          width: '30%',
          text: 'Tipo',
        },
        {
          sortable: true,
          value: 'estilo',
          width: '30%',
          text: 'Estilo',
        },
      ],
    }
  },
  computed: {
    computed_items() {
      const filtroUbi = this.selectedUbi
      const filtroTipo = this.selectedTipo
      const filtroEstilo = this.selectedEstilo
      const aux = this.auxNombre
      return this.families.filter(function (item) {
        let filtered = true
        if (filtered) {
          // Empieza con filtro ubicacion
          if (filtroUbi) {
            filtered = item.nombre === aux
            // console.log(filtroUbi)
            // Cuando hay ubicacion y tipo
            if (filtroTipo) {
              item.ubicacion.forEach((element) => {
                if (element === filtroUbi) {
                  if (item.tipo === filtroTipo) {
                    // console.log(item.nombre)
                    // Cuando hay ubicacion, tipo y estilo
                    if (filtroEstilo) {
                      if (item.estilo === filtroEstilo) {
                        filtered += item
                      }
                    } else {
                      // Cuando hay ubicacion y tipo solamente
                      filtered += item
                    }
                  }
                }
              })
              // Cuando hay ubicacion y estilo
            } else if (filtroEstilo) {
              item.ubicacion.forEach((element) => {
                if (element === filtroUbi) {
                  if (item.estilo === filtroEstilo) {
                    // console.log(item.nombre)
                    // Cuando hay ubicaicon, estilo y tipo
                    if (filtroTipo) {
                      if (item.tipo === filtroTipo) {
                        filtered += item
                      }
                    } else {
                      // Cuando hay ubicacion y estilo
                      filtered += item
                    }
                  }
                }
              })
            } else {
              // Cuando hay solo ubicacion
              item.ubicacion.forEach((element) => {
                filtered += element === filtroUbi
              })
            }
          } else if (filtroTipo) {
            // Cuando es tipo
            // console.log(filtroTipo)
            filtered = item.nombre === aux
            if (item.tipo === filtroTipo) {
              // Cuando es tipo y estilo
              if (filtroEstilo) {
                if (item.estilo === filtroEstilo) {
                  filtered += item
                }
              } else {
                // Cuando es tipo
                filtered += item.tipo === filtroTipo
              }
            }
          } else if (filtroEstilo) {
            // Cuando es estilo
            // console.log(filtroEstilo)
            filtered = item.nombre === aux
            filtered += item.estilo === filtroEstilo
          } else {
            // cuando no hay filtros
            // console.log('entree xdd')
            filtered = item
          }
        }
        return filtered
      })
    },
  },
  created() {
    this.transformarUbis()
    this.transformarTipos()
    this.transformarEstilos()
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
    transformarTipos() {
      for (let i = 0; i < this.families.length; i++) {
        this.tipos.push(this.families[i].tipo)
      }
    },
    transformarEstilos() {
      for (let i = 0; i < this.families.length; i++) {
        if (this.families[i].estilo !== '') {
          this.estilos.push(this.families[i].estilo)
        }
      }
    },
  },
}
</script>
