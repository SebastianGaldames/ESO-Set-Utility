<template>
  <section class="contenedor">
    <div class="w-100 mx-auto">
      <gliphs-comp :lista-glifos="listaGlifos"></gliphs-comp>
    </div>
  </section>
</template>

<script>
import gliphsComp from '~/components/Glifos/gliphsComp.vue'
export default {
  components: { gliphsComp },
  async asyncData({ $axios }) {
    const post = await $axios.$get(
      process.env.VUE_APP_SERVER_URL + '/Glyph/list'
    )
    console.log(post)
    return { listaGlifos: post }
  },
  data() {
    return {
      listaGlifos: [],
    }
  },
}
</script>

<style>
.contenedor {
  max-width: 600px;
}
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
