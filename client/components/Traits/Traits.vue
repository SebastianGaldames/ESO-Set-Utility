<template>
  <div>
    <traitCard
      v-for="(element, index) in listaTraits"
      :key="index"
      :data="element"
    ></traitCard>
  </div>
</template>

<script>
import traitCard from '~/components/Traits/traitCard.vue'
export default {
  name: 'Traits',
  components: { traitCard },
  props: ['data'],
  data() {
    return {
      listaTraits: [
        {
          trait: 'Well-Fitted',
          material: 'Almandine',
          to: 'armor',
          traitProperties: 'Reduces the cost of Roll Dodge and Sprint',
          calidades: [{ legendary: '6.0%' }, { legendary2h: '' }],
        },
        {
          trait: 'Charged',
          material: 'Amethyst',
          to: 'weapon',
          traitProperties: 'Increases chance to apply Status Effects by:',
          calidades: [{ legendary: '110%' }, { legendary2h: '200%' }],
        },
        {
          trait: 'Arcane',
          material: 'Cobalt',
          to: 'jewelry',
          traitProperties: 'Increases Maximum Magicka by:',
          calidades: [{ legendary: '877' }, { legendary2h: '' }],
        },
      ],
      listaAux: [],
    }
  },
  mounted() {
    this.listaAux = this.listaTrait
  },

  methods: {
    // async CargaDatosServidor() {
    //      await this.$axios
    //        .get(process.env.VUE_APP_SERVER_URL)
    //        .then(function (response) {
    //          this.listaTraits.push(response.data)
    //        })
    //    },
    //   mostrarListaJewelry() {
    //     this.listaTraits.length = 0
    //   this.listaAux.forEach((element) => {
    //   if (element.to === 'jewelry') {
    //        this.listaTraits.push(element)
    //      }
    //    })
    //   },
  },
}
</script>
