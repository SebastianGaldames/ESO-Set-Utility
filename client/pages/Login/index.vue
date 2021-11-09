<template>
  <v-container>
    <NavbarIS></NavbarIS>
    <Navbar> </Navbar>

    <v-card class="mx-auto pa-10 ma-10" max-width="380" max-height="2000">
      <v-text-field
        v-model="mensaje"
        label="Usuario"
        hint="Ingresa tu Usuario"
        clearable
      ></v-text-field>

      <v-text-field
        :rules="[rules.required, rules.min]"
        :type="show2 ? 'text' : 'password'"
        name="input-10-2"
        label="Contraseña"
        hint="Ingresa tu contraseña"
        value="wqfasds"
        class="input-group--focused"
        @click:append="show2 = !show2"
      ></v-text-field>
      <v-btn flat small>¿Olvidaste tu contraseña?</v-btn>
      <v-btn round color="error" dark>Iniciar Sesión</v-btn>
      <div>
        ¿No tienes cuenta?
        <v-btn flat small
          ><NuxtLink to="/Registro">Registrarse</NuxtLink></v-btn
        >
      </div>
    </v-card>
  </v-container>
</template>

<style></style>

<script>
export default {
  data() {
    return {
      show: false,
      password: 'Password',
      rules: {
        required: (value) => !!value || 'Campo obligatorio',
        min: (v) => v.length >= 8 || 'Debe tener al menos 8 caracteres',
      },
    }
  },
}
</script>
