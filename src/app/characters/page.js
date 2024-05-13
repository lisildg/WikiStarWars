"use client";
import { getAllCharacters } from "@/utils/api";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

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
      <h1 className="flex justify-center font-bold">Listado de Personajes</h1>
      <ul className="flex flex-wrap justify-center px-6 py-4">
        {characters.map((character) => {
          const arrayId = character.url.split("/");
          const idChracter = arrayId[arrayId.length - 2];
          return (
            <div
              key={character.idChracter}
              className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 px-4 py-2 text-accent rounded overflow-hidden shadow-lg"
            >
              <Image src="/imgCharcter.jpg" height={200} width={100} />{" "}
              <Link
                href={`/characters/${idChracter}`}
                className="font-bold text-xl mb-2"
              >
                {character.name}
              </Link>
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
