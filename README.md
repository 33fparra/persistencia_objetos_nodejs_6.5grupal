<img src="public/image/perfil.png" align="right" />

# Trabajo Grupal 5 Modulo 6 [![Awesome](https://cdn.jsdelivr.net/gh/sindresorhus/awesome@d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/33fparra/persistencia_objetos_nodejs_6.5grupal)

> Nuestro Trabajo

https://github.com/33fparra/persistencia_objetos_nodejs_6.5grupal

Contents
========

 * [Descripción del Proyecto](#descripción-del-proyecto-memo)
 * [Instrucciones de Instalación](#instrucciones-de-instalación-computer)
 * [Funcionalidades](#funcionalidades-sparkles)
 * [Ayuda para copiar sentencias](#ayuda-para-copiar-sentencias)
 * [Participantes del Grupo](#participantes-del-grupo-busts_in_silhouette)
 
## Descripción del Proyecto :memo:

📝 Implementar la persistencia de objetos en una aplicación web
utilizando archivos de texto plano para resolver un problema
acorde al entorno Node.js
La https://pokeapi.co/ ofrece diferentes endpoints para obtener información de los pokemones, sin
embargo, el endpoint principal devuelve la data con una estructura predeterminada.

Como puede notar solamente nos entrega el nombre y la dirección del subrecurso en donde se encuentra
la data detallada de cada pokémon.
Los creadores de esta API han recibido miles de solicitudes de sus usuarios pidiendo que habiliten un
endpoint que devuelva toda la data de todos los pokemones y han decidido convertir esta solicitud en un
concurso colaborativo, en donde la comunidad de desarrolladores de usuarios de la API, desarrollen la
lógica en el lado del servidor con Node que procese su data de los endpoints que ya disponen y devuelvan
un endpoint final con toda la información correspondiente a los pokemones.
En este desafío el objetivo será usar las herramientas asincrónicas de JavaScript para tomar la data de
diferentes endpoints y unirlas en un mismo arreglo que pueda ser devuelto por un único endpoint como un
JSON.
En el menú de esta sesión encontrarás un Apoyo Desafío que contiene un documento HTML que deberá
ser devuelto como un sitio web estático en una ruta particular, este documento está listo para consumir la
ruta http://localhost:3000/pokemones, exponer el nombre y la imagen de los pokemones como una galería
de 150 pokemones. En la siguiente imagen puedes tener una referencia de cómo se deberá ver la galería.

Hacer uso de Async/Await para las funciones que consulten los endpoints de la pokeapi.
2. Usar el Promise.all() para ejecutar y obtener la data de las funciones asíncronas generando un
nuevo arreglo con la data a entregar en el siguiente requerimiento.
3. Disponibilizar la ruta http://localhost:3000/pokemones que devuelva un JSON con el nombre y la
url de una imagen de 150 pokemones, asi como verás en la siguiente imagen.


## Instrucciones de Instalación :computer:

⚙️ Para instalar las dependencias necesarias, sigue los siguientes pasos:

1. Clona el repositorio en tu máquina local.
2. Abre una terminal y navega hasta la carpeta del proyecto.
3. Ejecuta el siguiente comando para instalar las dependencias:

   npm install

4. Abrir el archivo html ingresando al https://localhost:3000

## Ayuda para copiar sentencias

<details><summary><b>Ver las instrucciones</b></summary>

1. Instalar las dependencias:

   ```sh
   npm install
   ```

2. En el caso de no poder instalar las dependencias:

   ```sh
   npm install --force
   ```

3. Las librerias que estamos ocupando `package.json`:

    ````sh
    ... 
    "name": "helpers",
    "version": "1.0.0",
    "description": "",
    "main": "index.js",
    + "type": "module",
    "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
    },
    "author": "",
    "license": "ISC",
    "dependencies": {
    "express": "^4.18.2",
    + "hbs": "^4.2.0",
    "nodemon": "^3.0.1"
    }
    ````

</details>

</details>

## Funcionalidades :sparkles:

✨ Con nuestra aplicacion puedes:

1. Funcionalidad : Llamar API
2. Funcionalidad : Ver Pokemones

![Foto de grupo](public/image/grupoVerde.jpg)

## Participantes del Grupo :busts_in_silhouette:

1. Cecilia Montero : https://github.com/cmonlop

2. Karla Mieres : https://github.com/karlamieres

3. Zimram Blanco : https://github.com/Zimram

4. Andrea Pilquiman : https://github.com/AndreaPLL

5. Gonzalo Aranda : https://github.com/gonzaloaranda

6. Felipe Andres Parra : https://github.com/33fparra

### Este proyecto está bajo la licencia MIT. Para más información, consulta el archivo LICENSE.


<img src="public/image/logGrupoVerde.png" align="right" />

## Grupo Verde (https://github.com/33fparra/persistencia_objetos_nodejs_6.5grupal)

