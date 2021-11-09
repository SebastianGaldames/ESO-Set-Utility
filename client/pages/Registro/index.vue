<template>
  <v-layout justify-center>
    <v-flex xs12 sm10 md8 lg6>
      <v-card>
        <v-autocomplete
          ref="pais"
          v-model="pais"
          :rules="[() => !!pais || '¡Este campo es obligatorio!']"
          :items="paises"
          label="Pais"
          placeholder="Selecciona..."
          required
        ></v-autocomplete>

        <v-flex xs12 sm6>
          <v-text-field
            v-model="mensaje"
            label="Ingresa tu ID"
            clearable
          ></v-text-field>
        </v-flex>
        <v-flex xs12 sm6>
          <v-text-field
            v-model="mensaje"
            label="Email"
            clearable
          ></v-text-field>
        </v-flex>
        <v-flex xs12 sm6>
          <v-text-field
            v-model="mensaje"
            label="Confirma tu email"
            clearable
          ></v-text-field>
        </v-flex>
        <v-flex xs12 sm6>
          <v-text-field
            :rules="[rules.required, rules.min]"
            :type="show2 ? 'text' : 'password'"
            name="input-10-2"
            label="Ingresa tu contraseña"
            hint="Debe tener al menos 8 caracteres"
            value="wqfasds"
            class="input-group--focused"
            @click:append="show2 = !show2"
          ></v-text-field>
        </v-flex>
        <v-flex xs12 sm6>
          <v-text-field
            :rules="[rules.required, rules.min]"
            :type="show2 ? 'text' : 'password'"
            name="input-10-2"
            label="Confirma tu contraseña"
            hint="Debe coincidir con la contraseña escrita en el campo anterior"
            value="wqfasds"
            class="input-group--focused"
            @click:append="show2 = !show2"
          ></v-text-field>
        </v-flex>

        <v-checkbox
          v-model="checkbox"
          :error-messages="checkboxErrors"
          label="Estoy de acuerdo con los términos y condiciones"
          required
          @change="$v.checkbox.$touch()"
          @blur="$v.checkbox.$touch()"
        ></v-checkbox>
        <v-row>
          <v-col>
            <div class="text-xs-center">
              <v-btn round color="error" dark>Registrarme</v-btn>
            </div>
          </v-col>
          <v-col>
            <div class="text-xs-center">
              <v-btn round dark>cancelar</v-btn>
            </div>
          </v-col>
        </v-row>
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
