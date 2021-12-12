<template>
  <section>
    <div class="w-100 textCentro">
      <v-flex class="d-flex">
        <v-img
          class="imagen"
          max-height="200"
          max-width="500"
          src="https://i.imgur.com/Hc1mF2k.png"
        >
        </v-img>
      </v-flex>
      <v-row>
        <v-col md="2"></v-col>
        <v-col class="" md="8">
          <h1>¿Quiénes Somos?</h1>
          <hr class="linea" />
        </v-col>
        <v-col md="2"></v-col>
      </v-row>
      <v-row>
        <v-col md="2"></v-col>
        <v-col md="8">
          <h3>Sebastian Galdames</h3>
          <h3>Diego Aguilera</h3>
          <h3>Christian Lizama</h3>
          <h3>Manuel Morales</h3>
          <h3>Joaquin Moya</h3>
          <h3>Leopoldo Muñoz</h3>
          <h3>Francisco Quevedo</h3>
          <h3>Joaquin Saavedra</h3>
          <h3>Nicolas Rojas</h3>
          <h3>Escarlet Tapia</h3>
          <v-spacer />
          <hr class="linea" />
        </v-col>
        <v-col md="2"></v-col>
      </v-row>
      <v-row>
        <v-col md="2"></v-col>
        <v-col md="8">
          <h3>Agradecemos que usen esta página</h3>
          <h3>
            Somos un grupo del curso Construcción de Software dentro de la
            Universidad de Talca.
          </h3>
          <h3>
            Esperamos les guste la página y nos den muchos comentarios a través
            del Discord de la Comunidad.
          </h3>
        </v-col>
        <v-col md="2"></v-col>
      </v-row>
      <v-flex class="d-flex">
        <a
          href="https://discord.gg/WuBbkgC3cy"
          target="_blank"
          class="imagen"
          rel="noopener noreferrer"
        >
          <v-img
            class="imagen"
            max-height="250"
            max-width="250"
            src="https://www.freepnglogos.com/uploads/discord-logo-png/concours-discord-cartes-voeux-fortnite-france-6.png"
          >
          </v-img>
        </a>
      </v-flex>
    </div>
  </section>
</template>

<style>
.w-100 {
  width: 100%;
  align-content: center;
}
.textCentro {
  text-align: center;
  padding: 5px 10px;
}
.linea {
  width: 100%;
  align-content: center;
}
.imagen {
  align-items: center;
  display: block;
  margin: 0 auto;
}
</style>
