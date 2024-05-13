"use client";
import { getCharacterById } from "@/utils/api";
import { useState, useEffect } from "react";
import Loader from "@/components/Loader";
import Image from "next/image";

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
    return (
      <div>
        <Loader />
      </div>
    );
  }

  return (
    <div>
      <h1 className="flex justify-center font-bold">
        Detalle del Personaje: {character.name}
      </h1>

      <ul className="w-full sm:w-1/2  lg:w-1/4 xl:w-1/5 py-2 text-accent rounded overflow-hidden shadow-lg">
        <Image src="/imgCharcter.jpg" height={200} width={100} />
        {character.eye_color && character.eye_color !== "n/a" && (
          <li>Color de ojos: {character.eye_color}</li>
        )}
        {character.birth_year && character.birth_year !== "n/a" && (
          <li>Año de cumpleaños: {character.birth_year}</li>
        )}
        {character.hair_color && character.hair_color !== "n/a" && (
          <li>Color de pelo: {character.hair_color}</li>
        )}
        {character.height && character.height !== "n/a" && (
          <li>Altura: {character.height}</li>
        )}
        {character.skin_color && character.skin_color !== "n/a" && (
          <li>Color de piel: {character.skin_color}</li>
        )}
        {character.mass && character.mass !== "n/a" && (
          <li>Masa: {character.mass}</li>
        )}
        {character.gender && character.gender !== "n/a" && (
          <li>Género: {character.gender}</li>
        )}
      </ul>
    </div>
  );
}
