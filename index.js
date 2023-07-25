import express from "express";
import axios from "axios";

const app = express();
const PORT = 3000;

// Función asincrónica para obtener la lista de todos los pokémones antes tuve dramas por la paginacion
const obtenerTodosLosPokemon = async () => {
  try {
    const todosLosPokemon = [];
    let nextUrl = "https://pokeapi.co/api/v2/pokemon";

    while (todosLosPokemon.length < 150) {
      const response = await axios.get(nextUrl);
      const results = response.data.results;
      todosLosPokemon.push(...results);

      nextUrl = response.data.next;
      if (!nextUrl) break;
    }

    return todosLosPokemon.slice(0, 150);
  } catch (error) {
    console.error("Error al obtener la lista de pokémones", error);
    return [];
  }
};

// Función asincrónica para obtener la información detallada de un pokémon
const obtenerInfoPokemon = async (url) => {
  try {
    const response = await axios.get(url);
    const { name } = response.data;
    const img = response.data.sprites.front_default;
    return { img, nombre: name };
  } catch (error) {
    console.error("Error al obtener la información del pokémon", error);
    return null;
  }
};

// Ruta para obtener los 150 pokémones en el formato requerido
app.get("/pokemones", async (req, res) => {
  try {
    const listaPokemon = await obtenerTodosLosPokemon();
    const urlsDetalles = listaPokemon.map((pokemon) => pokemon.url);
    const detallesPokemon = await Promise.all(
      urlsDetalles.map(obtenerInfoPokemon)
    );
    const pokemonesFormateados = detallesPokemon.filter(
      (pokemon) => pokemon !== null
    );

    res.json(pokemonesFormateados);
  } catch (error) {
    console.error("Error al obtener los pokémones", error);
    res.status(500).json({ error: "Error al obtener los pokémones" });
  }
});

//Opción Visual
// Ruta para obtener despliegue tipo galería con los nombres e imágenes de los 150 pokémones
app.get("/galeria", async (req, res) => {
  try {
    // Obtener la lista de todos los pokémones
    const listaPokemon = await obtenerTodosLosPokemon();

    // Obtener la información detallada de cada pokémon en paralelo
    const detallesPokemon = await Promise.all(
      listaPokemon.map((pokemon) => obtenerInfoPokemon(pokemon.url))
    );

    // Generar una galería con el nombre e imagen de cada pokémon
    const galeriaPokemon = detallesPokemon.map((pokemon) => {
      return {
        nombre: pokemon.nombre,
        imagen: pokemon.img,
      };
    });

    // Renderizar la página HTML con la galería de pokémones
    res.send(generarPaginaHTML(galeriaPokemon));
  } catch (error) {
    console.error("Error al obtener la galería de pokémones", error);
    res.status(500).send("Error al obtener la galería de pokémones");
  }
});

// Función para generar la página HTML con la galería de pokémones
const generarPaginaHTML = (galeriaPokemon) => {
  // Dividir la lista de pokémones en grupos de 20
  const columnas = 20;
  const gruposPokemon = [];
  for (let i = 0; i < galeriaPokemon.length; i += columnas) {
    gruposPokemon.push(galeriaPokemon.slice(i, i + columnas));
  }

  // Crear las columnas de la galería
  const columnasHTML = gruposPokemon.map((grupo) => {
    const listaHTML = grupo.map((pokemon) => {
      return `<li>
                <img src="${pokemon.imagen}" alt="${pokemon.nombre}" />
                <p>${pokemon.nombre}</p>
              </li>`;
    });

    return `<ul>${listaHTML.join("")}</ul>`;
  });

  // Unir todas las columnas en una sola cadena
  const columnasCompletaHTML = columnasHTML.join("");

  // Crear el HTML completo con la galería de pokémones en columnas
  const paginaHTML = `
    <!DOCTYPE html>
    <html>
      <head>
        <title>Galería de Pokémones</title>
        <style>
          ul {
            display: inline-block;
            vertical-align: top;
            padding: 10px;
            margin: 0;
            list-style: none; /* Quitar la imagen de punto (viñeta) */
          }
        </style>
      </head>
      <body>
        <h1>Galería de Pokémones</h1>
        ${columnasCompletaHTML}
      </body>
    </html>
  `;

  return paginaHTML;
};

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
