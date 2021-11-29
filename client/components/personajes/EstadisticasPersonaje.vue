<template>
  <v-card>
    <v-card-title> Estadisticas </v-card-title>
    <v-card-text>
      <p>
        {{ itemsPerSet }}
      </p>
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
  },
  data() {
    return {
      stat1: 0,
      stat2: 0,
      stat3: 0,
      testingSlots: [{ set: '1234' }, { set: '1234' }, { set: '9876' }],
    }
  },
  computed: {
    computedSample() {
      return ''
    },
    itemsPerSet() {
      const sets = []
      const itemsPerSet = []
      for (const slot of this.personajeSlots) {
        if (!sets.includes(slot.set)) {
          sets.push(slot.set)
          itemsPerSet.push({ set: slot.set, itemQuantity: 1 })
        } else {
          const foundPair = itemsPerSet.find(
            (objectPair) => objectPair.set === slot.set
          )
          foundPair.itemQuantity += 1
        }
      }
      return itemsPerSet
    },
  },
  methods: {
    sampleEvent() {
      this.$emit('sample')
    },
  },
}
</script>
