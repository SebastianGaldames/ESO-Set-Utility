import Personaje from '~/components/personajes/Personaje.vue';
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
                          Para Recuperar contraseña deberás seguir una serie de
                          pasos que se han dispuesto con el fin de dar una mayor
                          seguridad a tus credenciales. Para Acceder a la
                          sección de recuperación de contraseña deberás
                          dirigirte al botón de "Iniciar Sesión" ubicado en la
                          esquina superior derecha de la pantalla.
                          Posteriormente se abrirá un recuadro para el inicio de
                          sesión y más abajo estará el enlace de "¿Olvidaste tu
                          contraseña?", deberás dar click y se desplegará una
                          vista de Recuperación de contraseña, tal como se
                          muestra a continuación:
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
                    <v-row justify="center">
                      <v-col class="pl-10" cols="4">
                        <h4 class="mt-16" style="text-align: justify">
                          En primer lugar deberás validar tu usuario, para ello
                          debes ingresar el nombre de usuario con el que inicias
                          sesión regularmente y presionar en el botón de la
                          derecha "Validar" En el caso de que hayas ingresado tu
                          usuario correctamente se desplegará un mensaje de
                          confirmación de que has ingresado de manera exitosa tu
                          nombre de usuario y se desbloquearán los campos de las
                          tres preguntas secretas que respondiste cuando creaste
                          tu cuenta.
                        </h4>
                      </v-col>
                      <v-col cols="4">
                        <v-img
                          class="mt-15"
                          aspect-ratio="0.9"
                          contain
                          src="https://i.ibb.co/yXbdRtR/passrecovery2.png"
                        ></v-img>
                      </v-col>
                    </v-row>
                    <v-row justify="center">
                      <v-col class="pl-10" cols="4">
                        <h4 class="mt-16" style="text-align: justify">
                          en ellas deberás escribir correctamente tus respuestas
                          secretas (recuerda que puedes cambiarlas cuando lo
                          desees en la sección Cambio de respuestas de seguridad
                          de tu perfil) y presionar el botón que se encuentra
                          bajo la tercera pregunta "Validar información" si has
                          ingresado de manera correcta tus respuestas se
                          desbloqueará la última sección del formulario:
                        </h4>
                      </v-col>
                      <v-col cols="4">
                        <v-img
                          class="mt-15"
                          aspect-ratio="0.9"
                          contain
                          src="https://i.ibb.co/18d3jTw/passrecovery3.png"
                        ></v-img>
                      </v-col>
                    </v-row>
                    <v-row justify="center">
                      <v-col class="pl-10" cols="8">
                        <h4 style="text-align: justify">
                          esta te permitirá ingresar tu contraseña con una
                          extensión mínimo de 8 caracteres de la misma forma que
                          lo hiciste cuando creaste tu usuario, una vez has
                          ingresado la contraseña y confirmado la misma, debes
                          hacer click en el botón de "Cambiar Contraseña" y si
                          este cambio ha sido exitoso se te notificará y te
                          redirigiremos a la sección de Inicio de Sesión.
                        </h4>
                      </v-col>
                    </v-row>
                  </div>
                </v-expansion-panel-content>
              </v-expansion-panel>
              <h2>Mi Cuenta</h2>
              <v-expansion-panel>
                <v-expansion-panel-header>
                  <h2>Cambio de datos</h2></v-expansion-panel-header
                >
                <v-expansion-panel-content>
                  <div class="mt-2 mb-5">
                    <v-row justify="center">
                      <v-col class="pl-10" cols="5">
                        <h4 class="mt-16" style="text-align: justify">
                          Para cambiar alguno de los datos que ingresaste cuando
                          te registraste, debes dirigirte a tu perfil, esto lo
                          harás haciendo click sobre tu nombre de usuario en la
                          esquina superior derecha de la pantalla una vez que
                          iniciaste Sesión, se desplegarán dos opciones:
                          "perfil" y "salir", deberás dar click en perfil, lo
                          que te llevará a la vista que se muestra a la derecha:
                        </h4>
                      </v-col>
                      <v-col cols="5">
                        <v-img
                          class="mt-4"
                          aspect-ratio="2.5"
                          height="100%"
                          width="auto"
                          contain
                          src="https://i.ibb.co/Sm7LXcc/micuenta.png"
                        ></v-img>
                      </v-col>
                    </v-row>
                    <v-row justify="center">
                      <v-col class="pl-10" cols="5">
                        <h4 class="mt-16" style="text-align: justify">
                          Cuando te encuentres en esa vista debes decidir si
                          quieres cambiar los datos de usuario como tal, en cuyo
                          caso deberás seleccionar la opción de "Cambio de
                          datos". A continuación se revelarán los datos que
                          puedes cambiar, lo cual realizarás haciendo click en
                          el cuadrado correspondiente del dato que desees
                          cambiar, es decir, si lo que quieres es cambiar tu
                          mail debes hacer click en el cuadrado junto a él y
                          realizar las modificaciones correspondientes, para
                          guardar los cambios debes hacer click sobre el botón
                          de "Guardar Cambios". Se te notificará que los cambios
                          han sido guardados y podrás visualizarlo en el
                          recuadro de datos de usuario que se mostró
                          anteriormente.
                        </h4>
                      </v-col>
                      <v-col cols="5">
                        <v-img
                          class="mt-4"
                          aspect-ratio="1.5"
                          height="100%"
                          width="auto"
                          contain
                          src="https://i.ibb.co/nf1pnpf/micuentacambiogatos.png"
                        ></v-img>
                      </v-col>
                    </v-row>
                  </div>
                </v-expansion-panel-content>
              </v-expansion-panel>
              <v-expansion-panel>
                <v-expansion-panel-header>
                  <h2>
                    Actualización de Respuestas de Seguridad
                  </h2></v-expansion-panel-header
                >
                <v-expansion-panel-content>
                  <div class="mt-2 mb-5">
                    <v-row justify="center">
                      <v-col class="pl-10" cols="5">
                        <h4 class="mt-16" style="text-align: justify">
                          Para cambiar alguno de los datos que ingresaste cuando
                          te registraste, debes dirigirte a tu perfil, esto lo
                          harás haciendo click sobre tu nombre de usuario en la
                          esquina superior derecha de la pantalla una vez que
                          iniciaste Sesión, se desplegarán dos opciones:
                          "perfil" y "salir", deberás dar click en perfil, lo
                          que te llevará a la vista que se muestra a la derecha:
                        </h4>
                      </v-col>
                      <v-col cols="5">
                        <v-img
                          class="mt-4"
                          aspect-ratio="2.5"
                          height="100%"
                          width="auto"
                          contain
                          src="https://i.ibb.co/Sm7LXcc/micuenta.png"
                        ></v-img>
                      </v-col>
                    </v-row>
                    <v-row justify="center">
                      <v-col class="pl-10" cols="5">
                        <h4 class="mt-16" style="text-align: justify">
                          Cuando te encuentres en esa vista debes decidir si
                          quieres cambiar los datos de usuario como tal o
                          cambiar las respuestas de seguridad, en cuyo caso
                          deberás seleccionar la opción de "Actualizar
                          respuestas de seguridad", inmediatamente se revelarán
                          campos de texto con un cuadrado de selección junto a
                          las preguntas de seguridad que contestaste cuando te
                          registraste, para poder modificarlas deberás dar click
                          en el cuadrado junto a la respuesta que quieras
                          modificar, reescribir tu respuesta y click sobre el
                          botón "Guardar Cambios" para que la modificación sea
                          realizada.
                        </h4>
                      </v-col>
                      <v-col cols="5">
                        <v-img
                          class="mt-4"
                          aspect-ratio="2.5"
                          height="100%"
                          width="auto"
                          contain
                          src="https://i.ibb.co/jwKBD4C/micuentarespuestasseguridad.png"
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
              <h2>Personajes</h2>
              <v-expansion-panel>
                <v-expansion-panel-header>
                  <h2>Agregar Personaje</h2></v-expansion-panel-header
                >
                <v-expansion-panel-content>
                  <div class="mt-2 mb-5">
                    <v-row justify="center">
                      <v-col class="pl-10" cols="8">
                        <h4 class="mt-16" style="text-align: justify">
                          Para agregar un personaje debes dirigirte a la sección
                          de personajes desde el ícono de tu usuario y
                          seleccionar la vista de "personajes", cuando estes ahí
                          te encontrarás con esta sección:
                        </h4>
                        <v-img
                          class="mt-6"
                          aspect-ratio="17"
                          contain
                          src="https://i.ibb.co/f47JfZL/agregar-personaje.png"
                        ></v-img>
                        <h4 class="mt-16" style="text-align: justify">
                          En ella deberás seleccionar la opción de "agregar
                          personaje" y se desplegará una vista como la que se
                          muestra a continuación:
                        </h4>
                        <v-img
                          class="mt-6"
                          aspect-ratio="3"
                          contain
                          src="https://i.ibb.co/QkZNWp8/agregar-personaje1.png"
                        ></v-img>
                        <h4 class="mt-16" style="text-align: justify">
                          Deberás rellenar al menos el campo del nombre del
                          personaje, el cual es obligatorio y con al menos dos
                          caracteres para su nombre, tal como se muestra a
                          continuación:
                        </h4>
                        <v-img
                          class="mt-6"
                          aspect-ratio="3"
                          contain
                          src="https://i.ibb.co/B45cRtL/agregar-personaje2.png"
                        ></v-img>

                        <h4 class="mt-16" style="text-align: justify">
                          El campo de descripción es opcional, por lo que no es
                          necesario que lo rellenes, una vez has escrito lo
                          necesario debes dar click en "agregar Personaje" y una
                          notificación te avisará si es que se ha creado
                          correctamente.
                        </h4>
                      </v-col>
                    </v-row>
                  </div>
                </v-expansion-panel-content>
              </v-expansion-panel>
              <v-expansion-panel>
                <v-expansion-panel-header>
                  <h2>Seleccinar Personaje</h2></v-expansion-panel-header
                >
                <v-expansion-panel-content>
                  <div class="mt-2 mb-5">
                    <v-row justify="center">
                      <v-col class="pl-10" cols="8">
                        <h4 class="mt-16" style="text-align: justify">
                          Para seleccionar un personaje de los que ya has
                          creado, debes dirigirte a la sección de personajes
                          desde el ícono de tu usuario y seleccionar la vista de
                          "personajes", cuando estes ahí te encontrarás con esta
                          sección:
                        </h4>
                        <v-img
                          class="mt-6"
                          aspect-ratio="17"
                          contain
                          src="https://i.ibb.co/f47JfZL/agregar-personaje.png"
                        ></v-img>
                        <h4 class="mt-16" style="text-align: justify">
                          En ella deberás seleccionar la opción ubicada a la
                          izquierda de "Agregar personaje" y se desplegarán las
                          opciones con los personajes que ya has creado, como se
                          muestra en el ejemplo:
                        </h4>
                        <v-img
                          class="mt-6"
                          aspect-ratio="5"
                          contain
                          src="https://i.ibb.co/4MLdbRr/agregar-personaje3.png"
                        ></v-img>
                        <h4 class="mt-16" style="text-align: justify">
                          Una vez haz seleccionado el nombre del personaje se
                          mostrará la tabla de items y la vista de como está
                          armado actualmente.
                        </h4>
                      </v-col>
                    </v-row>
                  </div>
                </v-expansion-panel-content>
              </v-expansion-panel>
              <v-expansion-panel>
                <v-expansion-panel-header>
                  <h2>Eliminar Personaje</h2></v-expansion-panel-header
                >
                <v-expansion-panel-content>
                  <div class="mt-2 mb-5">
                    <v-row justify="center">
                      <v-col class="pl-10" cols="8">
                        <h4 class="mt-16" style="text-align: justify">
                          Para eliminar un personaje debes dirigirte a la
                          sección de personajes desde el ícono de tu usuario y
                          seleccionar la vista de "personajes", cuando estes ahí
                          te encontrarás con esta sección:
                        </h4>
                        <v-img
                          class="mt-6"
                          aspect-ratio="17"
                          contain
                          src="https://i.ibb.co/f47JfZL/agregar-personaje.png"
                        ></v-img>
                        <h4 class="mt-16" style="text-align: justify">
                          En ella deberás seleccionar la opción ubicada a la
                          izquierda de "Agregar personaje" y se desplegarán las
                          opciones con los personajes que ya has creado, como se
                          muestra en el ejemplo:
                        </h4>
                        <v-img
                          class="mt-6"
                          aspect-ratio="5"
                          contain
                          src="https://i.ibb.co/4MLdbRr/agregar-personaje3.png"
                        ></v-img>
                        <h4 class="mt-16" style="text-align: justify">
                          Luego de ello debes seleccionar cual es el personaje
                          que deseas eliminar, dar click y a continuación
                          seleccionar la opción de "Eliminar personaje", se
                          desplegará una vista como la que se muestra a
                          continuación:
                        </h4>
                        <v-img
                          class="mt-6"
                          aspect-ratio="7"
                          contain
                          src="https://i.ibb.co/ZM0PCqS/agregar-personaje24.png"
                        ></v-img>
                        <h4 class="mt-16" style="text-align: justify">
                          Si estás seguro de eliminar el personaje debes dar
                          click en eliminar y tu personaje se eliminará.
                        </h4>
                      </v-col>
                    </v-row>
                  </div>
                </v-expansion-panel-content>
              </v-expansion-panel>
              <v-expansion-panel>
                <v-expansion-panel-header>
                  <h2>Sección Items</h2></v-expansion-panel-header
                >
                <v-expansion-panel-content>
                  <div class="mt-2 mb-5">
                    <v-row justify="center">
                      <v-col class="pl-10" cols="8">
                        <h4 class="mt-16" style="text-align: justify">
                          En esta sección podrás buscar, filtrar y seleccionar
                          items, tanto para agregar a tu inventario, como para
                          equipar al personaje ubicado a la derecha de la
                          pantalla:
                        </h4>
                        <v-img
                          class="mt-6"
                          aspect-ratio="2"
                          contain
                          src="https://i.ibb.co/mD9YW53/agregar-personaje4.png"
                        ></v-img>
                      </v-col>
                    </v-row>
                    <v-row justify="center">
                      <v-col class="pl-10" cols="4">
                        <h4 class="mt-16" style="text-align: justify">
                          Para realizar la búsqueda de items tienes la lista de
                          Set ubicada a la izquierda de tu pantalla, debes
                          ingresar el nombre en el sector buscar set y se irán
                          mostrando las coincidencias de lo escrito o
                          simplemente buscarlo deslizándote con la flecha hasta
                          encontrar el set que buscas, como se muestra a
                          continuación:
                        </h4>
                      </v-col>
                      <v-col cols="4">
                        <v-img
                          class="mt-6"
                          aspect-ratio="1"
                          contain
                          src="https://i.ibb.co/Sxrq6kg/agregar-personaje5.png"
                        ></v-img>
                      </v-col>
                      <v-col class="pl-10" cols="8">
                        <h4 class="mt-7" style="text-align: justify">
                          Una vez has seleccionado el set, puedes filtrar los
                          items que te aparecen y que pertenecen al set
                          seleccionado, esto lo puedes realizar de 2 maneras; la
                          primera a través de una búsqueda de items similar a
                          como se realizó la búsqueda de sets, que consiste en
                          escribir el nombre del item deseado o parte de él y se
                          te mostrarán las coincidencias, como el ejemplo a
                          continuación:
                        </h4>
                        <v-img
                          class="mt-6"
                          aspect-ratio="2"
                          contain
                          src="https://i.ibb.co/Sn0JywR/agregar-personaje6.png"
                        ></v-img>
                      </v-col>
                      <v-col class="pl-10" cols="8">
                        <h4 class="mt-10" style="text-align: justify">
                          EL segundo método es a través de la selección de
                          categoría del item que desees encontrar, para ello en
                          la barra del lado de buscar items, puedes tanto
                          escribir el nombre de la categoría del item deseado,
                          como dar click en las opciones disponibles e
                          identificar aquel que deseas seleccionar:
                        </h4>

                        <v-img
                          class="mt-6"
                          aspect-ratio="2"
                          contain
                          src="https://i.ibb.co/9GYwkpz/agregar-personaje7.png"
                        ></v-img>
                      </v-col>
                      <v-col class="pl-10" cols="8">
                        <h4 style="text-align: justify">
                          Una última opción es directamente seleccionar el set
                          del item que deseas encontrar y una vez se ha
                          realizado el filtro, buscar en el recuadro de la
                          derecha el item de tu preferencia.
                        </h4>
                      </v-col>
                    </v-row>
                  </div>
                </v-expansion-panel-content>
              </v-expansion-panel>
              <v-expansion-panel>
                <v-expansion-panel-header>
                  <h2>Agregar Item a inventario</h2></v-expansion-panel-header
                >
                <v-expansion-panel-content>
                  <div class="mt-2 mb-5">
                    <v-row justify="center">
                      <v-col class="pl-10" cols="8">
                        <h4 class="mt-16" style="text-align: justify">
                          Para agregar un item a tu inventario en primer lugar
                          debes realizar la búsqueda del item deseado, puedes
                          encontrar el procedimiento en el punto anterior de
                          "Búsqueda de Item", una vez lo has encontrado y
                          seleccionado, deberás dar click en la opción "Agregar
                          a Inventario" ubicado justo debajo de la búsqueda de
                          Item y este se agregará a la sección de inventario tal
                          como se muestra en la imagen a continuación:
                        </h4>
                        <v-img
                          class="mt-6"
                          aspect-ratio="2"
                          contain
                          src="https://i.ibb.co/Wpz4Vtb/agregar-personaje8.png"
                        ></v-img>
                      </v-col>
                    </v-row>
                  </div>
                </v-expansion-panel-content>
              </v-expansion-panel>
              <v-expansion-panel>
                <v-expansion-panel-header>
                  <h2>Sección Personaje</h2></v-expansion-panel-header
                >
                <v-expansion-panel-content>
                  <div class="mt-2 mb-5">
                    <v-row justify="center">
                      <v-col class="pl-10" cols="8">
                        <h4 class="mt-16" style="text-align: justify">
                          A continuación se muestra la sección del equipamiento
                          del personaje, esta sección se activa una vez que el
                          usuario ha creado y seleccionado a un personaje. En
                          esta seción se podrán agregar y eliminar, tanto items,
                          como glifos y traits, se encuentra en cada espacio
                          designado para items, armas o joyas, un recuadro para
                          cada uno de las tres secciones a agregar. Es
                          importante mencionar que una vez se hayan realizado
                          los cambios, debe dar click en el botón de "Save" para
                          guardar los cambios realizados, ya que de lo contrario
                          no se guardarán las modificaciones.
                        </h4>
                        <v-img
                          class="mt-6"
                          aspect-ratio="3"
                          contain
                          src="https://i.ibb.co/0fRNWsZ/agregar-personaje9.png"
                        ></v-img>
                      </v-col>
                      <v-col class="pl-10" cols="8">
                        <h4 class="mt-16" style="text-align: justify">
                          De esta manera, una vez que se vayan agregando items,
                          glifos y traits a cada sección la vista del
                          equipamiento de personaje irá modificandose de la
                          siguiente manera:
                        </h4>
                        <v-img
                          class="mt-6"
                          aspect-ratio="3"
                          contain
                          src="https://i.ibb.co/fq3Vdx8/agregar-personaje22.png"
                        ></v-img>
                      </v-col>
                    </v-row>
                  </div>
                </v-expansion-panel-content>
              </v-expansion-panel>
              <v-expansion-panel>
                <v-expansion-panel-header>
                  <h2>Equipar Item a Personaje</h2></v-expansion-panel-header
                >
                <v-expansion-panel-content>
                  <div class="mt-2 mb-5">
                    <v-row justify="center">
                      <v-col class="pl-10" cols="8">
                        <h4 class="mt-16" style="text-align: justify">
                          Para equipar un item en primer lugar debes realizar la
                          búsqueda del item deseado, puedes encontrar el
                          procedimiento en el punto anterior de "Búsqueda de
                          Item", una vez lo has encontrado y seleccionado, se
                          desbloqueara un botón con un signo "+" en la sección
                          de personaje ubicado a la derecha de la pantalla,
                          según donde pertenezca el item seleccionado.
                        </h4>
                        <v-img
                          class="mt-6"
                          aspect-ratio="2"
                          contain
                          src="https://i.ibb.co/ZLh3bN7/agregar-personaje10.png"
                        ></v-img>
                      </v-col>
                      <v-col class="pl-10" cols="8">
                        <h4 style="text-align: justify">
                          Por ejemplo si el item fuera un casco, se habilitará
                          la sección de casco para agregar en la vista del
                          personaje.
                        </h4>
                        <v-img
                          class="mt-6"
                          aspect-ratio="2"
                          contain
                          src="https://i.ibb.co/0JvB4P6/agregar-personaje11.png"
                        ></v-img>
                      </v-col>
                      <v-col class="pl-10" cols="8">
                        <h4 style="text-align: justify">
                          Así una vez se presiona el botón con el signo "+", el
                          item se verá agregado.
                        </h4>
                        <v-img
                          class="mt-6"
                          aspect-ratio="2"
                          contain
                          src="https://i.ibb.co/51RhXN9/agregar-personaje12.png"
                        ></v-img>
                      </v-col>
                      <v-col class="pl-10" cols="8">
                        <h4 style="text-align: justify">
                          Recordar presionar en "Save" para guardar los cambios.
                        </h4>
                      </v-col>
                    </v-row>
                  </div>
                </v-expansion-panel-content>
              </v-expansion-panel>
              <v-expansion-panel>
                <v-expansion-panel-header>
                  <h2>Eliminar Item de Personaje</h2></v-expansion-panel-header
                >
                <v-expansion-panel-content>
                  <div class="mt-2 mb-5">
                    <v-row justify="center">
                      <v-col class="pl-10" cols="8">
                        <h4 class="mt-16" style="text-align: justify">
                          Para eliminar items del equipamiento del personaje, el
                          usuario deberá hacer click en el switch ubicado en la
                          esquina superior izquierda de la vista del
                          equipamiento del personaje, así se modificará la vista
                          para eliminar los items que el usuario desee, como se
                          muestra a continuación:
                        </h4>
                        <v-img
                          class="mt-6"
                          aspect-ratio="3"
                          contain
                          src="https://i.ibb.co/DWKSw18/agregar-personaje23.png"
                        ></v-img>
                      </v-col>

                      <h4 style="text-align: justify">
                        Así dependiendo de la sección en la que se encuentre, el
                        usuario podrá eliminar items, trais o glifos.
                      </h4>
                    </v-row>
                  </div>
                </v-expansion-panel-content>
              </v-expansion-panel>
              <v-expansion-panel>
                <v-expansion-panel-header>
                  <h2>Sección Glifos</h2></v-expansion-panel-header
                >
                <v-expansion-panel-content>
                  <div class="mt-2 mb-5">
                    <v-row justify="center">
                      <v-col class="pl-10" cols="8">
                        <h4 class="mt-16" style="text-align: justify">
                          La sección de glifos actúa de manera similar a la
                          sección de equipar item a personaje, en esta sección
                          se muestran los glifos con su especificación de armor
                          (para set), Jewelry (para joyas) y weapon (para arma).
                          En primer lugar se deben seleccionar las categorías de
                          potencia y calidad que el usuario desea que su glifo
                          tenga:
                        </h4>
                        <v-img
                          class="mt-6"
                          aspect-ratio="1.7"
                          contain
                          src="https://i.ibb.co/3TjYZrC/agregar-personaje13.png"
                        ></v-img>
                      </v-col>
                      <v-col class="pl-10" cols="8">
                        <h4 class="mt-16" style="text-align: justify">
                          Supongamos que en primer lugar comienza con la sección
                          de Potencia: Para ello debe seleccionar la opción
                          Potencia ubicada en la esquina superior izquierda del
                          recuadro, como se muestra a continuación
                        </h4>
                        <v-img
                          class="mt-6"
                          aspect-ratio="1.7"
                          contain
                          src="https://i.ibb.co/pbmvQyD/agregar-personaje14.png"
                        ></v-img>
                      </v-col>
                      <v-col class="pl-10" cols="8">
                        <h4 class="mt-16" style="text-align: justify">
                          Una vez ha seleccionado que tipo de potencia necesita,
                          los glifos cambiarán de acuerdo al nivel seleccionado.
                          de manera similar funcionará la categoría de calidad:
                        </h4>
                        <v-img
                          class="mt-6"
                          aspect-ratio="1.7"
                          contain
                          src="https://i.ibb.co/Dtpcbc5/agregar-personaje15.png"
                        ></v-img>
                      </v-col>
                    </v-row>
                  </div>
                </v-expansion-panel-content>
              </v-expansion-panel>
              <v-expansion-panel>
                <v-expansion-panel-header>
                  <h2>Agregar Glifo a Personaje</h2></v-expansion-panel-header
                >
                <v-expansion-panel-content>
                  <div class="mt-2 mb-5">
                    <v-row justify="center">
                      <v-col class="pl-10" cols="8">
                        <h4 class="mt-16" style="text-align: justify">
                          Para agregar un glifo a un personaje es importante
                          tener en cuenta que en primer lugar debe haberse
                          equipado el item correspondiente, de lo contrario al
                          seleccionar el glifo no existirá la opción de
                          equiparlo. Entonces si se ha equipado un casco, solo
                          estarán disponibles para añadir los glifos de armor, a
                          continuación se muestra un ejemplo:
                        </h4>
                        <v-img
                          aspect-ratio="2"
                          contain
                          src="https://i.ibb.co/CVTdz36/agregar-personaje16.png"
                        ></v-img>
                      </v-col>
                      <v-col class="pl-10" cols="8">
                        <h4 style="text-align: justify">
                          De manera similar será para joyas:
                        </h4>
                        <v-img
                          aspect-ratio="2"
                          contain
                          src="https://i.ibb.co/jGSghVv/agregar-personaje17.png"
                        ></v-img>
                      </v-col>
                      <v-col class="pl-10" cols="8">
                        <h4 style="text-align: justify">Y para armas:</h4>
                        <v-img
                          aspect-ratio="2"
                          contain
                          src="https://i.ibb.co/PQ5t63S/agregar-personaje18.png"
                        ></v-img>
                      </v-col>
                    </v-row>
                  </div>
                </v-expansion-panel-content>
              </v-expansion-panel>
              <v-expansion-panel>
                <v-expansion-panel-header>
                  <h2>Sección Traits</h2></v-expansion-panel-header
                >
                <v-expansion-panel-content>
                  <div class="mt-2 mb-5">
                    <v-row justify="center">
                      <v-col class="pl-10" cols="8">
                        <h4 class="mt-16" style="text-align: justify">
                          La sección de traits actúa de manera similar a la
                          sección de equipar item a personaje, en esta sección
                          se muestran los traits con su especificación de armor
                          (para set), Jewelry (para joyas) y weapon (para arma).
                        </h4>
                        <v-img
                          class="mt-6"
                          aspect-ratio="2"
                          contain
                          src="https://i.ibb.co/5R84d6L/agregar-personaje19.png"
                        ></v-img>
                      </v-col>
                      <v-col class="pl-10" cols="8">
                        <h4 class="mt-16" style="text-align: justify">
                          En primer lugar se debe seleccionar la categoría de
                          calidad que el usuario desea que su trait tenga, para
                          ello debe seleccionar la opción Calidad ubicada en la
                          esquina superior izquierda del recuadro, como se
                          muestra a continuación:
                        </h4>
                        <v-img
                          class="mt-6"
                          aspect-ratio="2"
                          contain
                          src="https://i.ibb.co/DQSp8kt/agregar-personaje20.png"
                        ></v-img>
                      </v-col>
                      <v-col class="pl-10" cols="8">
                        <h4 style="text-align: justify">
                          Una vez ha seleccionado que tipo de calidad necesita,
                          los traits cambiarán de acuerdo al nivel seleccionado.
                        </h4>
                      </v-col>
                    </v-row>
                  </div>
                </v-expansion-panel-content>
              </v-expansion-panel>
              <v-expansion-panel>
                <v-expansion-panel-header>
                  <h2>Agregar trait a Personaje</h2></v-expansion-panel-header
                >
                <v-expansion-panel-content>
                  <div class="mt-2 mb-5">
                    <v-row justify="center">
                      <v-col class="pl-10" cols="8">
                        <h4 class="mt-16" style="text-align: justify">
                          Para agregar un trait a un personaje es importante
                          tener en cuenta que en primer lugar debe haberse
                          equipado el item correspondiente, de lo contrario al
                          seleccionar el trait no existirá la opción de
                          equiparlo. Así si se ha equipado un casco, solo se
                          habilitará la opción para agregar los traits de armor,
                          a continuación se muestra un ejemplo:
                        </h4>
                        <v-img
                          class="mt-6"
                          aspect-ratio="2.5"
                          contain
                          src="https://i.ibb.co/bPNkJ1m/agregar-personaje21.png"
                        ></v-img>
                      </v-col>
                      <v-col class="pl-10" cols="8">
                        <h4 style="text-align: justify">
                          De manera similar funciona para joyas y armas.
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
