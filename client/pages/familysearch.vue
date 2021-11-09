<template>
  <div class="container">
    <tabla-items></tabla-items>
    <!-- <label for="">{{ post }}</label> -->
    <label for="">{{ post }}</label>
  </div>
</template>

<script>
import TablaItems from '~/components/Buscador/TablaItems.vue'
export default {
  components: { TablaItems },
  // async asyncData({ params, $http }) {
  //   const post = await $http.$get(
  //     `http://localhost:9000/Familia/list${params.id}`
  //   )
  //   return { post }
  // },
}
</script>
