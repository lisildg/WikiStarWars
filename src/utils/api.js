const BASE_URL = 'https://swapi.dev/api';

const handleResponse = async (response) => {
  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }
  return await response.json();
};

export const getAllCharacters = async () => {
  try {
    let allCharacters = [];
    let nextUrl = `${BASE_URL}/people/`;
    
    while (nextUrl) {
      const response = await fetch(nextUrl);
      const data = await handleResponse(response);

      allCharacters = [...allCharacters, ...data.results];

      
      nextUrl = data.next;
    }

    return allCharacters;
  } catch (error) {
    console.error('Error al obtener los personajes:', error);
    return []; 
  }
};


export const getCharacterById = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/people/${id}/`);
    const data = await handleResponse(response);
    return data; 
  } catch (error) {
    console.error('Error al obtener el personaje:', error);
    return null; 
  }
};


export const getAllFilms = async () => {
  try {
    const response = await fetch(`${BASE_URL}/films/`);
    const data = await handleResponse(response);
    return data.results; 
  } catch (error) {
    console.error('Error al obtener las películas:', error);
    return []; 
  }
};

export const getFilmById = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/films/${id}/`);
    const data = await handleResponse(response);

    const characters = await Promise.all(data.characters.map(url => fetch(url).then(response => response.json())));

    data.characters = characters;

    return data; 
  } catch (error) {
    console.error('Error al obtener la película:', error);
    return null; 
  }
};
