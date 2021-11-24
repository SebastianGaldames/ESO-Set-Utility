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
              :items="computed_ubi"
              label="Ubicacion"
              color="primario"
              solo
              @change="selected1 = true"
            ></v-select>
          </v-col>
          <v-col class="d-flex">
            <v-select
              v-model="selectedTipo"
              :items="computed_tipo"
              label="Tipo"
              solo
              @change="selected3 = true"
            ></v-select>
          </v-col>
          <v-col class="d-flex">
            <v-select
              v-model="selectedPeso"
              :items="computed_pesos"
              label="Peso"
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
          v-if="(selected2, selectedPeso !== '')"
          elevation="2"
          @click=";(selectedPeso = ''), (select2 = false)"
          >{{ selectedPeso }} x</v-btn
        >
      </div>
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
      pesos: [],
      tipo: [],
      search: '',
      selectedUbi: '',
      selectedTipo: '',
      selectedPeso: '',
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
          value: 'pesos',
          width: '30%',
          text: 'Peso',
        },
      ],
    }
  },
  computed: {
    computed_items() {
      const filtroUbi = this.selectedUbi
      const filtroTipo = this.selectedTipo
      const filtroPeso = this.selectedPeso
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
                    // Cuando hay ubicacion, tipo y peso
                    if (filtroPeso) {
                      item.pesos.forEach((element2) => {
                        if (element2 === filtroPeso) {
                          filtered += item
                        }
                      })
                    } else {
                      // Cuando hay ubicacion y tipo solamente
                      filtered += item
                    }
                  }
                }
              })
              // Cuando hay ubicacion y peso
            } else if (filtroPeso) {
              item.ubicacion.forEach((element) => {
                if (element === filtroUbi) {
                  item.pesos.forEach((element2) => {
                    if (element2 === filtroPeso) {
                      // console.log(item.nombre)
                      // Cuando hay ubicaicon, peso y tipo
                      if (filtroTipo) {
                        if (item.tipo === filtroTipo) {
                          filtered += item
                        }
                      } else {
                        // Cuando hay ubicacion y peso
                        filtered += item
                      }
                    }
                  })
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
              // Cuando es tipo y peso
              if (filtroPeso) {
                item.pesos.forEach((element2) => {
                  if (element2 === filtroPeso) {
                    filtered += item
                  }
                })
              } else {
                // Cuando es tipo
                filtered += item.tipo === filtroTipo
              }
            }
          } else if (filtroPeso) {
            // Cuando es peso
            // console.log(filtroPeso)
            filtered = item.nombre === aux
            item.pesos.forEach((element2) => {
              filtered += element2 === filtroPeso
            })
          } else {
            // cuando no hay filtros
            // console.log('entree xdd')
            filtered = item
          }
        }
        return filtered
      })
    },
    computed_tipo() {
      const filtroUbi = this.selectedUbi
      const filtroPeso = this.selectedPeso
      const selectedTipo = []
      const selectedTipo2 = []
      const tipoUbiPeso = []
      if (filtroPeso && !filtroUbi) {
        this.families.forEach((element) => {
          element.pesos.forEach((peso) => {
            if (filtroPeso === peso) {
              selectedTipo.push(element.tipo)
            }
          })
        })
        return selectedTipo.sort()
      }
      if (filtroUbi) {
        this.families.forEach((element) => {
          element.ubicacion.forEach((element2) => {
            if (filtroUbi === element2) {
              selectedTipo.push(element.tipo)
              const aux = [element.tipo, filtroUbi, element.pesos]
              tipoUbiPeso.push(aux)
            }
          })
        })
        if (filtroPeso) {
          tipoUbiPeso.forEach((filaTabla) => {
            filaTabla[2].forEach((peso) => {
              if (filtroPeso === peso) {
                selectedTipo2.push(filaTabla[0])
              }
            })
          })

          return selectedTipo2.sort()
        }
      } else {
        this.families.forEach((element) => {
          selectedTipo.push(element.tipo)
        })
      }
      return selectedTipo.sort()
    },
    computed_ubi() {
      const filtroTipo = this.selectedTipo
      const filtroPeso = this.selectedPeso
      const selectedUbi = []
      const selectedUbi2 = []
      const tipoUbiPeso = []
      if (filtroPeso && !filtroTipo) {
        this.families.forEach((element) => {
          element.pesos.forEach((peso) => {
            if (filtroPeso === peso) {
              element.ubicacion.forEach((ubi) => {
                selectedUbi.push(ubi)
              })
            }
          })
        })
        return selectedUbi
      }
      if (filtroTipo) {
        this.families.forEach((element) => {
          if (filtroTipo === element.tipo) {
            element.ubicacion.forEach((element2) => {
              selectedUbi.push(element2)
              if (element.pesos.length > 0) {
                const aux = [filtroTipo, element.ubicacion, element.pesos]
                tipoUbiPeso.push(aux)
              }
            })
          }
        })
        if (filtroPeso) {
          tipoUbiPeso.forEach((filaTabla) => {
            filaTabla[2].forEach((peso) => {
              if (filtroPeso === peso) {
                filaTabla[1].forEach((ubi) => {
                  selectedUbi2.push(ubi)
                })
              }
            })
          })
          // console.log(selectedUbi2)
          return selectedUbi2.sort()
        }
      } else {
        this.families.forEach((element) => {
          element.ubicacion.forEach((element2) => {
            selectedUbi.push(element2)
          })
        })
      }

      return selectedUbi.sort()
    },
    computed_pesos() {
      const filtroUbi = this.selectedUbi
      const filtroTipo = this.selectedTipo
      const selectedPeso = []
      const selectedPeso2 = []
      const tipoUbiPeso = []
      if (filtroTipo && !filtroUbi) {
        this.families.forEach((element) => {
          if (filtroTipo === element.tipo) {
            element.pesos.forEach((peso) => {
              selectedPeso.push(peso)
            })
          }
        })
        return selectedPeso
      }
      if (filtroUbi) {
        this.families.forEach((element) => {
          element.ubicacion.forEach((ubi) => {
            if (filtroUbi === ubi) {
              element.pesos.forEach((peso) => {
                selectedPeso.push(peso)
                if (element.pesos.length > 0) {
                  const aux = [element.tipo, filtroUbi, element.pesos]
                  tipoUbiPeso.push(aux)
                }
              })
            }
          })
        })
        if (filtroTipo) {
          tipoUbiPeso.forEach((element) => {
            if (element[0] === filtroTipo) {
              element[2].forEach((peso) => {
                selectedPeso2.push(peso)
              })
            }
          })
          return selectedPeso2
        }
      } else {
        this.families.forEach((element) => {
          element.pesos.forEach((peso) => {
            selectedPeso.push(peso)
          })
        })
      }

      return selectedPeso
    },
  },
  created() {
    this.transformarUbis()
    this.transformarTipos()
    this.transformarPesos()
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
    transformarPesos() {
      this.pesos.push('Light')
      this.pesos.push('Medium')
      this.pesos.push('Heavy')
    },
  },
}
</script>
