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
          <v-row class="fill-height title" align="center" justify="center">
            <div>
              <h1>{{ item.title }}</h1>
            </div>
          </v-row></v-carousel-item
        >
      </v-carousel>
    </v-container>
  </v-main>
</template>
<style scoped>
h1 {
  color: #ffffff;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}
.centrado {
  width: 55%;
  height: 60%;
}
</style>
<script>
export default {
  data() {
    return {
      items: [
        {
          src: 'https://i.imgur.com/rHmoQHQ.jpg',
          title: 'Elder Scrolls Online',
        },
        {
          src: 'https://i.imgur.com/bfn0jw5.jpg',
        },
        {
          src: 'https://i.imgur.com/9jFMJYF.jpg',
        },
      ],
    }
  },
}
</script>
