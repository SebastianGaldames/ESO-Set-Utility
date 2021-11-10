<template>
  <v-main class="colorFondo primario">
    <NavbarIS> </NavbarIS>
    <Navbar> </Navbar>
    <v-card
      dark
      class="mx-auto pa-10 ma-10 margenCarta"
      max-width="380"
      max-height="2000"
      style="border: 2px solid #a68f7b"
    >
      <div>
        <v-img src="https://i.ibb.co/sHT1f9G/Daco-5763924.png"></v-img>
      </div>

      <v-autocomplete
        ref="pais"
        v-model="pais"
        :rules="[() => !!pais || '¡Este campo es obligatorio!']"
        :items="paises"
        label="Pais"
        placeholder="Selecciona..."
        required
        class="secundario--text"
      ></v-autocomplete>

      <v-text-field
        v-model="mensaje"
        label="Ingresa tu ID"
        clearable
        class="secundario--text"
      ></v-text-field>

      <v-text-field
        v-model="email"
        :rules="[emailrules.required, emailrules.syntax]"
        label="Email"
        clearable
        class="secundario--text"
      ></v-text-field>

      <v-text-field
        v-model="mensaje"
        :rules="[emailrules.required, emailrules.equals]"
        label="Confirma tu email"
        clearable
        class="secundario--text"
      ></v-text-field>

      <v-text-field
        v-model="password"
        :rules="[rules.required, rules.min]"
        :type="show2 ? 'text' : 'password'"
        name="input-10-2"
        label="Contraseña ingresada con éxito"
        hint="Debe tener al menos 8 caracteres"
        value="wqfasds"
        class="input-group--focused secundario--text"
        @click:append="show2 = !show2"
      ></v-text-field>

      <v-text-field
        :rules="[rules.required, rules.min, rules.equals]"
        :type="show2 ? 'text' : 'password'"
        name="input-10-2"
        label="Confirma tu contraseña"
        hint="Reingresa la contraseña"
        value=""
        class="input-group--focused secundario--text"
        @click:append="show2 = !show2"
      ></v-text-field>

      <v-checkbox v-model="checkbox" class="secundario--text">
        <template v-slot:label>
          Estoy de acuerdo con los términos y condiciones
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
  </v-main>
</template>

<style></style>

<script>
export default {
  data() {
    return {
      paises: [
        'Argentina',
        'Bolivia',
        'Chile',
        'Colombia',
        'Perú',
        'Venezuela',
      ],
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
        equals: (v) => v === this.email || 'Los e-mails no coinciden',
        syntax: (v) => /.+@.+\..+/.test(v) || 'E-mail no es valido',
      },
    }
  },
}
</script>
