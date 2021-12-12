<template>
  <div>
    <recuperacion-contrasena></recuperacion-contrasena>
  </div>
</template>
<script>
import recuperacionContrasena from '~/components/RecuperacionContrasena.vue'
export default {
  components: { recuperacionContrasena },
  beforeMount() {
    const storeUser = this.$store.state.usuario
    if (storeUser !== null) {
      this.$router.push('/')
    }
  },
}
</script>
