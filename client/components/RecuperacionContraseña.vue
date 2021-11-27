<template>
  <v-form ref="form" v-model="reglas">
    <v-card
      class="mx-auto pa-4 ma-10"
      max-width="500"
      style="border: 2px solid #a68f7b"
    >
      <v-col cols="12">
        <v-card-title primary-title class="justify-center pb-8">
          Recuperar Contraseña
        </v-card-title>
        <div>
          <v-flex text-center>
            <v-row>
              <v-col
                ><v-text-field
                  v-model="character.characterName"
                  clearable
                  color="acentuado1"
                  label="Nombre de Usuario"
                  :rules="[rules.required, rules.longMin]"
                  hide-details="auto"
                ></v-text-field>
              </v-col>
              <v-col>
                <v-btn outlined @click="userValidation">Validar</v-btn>
              </v-col>
            </v-row>
          </v-flex>
          <v-select
            v-model="character.securityQuestion1"
            :items="securityQuestionList"
            label="Selecciona la Pregunta Secreta"
            :rules="[rules.required]"
          ></v-select>
          <v-text-field
            v-model="character.securityAnswer1"
            clearable
            color="acentuado1"
            label="Respuesta Secreta"
            :rules="[rules.required, rules.longMax, rules.longMin]"
            hide-details="auto"
          ></v-text-field>
          <v-select
            v-model="character.securityQuestion2"
            :items="securityQuestionList"
            label="Selecciona la Pregunta Secreta"
            :rules="[rules.required]"
          ></v-select>
          <v-text-field
            v-model="character.securityAnswer2"
            clearable
            color="acentuado1"
            label="Respuesta Secreta"
            :rules="[rules.required, rules.longMax, rules.longMin]"
            hide-details="auto"
          ></v-text-field>
          <v-select
            v-model="character.securityQuestion3"
            :items="securityQuestionList"
            label="Selecciona la Pregunta Secreta"
            :rules="[rules.required]"
          ></v-select>
          <v-text-field
            v-model="character.securityAnswer3"
            clearable
            color="acentuado1"
            label="Respuesta Secreta"
            :rules="[rules.required, rules.longMax, rules.longMin]"
            hide-details="auto"
          ></v-text-field>
          <v-card-actions class="px-5 pb-4">
            <v-flex text-center>
              <v-btn
                color="acentuado2"
                class="mx-10"
                :disabled="!valid"
                @click="addCharacter"
                >Validar Información</v-btn
              >
              <v-text-field
                v-model="character.newPassword"
                :type="show2 ? 'text' : 'password'"
                clearable
                color="acentuado1"
                label="Ingresa la nueva contraseña"
                :rules="[rules.required, rules.minPass]"
                hide-details="auto"
              ></v-text-field>

              <v-btn outlined blame @click="closeDialogEvent"
                >Cambiar Contraseña</v-btn
              >
            </v-flex>
          </v-card-actions>
        </div>
      </v-col>
    </v-card>
  </v-form>
</template>
<script>
export default {
  data: () => ({
    select: null,
    securityQuestionList: [
      '¿Cuál es el nombre de tu ciudad favorita?',
      '¿Cuál es el apellido de tu madre?',
      '¿Cuál es el nombre de tu mascota favorita?',
      '¿Cuál es el nombre de tu primera escuela?',
    ],
    rules: {
      required: (value) => !!value || 'Campo obligatorio',
      longMax: (value) =>
        (value && value.length <= 10) || 'Debe tener máximo 10 caracteres',
      longMin: (value) => (value && value.length >= 2) || 'Min 2 caracteres',
      minPass: (value) =>
        (value && value.length >= 8) || 'Debe tener al menos 8 caracteres',
    },
    character: {
      characterName: '',
      securityQuestion1: '',
      securityAnswer1: '',
      securityQuestion2: '',
      securityAnswer2: '',
      securityQuestion3: '',
      securityAnswer3: '',
      newPassword: '',
    },
  }),
}
</script>
