<template>
  <section>
    <div class="w-100 mx-auto">
      <v-toolbar color="primary">
        <v-toolbar-title align="center">Aqui estaria la barra</v-toolbar-title>
      </v-toolbar>
    </div>
    <div c lass="w-50">
      <v-row>
        <v-col class="mx-auto" md="6" sm="8">
          <v-container class="grey lighten-5">
            <v-row no-gutters>
              <v-col sm="2"></v-col>
              <v-col sm="6">
                <h1 class="title text-center lista">
                  Set: "Nombre de la Familia"
                </h1>
              </v-col>
              <v-spacer />
            </v-row>
            <v-row>
              <v-col class="der" md="3">
                <h3>Obtencion:</h3>
              </v-col>
              <v-col>
                <p class="izp">infoPertinente</p>
              </v-col>
            </v-row>
            <v-row>
              <v-col class="der" md="3">
                <h3>DLC requerido:</h3>
              </v-col>
              <v-col>
                <p class="izp">infoPertinente</p>
              </v-col>
            </v-row>
            <v-row>
              <v-col class="der" md="3">
                <h3>Estilo:</h3>
              </v-col>
              <v-col>
                <p class="izp">infoPertinente</p>
              </v-col>
            </v-row>
            <v-row>
              <v-col class="der" md="3">
                <h3>Localización:</h3>
              </v-col>
            </v-row>
            <v-row>
              <v-col class="der" md="3">
                <h3></h3>
              </v-col>
              <v-col>
                <p>Ubicacion</p>
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
                      <h5>"obtención"</h5>
                    </v-col>
                    <v-col md="1"></v-col>
                    <v-col md="5">
                      <h5 class="der">level "50" - CP "160"</h5>
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
                  <v-row>
                    <v-col md="3"></v-col>
                    <v-col md="6">
                      <h1 class="centro">"Nombre de la Familia"</h1>
                    </v-col>
                    <v-col md="3"></v-col>
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
                    <v-col class="centro">
                      <p>(2 items) "buffo de estadisticas"</p>
                      <p>(3 items) "buffo de estadisticas"</p>
                      <p>(4 items) "buffo de estadisticas"</p>
                      <p>(5 items) "bono por uso de la familia"</p>
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
    <v-spacer />
    <div class="w-100">
      <v-row class="galery">
        <v-col v-for="n in 20" :key="n" md="2">
          <v-card v-ripple class="item" outlined @click="redirigir()">
            <img
              class="test"
              src="https://eso-hub.com/storage/icons/gear_breton_heavy_head_d.webp"
              alt=""
            />
            <h5 class="centro">"Tipo"</h5>
            <h4 class="centro">"Nombre"</h4>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </section>
</template>

<style>
.test {
  display: block;
  margin: 0 auto;
}
.item {
  max-width: 150px;
  max-height: 150px;
}
.w-100 {
  width: 100%;
}
.galery {
  width: 75%;
  margin: 0 auto;
}
.der {
  justify-content: right;
  text-align: right;
}
.izq {
  text-align: left;
}
.centro {
  text-align: center;
}
</style>
