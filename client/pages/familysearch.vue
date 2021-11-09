<template>
  <div class="container">
    <tabla-items :families="families"></tabla-items>
    <!-- <label for="">{{ post }}</label> -->
    <!-- <label for="">{{ families }}</label> -->
  </div>
</template>

<script>
import TablaItems from '~/components/Buscador/TablaItems.vue'
export default {
  components: { TablaItems },
  async asyncData({ $axios }) {
    const post = await $axios.$get(process.env.SERVER_URL + '/Familia/list/')
    return { families: post }
  },
  data() {
    return {
      families: [],
      hola: ['hola'],
    }
  },
}
</script>
