<template>
  <div>
    <v-app class="page-container">
      <div class="content-wrap">
        <Navbar> </Navbar>
        <PiePag class="footer" solo></PiePag>
      </div>

      <Nuxt />
    </v-app>
  </div>
</template>

<script>
export default {
  created() {
    this.$store.dispatch('autoLogin')
  },
}
</script>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
.footer {
  bottom: 0;
  width: 100%;
  position: absolute;
  height: 0rem;
}
.content-wrap {
  padding-bottom: 0rem;
}
.page-container {
  position: relative;
  min-height: 100vh;
}
</style>
