<template>
  <v-item-group>
    <v-container>
      <v-row align="center" class="text-left">
        <v-card elevation="0">Perfil: {{ cuenta.usuario }}</v-card>
      </v-row>
      <v-row align="center" class="text-right">
        <v-card elevation="0" width="215">Usuario :</v-card>
        <v-text-field v-model="cuenta.usuario" label=" " />
      </v-row>
      <v-row align="center" class="text-right">
        <v-card elevation="0" width="215">Pais :</v-card>
        <v-text-field v-model="cuenta.pais" label="" />
      </v-row>
      <v-row align="center" class="text-right">
        <v-card elevation="0" width="215">Sexo :</v-card>
        <v-text-field v-model="cuenta.sexo" label="" />
      </v-row>
      <v-row align="center" class="text-right">
        <v-card elevation="0" width="215">Correo :</v-card>
        <v-text-field v-model="cuenta.correo" label="" />
      </v-row>
      <v-row align="center" class="text-right">
        <v-card elevation="0" width="215">Contraseña actual :</v-card>
        <v-text-field v-model="cuenta.pass" label="" />
      </v-row>
      <v-row align="center" class="text-right">
        <v-card elevation="0" width="215">Nueva contraseña :</v-card>
        <v-text-field v-model="cuenta.nuevaPass" label="" />
      </v-row>
      <v-row align="center" class="text-right">
        <v-card elevation="0" width="215">Confirmar nueva contraseña :</v-card>
        <v-text-field label="" />
      </v-row>
      <v-row align="center" class="text-right" justify="end">
        <v-btn left:fixed @click="guardarCambios()">Guardar cambios</v-btn>
      </v-row>
    </v-container>
  </v-item-group>
</template>

<script>
export default {
  async asyncData({ route, $http }) {
    try {
      const userparam = route.query.user
      const userLogued = await $http.$get('/users' + userparam)
      return {
        usuario: userLogued,
      }
    } catch {}
  },
  data() {
    return {
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
