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
    return <div><Loader /></div>;
  }

  return (
    <div>
      <h1 className="flex justify-center font-bold">Detalle del Personaje: {character.name}</h1>
      
      <ul className="w-full sm:w-1/2  lg:w-1/4 xl:w-1/5 py-2 text-accent rounded overflow-hidden shadow-lg">
        <li>Nombre: {character.name}</li>
        {character.eye_color && character.eye_color !== "n/a" && (
          <li>Color de ojos: {character.eye_color}</li>
        )}
        {character.gender && character.gender !== "n/a" && (
          <li>Género: {character.gender}</li>
        )}
      </ul><Image src="/public/imgCharcter.jpg"  height={100} width={50}/>
    </div>
  );
}
