<template>
  <section>
    <div class="w-100 mx-auto">
      <h3>Lista de Glifos</h3>
    </div>
    <div class="w-100 mx-auto primario">
      <v-responsive class="overflow-y-auto" max-height="200">
        <v-row class="galery">
          <v-col v-for="n in 5" :key="n" md="3">
            <v-card v-ripple dark style="border: 2px solid #a68f7b" outlined>
              <img
                class="img"
                src="https://elderscrollsonline.wiki.fextralife.com/file/Elder-Scrolls-Online/glyph_of_health-eso-wiki-guide.png"
                alt=""
              />
              <h5 class="centro texto1--text">armadura</h5>
              <v-spacer />
              <hr class="linea secundario" />
              <h4 class="centro texto1--text">Glyph of Magicka</h4>
              <hr class="linea secundario" />
              <v-spacer />
              <h5 class="centro texto1--text">aumenta en X la magia</h5>
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
