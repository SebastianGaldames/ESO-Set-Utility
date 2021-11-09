<template>
  <v-layout justify-center>
    <v-flex xs12 sm10 md8 lg6>
      <v-card>
        <v-flex xs12 sm6>
          <v-text-field
            v-model="mensaje"
            label="Usuario"
            hint="Ingresa tu Usuario"
            clearable
          ></v-text-field>
        </v-flex>

        <v-flex xs12 sm6>
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
        </v-flex>
        <v-col>
          <v-row>
            <div>
              <v-btn flat small>¿Olvidaste tu contraseña?</v-btn>
            </div>
          </v-row>
          <v-row>
            <div class="text-xs-center">
              <v-btn round color="error" dark>Iniciar Sesión</v-btn>
            </div>
          </v-row>
          <v-row>
            <div>
              ¿No tienes cuenta?
              <v-btn flat small>Regístrate</v-btn>
            </div>
          </v-row>
        </v-col>
      </v-card>
    </v-flex>
  </v-layout>
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
