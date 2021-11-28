<template>
  <v-toolbar dark>
    <v-row class="d-flex justify-center">
      <v-flex class="d-flex">
        <NuxtLink to="/">
          <v-img
            max-height="100"
            max-width="250"
            src="https://i.imgur.com/Hc1mF2k.png"
          >
          </v-img>
        </NuxtLink>
      </v-flex>
      <NuxtLink
        to="/"
        style="text-decoration: none; color: inherit"
        class="pt-5"
      >
        <v-btn text> Inicio </v-btn></NuxtLink
      >
      <NuxtLink
        to="/familysearch"
        style="text-decoration: none; color: inherit"
        class="pt-5"
      >
        <v-btn text> Familias </v-btn></NuxtLink
      >
      <NuxtLink
        to="/personajes"
        style="text-decoration: none; color: inherit"
        class="pt-5"
      >
        <v-btn text> Personajes </v-btn></NuxtLink
      >
    </v-row>
  </v-toolbar>
</template>

<style scoped></style>

<script>
export default {}
</script>
