<template>
  <section>
    <div class="w-100 mx-auto">
      <v-toolbar color="primary">
        <v-toolbar-title align="center">Aqui estaria la barra</v-toolbar-title>
      </v-toolbar>
    </div>
    <div class="w-50">
      <v-row>
        <v-col class="mx-auto" md="6" sm="8">
          <v-container class="grey lighten-5">
            <v-row no-gutters>
              <v-col cols="12" sm="4">
                <h1 class="title text-center lista">Set:</h1>
              </v-col>
              <v-spacer />
            </v-row>
            <v-row>
              <v-col class="lista" md="3">
                <h3>Obtencion:</h3>
              </v-col>
              <v-col>
                <h3 class="info">infoPertinente</h3>
              </v-col>
            </v-row>
            <v-row>
              <v-col class="lista" md="3">
                <h3>DLC requerido:</h3>
              </v-col>
            </v-row>
            <v-row>
              <v-col class="lista" md="3">
                <h3>Estilo:</h3>
              </v-col>
            </v-row>
            <v-row>
              <v-col class="lista" md="3">
                <h3>Localización:</h3>
              </v-col>
            </v-row>
            <v-row>
              <v-col class="lista" md="3">
                <h3></h3>
              </v-col>
              <v-col>
                <h3>Ubicacion</h3>
              </v-col>
            </v-row>
          </v-container>
        </v-col>
        <v-col class="mx-auto" md="4" sm="8">
          <v-container class="grey lighten-5">
            <v-row no-gutters>
              <v-col>
                <v-card class="pa-2" outlined tile>
                  <v-row>
                    <v-col md="1"></v-col>
                    <v-col md="4">
                      <h5>obtención</h5>
                    </v-col>
                    <v-col md="1"></v-col>
                    <v-col md="5">
                      <h5 class="lista">level 50 - CP 160</h5>
                    </v-col>
                    <v-col md="1"></v-col>
                  </v-row>
                  <v-spacer />
                  <v-row>
                    <v-col md="5"></v-col>
                    <v-col>
                      <v-img
                        lazy-src="https://picsum.photos/id/11/10/6"
                        max-height="80"
                        max-width="80"
                        src="https://picsum.photos/id/11/500/300"
                      ></v-img>
                    </v-col>
                    <v-col md="5"></v-col>
                  </v-row>
                  <v-spacer />
                  <v-row>
                    <v-col md="3"></v-col>
                    <v-col md="6">
                      <hr />
                    </v-col>
                    <v-col md="3"></v-col>
                  </v-row>

                  <v-spacer />
                  <v-row>
                    <v-col md="3"></v-col>
                    <v-col class="buffs">
                      <p>(2 items) A</p>
                      <p>(3 items) A</p>
                      <p>(4 items) A</p>
                      <p>(5 items) A</p>
                    </v-col>
                    <v-col md="3"></v-col>
                  </v-row>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </v-col>
        <v-col class="mx-auto" md="2"></v-col>
      </v-row>
    </div>
    <div></div>
  </section>
</template>

<style>
.lista {
  justify-content: right;
  text-align: right;
}
.info {
  text-align: left;
}
.buffs {
  text-align: center;
}
</style>
