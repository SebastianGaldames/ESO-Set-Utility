<template>
  <section>
    <div class="w-100 mx-auto">
      <h3>Lista de Glifos</h3>
    </div>
    <div class="w-100 mx-auto">
      <v-responsive class="overflow-y-auto" max-height="200">
        <v-row class="galery">
          <v-col v-for="n in 38" :key="n" md="3">
            <v-card v-ripple outlined>
              <img
                class="img"
                src="https://elderscrollsonline.wiki.fextralife.com/file/Elder-Scrolls-Online/glyph_of_health-eso-wiki-guide.png"
                alt=""
              />
              <h5 class="centro">armadura</h5>
              <v-spacer />
              <hr class="linea" />
              <h4 class="centro">Glyph of Magicka</h4>
              <hr class="linea" />
              <v-spacer />
              <h5 class="centro">aumenta en X la magia</h5>
            </v-card>
          </v-col>
        </v-row>
      </v-responsive>
    </div>
  </section>
</template>

<style>
.w-100 {
  width: 100%;
}
.galery {
  width: 100%;
  margin: 0 auto;
}
.linea {
  width: 100%;
  align-content: center;
}
.centro {
  text-align: center;
  padding: 5px 10px;
}
.info {
  text-align: center;
}
.img {
  display: block;
  margin: 0 auto;
  padding: 5px;
}
</style>
