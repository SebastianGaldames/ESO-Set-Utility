<template>
  <v-container>
    <NavbarIS> </NavbarIS>
    <Navbar> </Navbar>
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
            :rules="[emailrules.required, emailrules.syntax]"
            label="Email"
            clearable
          ></v-text-field>
        </v-flex>
        <v-flex xs12 sm6>
          <v-text-field
            v-model="mensaje"
            :rules="[emailrules.required, emailrules.equals]"
            label="Confirma tu email"
            clearable
          ></v-text-field>
        </v-flex>
        <v-flex xs12 sm6>
          <v-text-field
            v-model="password"
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
            :rules="[rules.required, rules.min, rules.equals]"
            :type="show2 ? 'text' : 'password'"
            name="input-10-2"
            label="Confirma tu contraseña"
            hint="Debe coincidir con la contraseña escrita en el campo anterior"
            value="wqfasds"
            class="input-group--focused"
            @click:append="show2 = !show2"
          ></v-text-field>
        </v-flex>

        <v-checkbox v-model="checkbox">
          <template v-slot:label>
            <div>Estoy de acuerdo con los términos y condiciones</div>
          </template>
        </v-checkbox>
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
  </v-container>
</template>

<style>
.margenform {
  margin-left: 20%;
  margin-right: 20%;
  font-size: 12px;
  border-radius: 10px;
  border-color: transparent transparent #1c335f transparent;
}
</style>

<script>
export default {
  data() {
    return {
      paises: ['Afghanistan', 'Albania', 'Algeria'],
      show: true,
      email: '',
      password: '',
      checkbox: false,
      rules: {
        required: (value) => !!value || 'Campo obligatorio',
        min: (v) => v.length >= 8 || 'Debe tener al menos 8 caracteres',
        equals: (v) => v === this.password || 'Las contraseñas no coinciden',
      },
      emailrules: {
        required: (value) => !!value || 'Campo obligatorio',
        equals: (v) => v === this.email || 'Los e-malis no coinciden',
        syntax: (v) => /.+@.+\..+/.test(v) || 'E-mail no es valido',
      },
    }
  },
}
</script>
