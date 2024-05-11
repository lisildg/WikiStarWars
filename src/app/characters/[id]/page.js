"use client";
import { getCharacterById } from "@/utils/api";
import { useState, useEffect } from "react";

export default function CharacterDetail({ params }) {
  const { id } = params;
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const characterData = await getCharacterById(id);
      setCharacter(characterData);
    };
    fetchData();
  }, []);

  if (!character) {
    return <div>Cargando...</div>;
  }

  return (
    <div className="flex justify-center">
      <h1>Detalle del Personaje: {character.name}</h1>
      <ul>
        <li>Nombre: {character.name}</li>
        {character.eye_color && character.eye_color !== "n/a" && (
          <li>Color de ojos: {character.eye_color}</li>
        )}
        {character.gender && character.gender !== "n/a" && (
          <li>Género: {character.gender}</li>
        )}
      </ul>
    </div>
  );
}
