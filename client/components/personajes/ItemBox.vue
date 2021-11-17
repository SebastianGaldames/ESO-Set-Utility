<template>
  <div>
    <v-card outlined>
      <v-img contain :src="item.imagen" height="54px" />
      <v-card-title class="justify-center"> {{ item.nombre }}</v-card-title>
      <v-card-text class="justify-center">family-name</v-card-text>
    </v-card>
  </div>
</template>
<script>
export default {
  props: {
    item: {
      type: Object,
      default: () => {},
      required: false,
    },
  },
  data() {
    return {
      //   item: {},
      favorite: false,
    }
  },
  methods: {
    // emits an event to update the parent component
    triggerUpdate(event) {
      this.$emit('input', this.value)
    },
  },
}
</script>
<style>
.itemsB {
  border-width: 2px;
  border-style: solid;
  border-radius: 4px;
  border-color: #a68f7b;
}
</style>
