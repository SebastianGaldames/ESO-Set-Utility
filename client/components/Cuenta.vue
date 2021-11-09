<template>
  <v-item-group class="contenedor primario">
    <v-container>
      <v-row align="center" class="text-left">
        <v-card elevation="0" class="primario secundario--text"
          >Perfil: {{ cuenta.usuario }}</v-card
        >
      </v-row>
      <v-row align="center" class="text-right">
        <v-card elevation="0" width="215" class="primario secundario--text"
          >Usuario :</v-card
        >
        <v-text-field
          v-model="cuenta.usuario"
          label=" "
          class="acentuado2"
          :rules="[rules.required]"
          outlined
          dense
        />
      </v-row>
      <v-row align="center" class="text-right">
        <v-card elevation="0" width="215" class="primario secundario--text"
          >Pais :</v-card
        >
        <v-text-field v-model="cuenta.pais" label="" class="pais acentuado2" />
      </v-row>
      <v-row align="center" class="text-right">
        <v-card elevation="1" width="215" class="primario secundario--text"
          >Sexo :</v-card
        >
        <v-text-field v-model="cuenta.sexo" label="" class="acentuado2" />
      </v-row>
      <v-row align="center" class="text-right">
        <v-card elevation="0" width="215" class="primario secundario--text"
          >Correo :</v-card
        >
        <v-text-field
          v-model="cuenta.correo"
          label=""
          class="email acentuado2"
        />
      </v-row>
      <v-row align="center" class="text-right">
        <v-card elevation="0" width="215" class="primario secundario--text"
          >Contraseña actual :</v-card
        >
        <v-text-field v-model="cuenta.pass" label="" class="pass acentuado2" />
      </v-row>
      <v-row align="center" class="text-right">
        <v-card elevation="0" width="215" class="primario secundario--text"
          >Nueva contraseña :</v-card
        >
        <v-text-field
          v-model="cuenta.nuevaPass"
          label=""
          class="newPass acentuado2"
        />
      </v-row>
      <v-row align="center" class="text-right">
        <v-card elevation="0" width="215" class="primario secundario--text"
          >Confirmar nueva contraseña :</v-card
        >
        <v-text-field label="" class="confNewPass acentuado2" />
      </v-row>
      <v-row align="center" class="text-right" justify="end">
        <v-btn left:fixed class="btnSave acentuado1" @click="guardarCambios()"
          >Guardar cambios</v-btn
        >
      </v-row>
    </v-container>
  </v-item-group>
</template>

<style>
.container {
  background-color: primario;
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
        usuario: 'Pepito',
        pais: '',
        sexo: '',
        correo: '',
        pass: '',
        newPass: '',
      },
    }
  },
  methods: {
    guardarCambios() {
      console.log('xd')
      const nuevaInfo = {
        usuario: this.cuenta.usuario,
        pais: this.cuenta.pais,
        sexo: this.cuenta.sexo,
        correo: this.cuenta.correo,
        contraseña: this.cuenta.newPass,
      }
      console.log(nuevaInfo.usuario)
      /* const response = await this.$axios('/server/users/changeInfo', {
        method: 'post',
        data: nuevaInfo,
      })
      console.log(response) */
    },
  },
}
</script>
