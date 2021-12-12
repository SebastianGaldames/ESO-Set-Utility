<template>
  <v-card>
    <v-card-title> Estadísticas </v-card-title>
    <v-card-text>
      <div v-for="(value, propertyName) in stats" :key="propertyName">
        <div>
          <span>{{ propertyName }}:</span>
          {{ value }}
        </div>
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
    personajeSlots: {
      type: Array,
      default: () => [],
    },
    stats: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      stat1: 0,
      stat2: 0,
      stat3: 0,
      testingSlots: [
        { familia: '1234' },
        { familia: '1234' },
        { familia: '9876' },
      ],
    }
  },
  computed: {
    computedSample() {
      return ''
    },
    itemsPerSet() {
      const itemsPerSet = []
      for (const slot of this.testingSlots) {
        const foundPair = itemsPerSet.find(
          (objectPair) => objectPair.familia === slot.familia
        )
        if (foundPair !== undefined) {
          foundPair.itemQuantity += 1
        } else {
          itemsPerSet.push({ familia: slot.familia, itemQuantity: 1 })
        }
      }
      return itemsPerSet
    },
  },
  methods: {
    itemsPerSetMethod(slots) {
      const itemsPerSet = []
      for (const slot of slots) {
        const foundPair = itemsPerSet.find(
          (objectPair) => objectPair.familia === slot.familia
        )
        if (foundPair !== undefined) {
          foundPair.itemQuantity += 1
        } else {
          itemsPerSet.push({ familia: slot.familia, itemQuantity: 1 })
        }
      }
      return itemsPerSet
    },
    applySetStats() {
      this.$emit('sample')
    },
    sampleEvent() {
      this.$emit('sample')
    },
  },
}
</script>
<style>
span {
  font-weight: bold;
}
</style>
