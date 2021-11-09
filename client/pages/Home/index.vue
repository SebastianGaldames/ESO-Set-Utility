<template>
  <v-main>
    <NavbarIS> </NavbarIS>
    <Navbar> </Navbar>
    <v-container>
      <v-carousel :show-arrows="false">
        <v-carousel-item
          v-for="(item, i) in items"
          :key="i"
          :src="item.src"
        ></v-carousel-item>
      </v-carousel>
    </v-container>
  </v-main>
</template>
<style scoped></style>
<script>
export default {
  data() {
    return {
      items: [
        {
          src: 'https://i.ibb.co/Jdn6tNC/img1.png',
        },
        {
          src: 'https://i.ibb.co/PZtqzVB/imh2.jpg',
        },
        {
          src: 'https://i.ibb.co/wwDvhM4/img3.png',
        },
      ],
    }
  },
}
</script>
