"use client";
import { getAllCharacters } from "@/utils/api";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Characters() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const charactersData = await getAllCharacters();
      setCharacters(charactersData);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>Listado de Personajes</h1>
      <ul>
        {characters.map((character) => {
          const arrayId = character.url.split("/");
          const idChracter = arrayId[arrayId.length - 2];
          return (
            <div key={character.idChracter}>
              <Link href={`/characters/${idChracter}`}>{character.name}</Link>
              <li>Nombre: {character.name}</li>
              {character.eye_color && character.eye_color !== "n/a" && (
                <li>Color de ojos: {character.eye_color}</li>
              )}
              {character.gender && character.gender !== "n/a" && (
                <li>Género: {character.gender}</li>
              )}
            </div>
          );
        })}
      </ul>
    </div>
  );
}
