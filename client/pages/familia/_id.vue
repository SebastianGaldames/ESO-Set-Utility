<template>
  <section color="primario">
    <div class="w-100 mx-auto">
      <NavbarIS> </NavbarIS>
      <Navbar> </Navbar>
    </div>
    <hr class="secundario" />
    <div class="w-100 primario">
      <v-row class="galery">
        <v-col class="mx-auto" color="primario" md="6" sm="8">
          <v-container class="primario">
            <v-row no-gutters>
              <v-col sm="6">
                <h1 class="title text-center lista texto1--text">
                  Set: {{ $route.params.item.nombre }}
                </h1>
              </v-col>
              <v-spacer />
            </v-row>
            <v-row>
              <v-col class="der texto1--text" md="3">
                <h3>Obtencion:</h3>
              </v-col>
              <v-col>
                <p class="izp secundario--text">infoPertinente</p>
              </v-col>
            </v-row>
            <v-row>
              <v-col class="der texto1--text" md="3">
                <h3>DLC requerido:</h3>
              </v-col>
              <v-col>
                <p class="izp secundario--text">infoPertinente</p>
              </v-col>
            </v-row>
            <v-row>
              <v-col class="der texto1--text" md="3">
                <h3>Estilo:</h3>
              </v-col>
              <v-col>
                <p class="izp secundario--text">infoPertinente</p>
              </v-col>
            </v-row>
            <v-row>
              <v-col class="der texto1--text" md="3">
                <h3>Localización:</h3>
              </v-col>
              <v-col></v-col>
            </v-row>
            <v-row>
              <v-col class="der" md="3">
                <h3></h3>
              </v-col>
              <v-col>
                <p class="secundario--text">Ubicacion</p>
              </v-col>
            </v-row>
          </v-container>
        </v-col>
        <v-col class="mx-auto" md="6" sm="8" color="primario">
          <v-container>
            <v-row no-gutters>
              <v-col>
                <v-card class="pa-2 borde" color="primario" outlined tile>
                  <v-row class="galery">
                    <v-col md="4">
                      <h5 class="texto1--text">"obtención"</h5>
                    </v-col>

                    <v-col md="8">
                      <h5 class="der texto1--text">level "50" - CP "160"</h5>
                    </v-col>
                  </v-row>
                  <v-spacer />
                  <v-row>
                    <v-col>
                      <img
                        class="test"
                        src="https://eso-hub.com/storage/icons/gear_breton_heavy_head_d.webp"
                        alt=""
                      />
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col md="3"></v-col>
                    <v-col md="6">
                      <h1 class="centro texto1--text">
                        {{ $route.params.item.nombre }}
                      </h1>
                    </v-col>
                    <v-col md="3"></v-col>
                  </v-row>
                  <v-spacer />
                  <v-row>
                    <v-col md="3"></v-col>
                    <v-col md="6">
                      <hr class="secundario" />
                    </v-col>
                    <v-col md="3"></v-col>
                  </v-row>

                  <v-spacer />
                  <v-row>
                    <v-col class="centro texto1--text">
                      <p>(2 items) "buffo de estadisticas"</p>
                      <p>(3 items) "buffo de estadisticas"</p>
                      <p>(4 items) "buffo de estadisticas"</p>
                      <p>(5 items) "bono por uso de la familia"</p>
                    </v-col>
                  </v-row>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </v-col>
      </v-row>
    </div>
    <v-spacer />
    <div class="w-100 primario">
      <v-row class="galery">
        <v-col v-for="n in 20" :key="n" md="2">
          <v-card v-ripple class="item borde" color="primario" outlined>
            <img
              class="test"
              src="https://eso-hub.com/storage/icons/gear_breton_heavy_head_d.webp"
              alt=""
            />
            <h5 class="centro texto1--text">"Tipo"</h5>
            <h4 class="centro texto1--text">"Nombre"</h4>
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
.borde {
  border: 1px solid white !important;
  border-color: #a68f7b !important;
}
.primario {
  border: 1px solid white !important;
  border-color: #a68f7b !important;
}
</style>
