<template>
  <div class="itemsB">
    <div>
      <v-item-group class="contenedor primario">
        <v-container>
          <div class="secundario--text">Lista de Items</div>
          <v-row justify="end"
            ><v-btn
              class="agreBtn acentuado1 texto1--text"
              @click="dialogAgregar = true"
              >Agregar Item</v-btn
            ></v-row
          >
          <v-row>
            <v-col v-for="(item, id) in items" :key="id" md="4">
              <v-card
                v-ripple
                class="mx-auto primario"
                max-width="350"
                outlined
              >
                <div class="itemsB">
                  <v-list-item three-line class="primario">
                    <v-list-item-avatar
                      tile
                      size="80"
                      color="grey"
                    ></v-list-item-avatar>
                    <v-list-item-content class="content-hover" outlined>
                      <v-list-item-title class="text-h5 mb-1 secundario--text">
                        {{ item.nombre }}
                      </v-list-item-title>
                      <v-list-item-subtitle class="secundario--text">
                        Set: {{ item.familia }}
                      </v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                </div>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
        <v-dialog v-model="dialogAgregar" width="500">
          <v-card>
            <v-card-title>
              <span class="text-h5">Agregar Item</span>
            </v-card-title>
            <v-card-text>
              <div>
                <v-row>
                  <v-col md="12">
                    <v-text-field
                      v-model="newItem.nombre"
                      label="Nombre"
                      :rules="[rules.required]"
                    />
                  </v-col>
                  <v-col cols="12">
                    <v-text-field
                      v-model="newItem.familia"
                      label="Set"
                      :rules="[rules.required]"
                    />
                  </v-col>
                </v-row>
              </div>
            </v-card-text>

            <v-card-actions>
              <v-spacer />
              <v-btn @click="dialogAgregar = false"> Cancelar </v-btn>
              <v-btn @click="agregarItem()"> Guardar </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-item-group>
    </div>
  </div>
</template>

<style>
.itemsB {
  border-width: 2px;
  border-style: solid;
  border-color: #a68f7b;
}
</style>

<script>
export default {
  data: () => ({
    rules: {
      required: (value) => !!value || 'Requerido.',
    },
    dialogAgregar: false,
    items: [
      { nombre: 'Breton Helm', familia: 'ADEPT RIDER' },
      { nombre: 'Breton Cuirass', familia: 'ADEPT RIDER' },
      { nombre: 'Breton Gauntlets', familia: 'HIST WHISPERER' },
      { nombre: 'Bruiser Boots', familia: 'DEMONIC' },
      { nombre: 'Breton Helm', familia: 'ADEPT RIDER' },
      { nombre: 'Breton Cuirass', familia: 'ADEPT RIDER' },
      { nombre: 'Breton Gauntlets', familia: 'HIST WHISPERER' },
      { nombre: 'Bruiser Boots', familia: 'DEMONIC' },
      { nombre: 'Breton Helm', familia: 'ADEPT RIDER' },
      { nombre: 'Breton Cuirass', familia: 'ADEPT RIDER' },
      { nombre: 'Breton Gauntlets', familia: 'HIST WHISPERER' },
      { nombre: 'Bruiser Boots', familia: 'DEMONIC' },
      { nombre: 'Breton Helm', familia: 'ADEPT RIDER' },
      { nombre: 'Breton Cuirass', familia: 'ADEPT RIDER' },
      { nombre: 'Breton Gauntlets', familia: 'HIST WHISPERER' },
      { nombre: 'Bruiser Boots', familia: 'DEMONIC' },
    ],
    newItem: {
      nombre: '',
      familia: '',
    },
  }),
  methods: {
    agregarItem() {},
  },
}
</script>
