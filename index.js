import express from "express";
import axios from "axios";

const app = express();
const PORT = 3000;

// Función asincrónica para obtener la lista de todos los pokémones antes tuve dramas por la paginacion
const obtenerTodosLosPokemon = async () => {
    try {
      const todosLosPokemon = [];
      let nextUrl = 'https://pokeapi.co/api/v2/pokemon';
  
      while (todosLosPokemon.length < 150) {
        const response = await axios.get(nextUrl);
        const results = response.data.results;
        todosLosPokemon.push(...results);
  
        nextUrl = response.data.next;
        if (!nextUrl) break;
      }
  
      return todosLosPokemon.slice(0, 150);
    } catch (error) {
      console.error('Error al obtener la lista de pokémones', error);
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
      console.error('Error al obtener la información del pokémon', error);
      return null;
    }
  };
  
  // Ruta para obtener los 150 pokémones en el formato requerido
  app.get('/pokemones', async (req, res) => {
    try {
      const listaPokemon = await obtenerTodosLosPokemon();
      const urlsDetalles = listaPokemon.map((pokemon) => pokemon.url);
      const detallesPokemon = await Promise.all(urlsDetalles.map(obtenerInfoPokemon));
      const pokemonesFormateados = detallesPokemon.filter((pokemon) => pokemon !== null);
  
      res.json(pokemonesFormateados);
    } catch (error) {
      console.error('Error al obtener los pokémones', error);
      res.status(500).json({ error: 'Error al obtener los pokémones' });
    }
  });
  
 
  app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
  });