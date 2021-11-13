<template>
  <div>
    <div>inventario</div>
    <div>items</div>
    {{ selectedItem }}

    <div class="d-flex align-content-start flex-wrap">
      <div v-for="(item, nombre) in items" :key="nombre" flat>
        <item-box :item="item"></item-box>
      </div>
    </div>
  </div>
</template>
<script>
import ItemBox from '~/components/personajes/ItemBox.vue'
export default {
  components: { ItemBox },
  props: {
    value: {
      type: Object,
      default: () => {},
      required: true,
    },
    items: {
      type: Array,
      default: () => [],
      required: true,
    },
  },
  data() {
    return {
      selectedItem: {},
    }
  },
}
</script>
