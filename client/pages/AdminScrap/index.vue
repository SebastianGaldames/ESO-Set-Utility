<template>
  <div>
    <admin-scrap></admin-scrap>
  </div>
</template>

<script>
import AdminScrap from '~/components/Admin/AdminScrap.vue'
export default {
  components: { AdminScrap },

  data() {
    return {
      usuarioLogeado: false,
      usuario: null,
    }
  },
  beforeCreate() {
    const usuario = this.$store.state.usuario
    if (usuario === 'administrador') {
      this.usuario = usuario
      this.usuarioLogeado = true
    } else {
      this.$router.push({ name: 'index' })
    }
  },
}
</script>
