<template>
  <div class="vig">
    <div dark>
      <v-item-group class="contenedor primario">
        <v-container>
          <v-row align="center" class="pt-2 ml-2 text-left">
            <v-card elevation="0" class="primario secundario--text"
              >Perfil: {{ cuenta.usuario }}</v-card
            >
          </v-row>
          <v-row align="center" class="text-right">
            <v-card
              elevation="0"
              height="50"
              width="215"
              class="primario secundario--text"
              >Usuario :</v-card
            >
            <v-text-field
              v-model="cuenta.usuario"
              label=" "
              :rules="[rules.required]"
              outlined
              dense
              dark
            ></v-text-field>
          </v-row>
          <v-row align="center" class="text-right">
            <v-card
              elevation="0"
              height="50"
              width="215"
              class="primario secundario--text"
              >Pais :</v-card
            >
            <v-text-field v-model="cuenta.pais" label="" dark outlined dense />
          </v-row>
          <v-row align="center" class="text-right">
            <v-card
              elevation="1"
              height="50"
              width="215"
              class="primario secundario--text"
              >Sexo :</v-card
            >
            <v-text-field v-model="cuenta.sexo" label="" dark outlined dense />
          </v-row>
          <v-row align="center" class="text-right">
            <v-card
              elevation="0"
              height="50"
              width="215"
              class="primario secundario--text"
              >Correo :</v-card
            >
            <v-text-field
              v-model="cuenta.correo"
              label=""
              dark
              outlined
              dense
            />
          </v-row>
          <v-row align="center" class="text-right">
            <v-card
              elevation="0"
              height="50"
              width="215"
              class="primario secundario--text"
              >Contraseña actual :</v-card
            >
            <v-text-field v-model="cuenta.pass" label="" dark outlined dense />
          </v-row>
          <v-row align="center" class="text-right">
            <v-card
              elevation="0"
              height="50"
              width="215"
              class="primario secundario--text"
              >Nueva contraseña :</v-card
            >
            <v-text-field
              v-model="cuenta.nuevaPass"
              label=""
              dark
              outlined
              dense
            />
          </v-row>
          <v-row align="center" class="text-right">
            <v-card
              elevation="0"
              height="50"
              width="215"
              class="primario secundario--text"
              >Confirmar nueva contraseña :</v-card
            >
            <v-text-field label="" dark outlined dense />
          </v-row>
          <v-row align="center" class="pb-2 text-right" justify="end">
            <v-btn
              left:fixed
              class="btnSave acentuado3 texto1--text"
              @click="guardarCambios()"
              >Guardar cambios</v-btn
            >
          </v-row>
        </v-container>
      </v-item-group>
    </div>
    <v-snackbar v-model="snackbar" timeout="3000" top>
      <span>¡Cambios guardados con éxito!</span>
      <v-btn @click="snackbar = false">Cerrar</v-btn>
    </v-snackbar>
  </div>
</template>

<style>
.vig {
  border-width: 2px;
  border-style: solid;
  border-color: #a68f7b;
}
</style>
<script>
export default {
  async asyncData({ route, $http }) {
    try {
      const userparam = route.query.user
      const userLogued = await $http.$get('/Usuarios' + userparam)
      return {
        usuario: userLogued,
      }
    } catch {}
  },
  data() {
    return {
      rules: {
        required: (value) => !!value || 'Requerido.',
      },
      cuenta: {
        usuario: '',
        pais: '',
        sexo: '',
        correo: '',
        pass: '',
        newPass: '',
      },
      snackbar: false,
    }
  },
  methods: {
    guardarCambios() {
      const nuevaInfo = {
        usuario: this.cuenta.usuario,
        pais: this.cuenta.pais,
        sexo: this.cuenta.sexo,
        correo: this.cuenta.correo,
        contraseña: this.cuenta.newPass,
      }
      console.log(nuevaInfo.usuario)
      this.snackbar = true
      /* const response = await this.$axios('/server/users/changeInfo', {
        method: 'post',
        data: nuevaInfo,
      })
      console.log(response) */
    },
  },
}
</script>
