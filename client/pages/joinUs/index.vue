<template>
  <section>
    <div class="w-100 textCentro">
      <v-row>
        <v-col md="2"></v-col>
        <v-col class="" md="8">
          <h2>
            Si quieres seguir las noticias mas de cerca y no perderte de nada
          </h2>
          <h2>Inscribete</h2>
          <hr class="linea" />
        </v-col>
        <v-col md="2"></v-col>
      </v-row>
      <v-row>
        <v-col md="2"></v-col>
        <v-col md="2">
          <v-flex class="d-flex">
            <v-img
              class="imagen"
              max-height="200"
              max-width="200"
              src="https://i.imgur.com/q8tmWZt.png"
            >
            </v-img>
          </v-flex>
          <v-flex class="d-flex">
            <v-img
              class="imagen"
              max-height="200"
              max-width="200"
              src="https://www.freepnglogos.com/uploads/discord-logo-png/concours-discord-cartes-voeux-fortnite-france-6.png"
            >
            </v-img>
          </v-flex>
        </v-col>
        <v-col class="textDer w-100" md="6">
          <v-text-field v-model="Nombre" label="Nombre"></v-text-field>
          <v-text-field
            v-model="PerfilSteam"
            label="Perfil de Steam"
          ></v-text-field>
          <v-select
            v-model="Servidor"
            :items="opServers"
            label="Servidor que juegas"
          ></v-select>
          <v-select
            v-model="Idioma"
            :items="opIdiomas"
            label="Idioma"
          ></v-select>
          <v-text-field
            v-model="CorreoContacto"
            label="Correo de Contacto"
          ></v-text-field>
        </v-col>
        <v-col md="2"></v-col>
      </v-row>
      <v-row>
        <v-col md="4"></v-col>
        <v-col class="textDer w-100" md="6">
          <div>
            <v-bottom-sheet v-model="sheet" persistent>
              <template v-slot:activator="{ on, attrs }">
                <v-btn color="green" dark v-bind="attrs" v-on="on">
                  Enviar
                </v-btn>
              </template>
              <v-sheet class="textCentro" height="200px">
                <v-spacer />
                <div class="py-3">Seguro desea enviar esta informacion</div>
                <v-btn class="mt-6" text color="green" @click="enviarInfo()">
                  Seguro
                </v-btn>
              </v-sheet>
            </v-bottom-sheet>
          </div>
        </v-col>
        <v-col md="2"></v-col>
      </v-row>
    </div>
  </section>
</template>

<script>
import $axios from 'axios'
export default {
  data: () => ({
    sheet: false,
    Nombre: undefined,
    PerfilSteam: undefined,
    Servidor: undefined,
    Idioma: undefined,
    CorreoContacto: undefined,

    opServers: ['EU', 'NA'],
    opIdiomas: ['Ingles', 'Español'],
  }),
  methods: {
    async enviarInfo() {
      this.sheet = !this.sheet
      const data = {
        Nombre: this.Nombre,
        PerfilSteam: this.PerfilSteam,
        Servidor: this.Servidor,
        Idioma: this.Idioma,
        CorreoContacto: this.CorreoContacto,
      }
      const response = await $axios.post(
        process.env.VUE_APP_SERVER_URL + '/Mail/post-mail',
        data
      )
      console.log(response)
      const response2 = await $axios.post(
        process.env.VUE_APP_SERVER_URL + '/Mail/info-mail',
        data
      )
      console.log(response2)
    },
  },
}
</script>

<style>
.w-100 {
  width: 100%;
  align-content: center;
}
.textCentro {
  text-align: center;
  padding: 5px 10px;
}
.textDer {
  text-align: right;
  padding: 5px 10px;
}
,
.linea {
  width: 100%;
  align-content: center;
}
</style>
