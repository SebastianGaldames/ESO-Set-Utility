<template>
  <v-item-group>
    <div>{{ cuenta.usuario }}</div>
    <v-container>
      <v-row rows="7">
        <v-col>
          <v-card>
            <div>Usuario</div>
            <div>Pais</div>
            <div>Sexo</div>
            <div>Correo</div>
            <div>Contraseña actual</div>
            <div>Nueva contraseña</div>
            <div>Confirmar nueva contraseña</div>
          </v-card>
        </v-col>
        <v-col></v-col>
        <v-col>
          <v-card>
            <v-text-field v-model="cuenta.usuario" label="Usuario" />
            <v-text-field v-model="cuenta.pais" label="Pais" />
            <v-text-field v-model="cuenta.sexo" label="Sexo" />
            <v-text-field v-model="cuenta.correo" label="Correo" />
            <v-text-field v-model="cuenta.pass" label="Contraseña actual" />
            <v-text-field v-model="cuenta.nuevaPass" label="Nueva contraseña" />
            <v-text-field label="Confirmar nueva contraseña" />
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <v-btn @click="guardarCambios()">Guardar cambios</v-btn>
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
