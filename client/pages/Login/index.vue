<template>
  <v-main class="color primario">
    <v-container>
      <v-card
        dark
        class="mx-auto pa-10 ma-10"
        max-width="380"
        max-height="2000"
        style="border: 2px solid #a68f7b"
      >
        <div>
          <v-img src="https://i.ibb.co/sHT1f9G/Daco-5763924.png"></v-img>
        </div>

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
          value=""
          class="input-group--focused"
          @click:append="show2 = !show2"
        ></v-text-field>
        <v-btn text small>¿Olvidaste tu contraseña?</v-btn>
        <div class="mx-auto pa-10">
          <v-btn rounded color="error" dark>Iniciar Sesión</v-btn>
        </div>
        <div>
          ¿No tienes cuenta?
          <v-btn text small
            ><NuxtLink to="/Registro">Registrarse</NuxtLink></v-btn
          >
        </div>
      </v-card>
    </v-container>
  </v-main>
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
