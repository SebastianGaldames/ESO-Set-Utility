<template>
  <div class="pa-2 imagenFondo">
    <v-layout height="100%">
      <v-flex xs12 sm11 class="mx-auto pa-4 ma-10">
        <v-card color="rgb(0, 0, 0, 0.8)" style="border: 1px solid #a68f7b">
          <v-card-title primary-title class="justify-center"
            >Preguntas Frecuentes sobre el funcionamiento de la
            página</v-card-title
          >
          <v-card-actions>
            <v-expansion-panels focusable>
              <h2>Acceso de Usuario</h2>
              <v-expansion-panel>
                <v-expansion-panel-header>
                  <h2>Registro</h2></v-expansion-panel-header
                >
                <v-expansion-panel-content>
                  <div class="mt-2 mb-5">
                    <v-row justify="center">
                      <v-col class="pl-10" cols="5">
                        <h4 class="mt-16" style="text-align: justify">
                          Para crear un usuario debes dirigirte al botón de
                          inicio de sesión ubicado en la esquina superior
                          derecha de la pantalla. Posteriormente se abrirá un
                          recuadro para el inicio de sesión y más abajo estará
                          el enlace de registro, deberás dar click y se
                          desplegará una vista con datos que deberás ingresar
                          para crear tu cuenta, debes aceptar los términos y
                          condiciones de uso y finalmente dar click en
                          registrarte.
                        </h4>
                      </v-col>
                      <v-col cols="5">
                        <v-img
                          class="mt-4"
                          aspect-ratio="1"
                          height="100%"
                          width="auto"
                          contain
                          src="https://i.ibb.co/bsBJ3cD/registro.png"
                        ></v-img>
                      </v-col>
                    </v-row>
                  </div>
                </v-expansion-panel-content>
              </v-expansion-panel>
              <v-expansion-panel>
                <v-expansion-panel-header>
                  <h2>Inicio de Sesión</h2>
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                  <div class="mt-2 mb-5">
                    <v-row justify="center">
                      <v-col class="pl-10" cols="5">
                        <h4 class="mt-16" style="text-align: justify">
                          Para iniciar sesión debes dirigirte al botón de inicio
                          de sesión ubicado en la esquina superior derecha de la
                          pantalla. Posteriormente se abrirá un recuadro para el
                          inicio de sesión, en él debes ingresar tus datos de
                          usuario y contraseña y dar click en el botón de
                          "Iniciar Sesión"
                        </h4>
                      </v-col>
                      <v-col cols="5">
                        <v-img
                          class="mt-13"
                          aspect-ratio="2.5"
                          contain
                          src="https://i.ibb.co/rH5yqLd/Login.png"
                        ></v-img>
                      </v-col>
                    </v-row>
                  </div>
                </v-expansion-panel-content>
              </v-expansion-panel>
              <v-expansion-panel>
                <v-expansion-panel-header>
                  <h2>Recuperación de la Contraseña</h2>
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                  <div class="mt-2 mb-5">
                    <v-row justify="center">
                      <v-col class="pl-10" cols="4">
                        <h4 class="mt-16" style="text-align: justify">
                          <!-- https://i.ibb.co/yXbdRtR/passrecovery2.png
