<template>
  <v-footer dark padless>
    <v-card class="flex" flat tile>
      <v-card-title class="grey darken-3">
        <a href="/AboutUs"> Nosotros </a>
        <v-spacer></v-spacer>
        <v-btn v-for="data in links" :key="data.nro" class="mx-4" dark icon>
          <a :href="data.route" target="_blank" rel="noopener noreferrer">
            <v-icon size="24px">
              {{ data.icon }}
            </v-icon>
          </a>
        </v-btn>
      </v-card-title>
      <v-card-text class="py-2 white--text text-center">
        {{ new Date().getFullYear() }} — <strong>ESO-SET-UTILITY</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>
<script>
export default {
  data: () => ({
    links: [
      { nro: '1', icon: 'mdi-facebook', route: '' },
      { nro: '2', icon: 'mdi-twitter', route: '' },
      { nro: '3', icon: 'mdi-discord', route: 'https://discord.gg/WuBbkgC3cy' },
      { nro: '4', icon: 'mdi-instagram', route: '' },
    ],
  }),
}
</script>

<style>
a {
  color: white !important;
  text-decoration: inherit;
}
</style>
