// URL base de la API de Star Wars
const BASE_URL = 'https://swapi.dev/api';

// Función para manejar las respuestas de la API
const handleResponse = async (response) => {
  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }
  return await response.json();
};

// Función para obtener todos los personajes
export const getAllCharacters = async () => {
  try {
    let allCharacters = [];
    let nextUrl = `${BASE_URL}/people/`;
    // Itera sobre todas las páginas para obtener todos los personajes
    while (nextUrl) {
      const response = await fetch(nextUrl);
      const data = await handleResponse(response);

      // Agrega los personajes de la página actual al arreglo de personajes
      allCharacters = [...allCharacters, ...data.results];

      // Actualiza la URL para la siguiente página
      nextUrl = data.next;
    }

    return allCharacters;
  } catch (error) {
    console.error('Error al obtener los personajes:', error);
    return []; // Retorna una lista vacía en caso de error
  }
};

// Función para obtener un personaje por su ID
export const getCharacterById = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/people/${id}/`);
    const data = await handleResponse(response);
    return data; // Retorna el personaje específico
  } catch (error) {
    console.error('Error al obtener el personaje:', error);
    return null; // Retorna null en caso de error
  }
};

// Función para obtener todas las películas
export const getAllFilms = async () => {
  try {
    const response = await fetch(`${BASE_URL}/films/`);
    const data = await handleResponse(response);
    return data.results; // Retorna la lista de películas
  } catch (error) {
    console.error('Error al obtener las películas:', error);
    return []; // Retorna una lista vacía en caso de error
  }
};

// Función para obtener una película por su ID
export const getFilmById = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/films/${id}/`);
    const data = await handleResponse(response);

    // Obtenemos los detalles de los personajes asociados a la película
    const characters = await Promise.all(data.characters.map(url => fetch(url).then(response => response.json())));

    // Agregamos los detalles de los personajes al objeto de la película
    data.characters = characters;

    return data; // Retorna la película específica
  } catch (error) {
    console.error('Error al obtener la película:', error);
    return null; // Retorna null en caso de error
  }
};