src="https://i.ibb.co/18d3jTw/passrecovery3.png"
 barra superior
 barra inferior
 pantalla familia
 
 ejemplo busqueda
 contenido de familia

                          -->
                          Para Recuperar contraseña deberás seguir una serie de
                          pasos que se han dispuesto con el fin de dar una mayor
                          seguridad a tus credenciales. Para Acceder a la
                          sección de recuperación de contraseña deberás
                          dirigirte al botón de "Iniciar Sesión" ubicado en la
                          esquina superior derecha de la pantalla.
                          Posteriormente se abrirá un recuadro para el inicio de
                          sesión y más abajo estará el enlace de "¿Olvidaste tu
                          contraseña?", deberás dar click y se desplegará una
                          vista de Recuperación de contraseña en la que en
                          primer lugar deberás validar tu usuario, para ello
                          debes ingresar el nombre de usuario con el que inicias
                          sesión regularmente y presionar en el botón de la
                          derecha "Validar" En el caso de que hayas ingresado tu
                          usuario correctamente se desplegará un mensaje de
                          confirmación de que has ingresado de manera exitosa tu
                          nombre de usuario y se desbloquearán los campos de las
                          tres preguntas secretas que respondiste cuando creaste
                          tu cuenta, en ellas deberás escribir correctamente tus
                          respuestas secretas (recuerda que puedes cambiarlas
                          cuando lo desees en la sección Cambio de Contraseña de
                          tu perfil) y presionar el botón que se encuentra bajo
                          la tercera pregunta "Validar información" si has
                          ingresado de manera correcta tus respuestas se
                          desbloqueará la última sección del formulario que te
                          permitirá ingresar tu contraseña con una extensión
                          mínimo de 8 caracteres de la misma forma que lo
                          hiciste cuando creaste tu usuario, una vez has
                          ingresado la contraseña y confirmado la misma, debes
                          hacer click en el botón de "Cambiar Contraseña" y si
                          este cambio ha sido exitoso se te notificará y te
                          redirigiremos a la sección de Inicio de Sesión.
                        </h4>
                      </v-col>
                      <v-col cols="4">
                        <v-img
                          class="mt-15"
                          aspect-ratio="0.9"
                          contain
                          src="https://i.ibb.co/WtC61vp/Recuperacion-contrase-a.png"
                        ></v-img>
                      </v-col>
                    </v-row>
                  </div>
                </v-expansion-panel-content>
              </v-expansion-panel>

              <h2>Familias</h2>
              <v-expansion-panel>
                <v-expansion-panel-header>
                  <h2>Sección Familias</h2></v-expansion-panel-header
                >
                <v-expansion-panel-content>
                  <div class="mt-2 mb-5">
                    <v-row justify="center">
                      <v-col class="pl-10" cols="8">
                        <h4 class="mt-16" style="text-align: justify">
                          La sección de Familias se ha creado con el fin de
                          entregar toda la información necesaria sobre los items
                          pertenecientes a cada una de ellas.. si quieres saber
                          los detalles de algún item en específico este es tu
                          lugar. Para acceder a esta sección debes dirigirte a
                          la barra de navegación ubicada en la parte superior
                          derecha de la pantalla y localizar "Familias"
                          <v-img
                            class="mt-4"
                            aspect-ratio="15"
                            contain
                            src="https://i.ibb.co/NYTncYG/navbar.png"
                          ></v-img>
                          Al hacer click se te redirigirá a una vista como la
                          que se muestra a continuación:
                          <v-img
                            aspect-ratio="1"
                            contain
                            src="https://i.ibb.co/KsD5Vgy/familias1.png"
                          ></v-img>

                          En ella se encuentra el listado total de los items
                          utilizables en el juego, clasificados por nombre,
                          ubicacion, tipo y peso, para navegar por esta tabla en
                          la esquina inferior derecha te encontrarás con una
                          barra que muestra cuantos items son mostrados por
                          página, cuantas páginas hay con las coincidencias y
                          las flechas para moverte por cada una, hacia la
                          izquierda o hacia la derecha:

                          <v-img
                            class="mt-6"
                            aspect-ratio="13"
                            contain
                            src="https://i.ibb.co/PjkRmFZ/familias-inferior.png"
                          ></v-img>
                          En ella te encontrarás con una barra de búsqueda desde
                          la cual puedes escribir palabras que coincidan con el
                          nombre, ubicacion, tipo o peso del item que desees
                          revisar:

                          <v-img
                            aspect-ratio="6"
                            contain
                            src="https://i.ibb.co/fGsZmQ9/familia-superior.png"
                          ></v-img>
                          Un ejemplo de esto se muestra a continuación:
                          <v-img
                            class="mt-6"
                            aspect-ratio="2"
                            contain
                            src="https://i.ibb.co/tcxjQYx/Familias5.png"
                          ></v-img>
                          También existe otra manera de ubicar el item que
                          desees revisar, esto se hace utilizando los filtros
                          con opciones que se encuentran bajo la barra de
                          búsqueda, de izquierda a derecha puedes ver los
                          filtros de: Búsqueda:
                          <v-img
                            aspect-ratio="2"
                            contain
                            src="https://i.ibb.co/hWD81cZ/familias2.png"
                          ></v-img>
                          Tipo:
                          <v-img
                            aspect-ratio="2"
                            contain
                            src="https://i.ibb.co/DDNmrnb/familias3.png"
                          ></v-img>

                          Peso:

                          <v-img
                            aspect-ratio="3"
                            contain
                            src="https://i.ibb.co/gJzTy82/Familias4.png"
                          ></v-img>

                          Una vez se han puesto todos los filtros o ya has
                          identificado en pantalla el item del que deseas
                          conocer los detalles, solo debes hacer click sobre el
                          ícono del item y te enviara a la vista con los
                          detalles:
                          <v-img
                            class="mt-6"
                            aspect-ratio="1.7"
                            contain
                            src="https://i.ibb.co/W6j9MQ9/Familias-Contenido.png"
                          ></v-img>
                        </h4>
                      </v-col>
                    </v-row>
                  </div>
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>

<style scoped>
.imagenFondo {
  background-image: url('https://images8.alphacoders.com/497/497515.jpg');
  height: 100%;
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
</style>
