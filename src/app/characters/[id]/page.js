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
    <div className="max-w-screen-md mx-auto flex flex-wrap justify-center items-start">
      <div className="w-full md:w-1/2 lg:w-1/3 px-4 py-4">
      <h1 className="text-center font-bold text-2xl my-4">
        Character Detail: {character.name}
      </h1>
      <div className="rounded-lg overflow-hidden flex justify-center shadow-lg mb-4 shadow-accent">
        <div className="px-4 py-4">
          <div className="mb-4">
            <Image src="/imgCharcter.jpg" height={200} width={100} />
          </div>
          <ul>
            {character.eye_color && character.eye_color !== "n/a" && (
              <li className="mb-2">Eye Color: {character.eye_color}</li>
            )}
            {character.birth_year && character.birth_year !== "n/a" && (
              <li className="mb-2">Birth Year: {character.birth_year}</li>
            )}
            {character.hair_color && character.hair_color !== "n/a" && (
              <li className="mb-2">Hair Color: {character.hair_color}</li>
            )}
            {character.height && character.height !== "n/a" && (
              <li className="mb-2">Height: {character.height}</li>
            )}
            {character.skin_color && character.skin_color !== "n/a" && (
              <li className="mb-2">Skin Color: {character.skin_color}</li>
            )}
            {character.mass && character.mass !== "n/a" && (
              <li className="mb-2">Mass: {character.mass}</li>
            )}
            {character.gender && character.gender !== "n/a" && (
              <li className="mb-2">Gender: {character.gender}</li>
            )}
          </ul>
        </div>
      </div>
    </div>
    </div>
  );

}
