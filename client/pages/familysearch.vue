<template>
  <section>
    <div class="primario">
      <tabla-items :families="families"></tabla-items>
      <!-- <label for="">{{ post }}</label> -->
      <!-- <label for="">{{ families }}</label> -->
    </div>
  </section>
</template>

<script>
import TablaItems from '~/components/Buscador/TablaItems.vue'
export default {
  components: { TablaItems },
  async asyncData({ $axios }) {
    const post = await $axios.$get(
      process.env.VUE_APP_SERVER_URL + '/Familia/list'
    )
    return { families: post }
  },
  data() {
    return {
      families: [],
    }
  },
}
</script>
