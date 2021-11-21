<template>
  <v-main class="color primario">
    <v-container class="centrado">
      <v-carousel :show-arrows="false" cycle>
        <v-carousel-item
          v-for="(item, i) in items"
          :key="i"
          :src="item.src"
          reverse-transition="fade-transition"
          transition="fade-transition"
        >
        </v-carousel-item>
      </v-carousel>
    </v-container>
  </v-main>
</template>
<style scoped>
h1 {
  color: #ffffff;
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
}
.centrado {
  width: 60%;
  height: fit-content;
}
</style>
<script>
export default {
  data() {
    return {
      items: [
        {
          src: 'https://i.imgur.com/DmGcmJu.jpg',
        },
        {
          src: 'https://i.imgur.com/bgmZ682.jpg',
        },
        {
          src: 'https://i.imgur.com/9jFMJYF.jpg',
        },
      ],
    }
  },
}
</script>
