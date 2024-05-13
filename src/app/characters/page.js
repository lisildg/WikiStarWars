"use client";
import { getAllCharacters } from "@/utils/api";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Loader from "@/components/Loader";

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
    <div className="container mx-auto px-4">
      <h1 className="text-center font-bold text-2xl mt-8 mb-4">Listado de Personajes</h1>
      {characters.length === 0 ? (
        <div className="flex items-center justify-center h-screen">
          <Loader />
        </div>
      ) : (
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {characters.map((character) => {
            const arrayId = character.url.split("/");
            const idChracter = arrayId[arrayId.length - 2];
            return (
              <li key={character.idChracter} className="flex flex-col justify-between p-4  rounded-lg shadow-lg shadow-accent">
                <div className="flex justify-center mb-4">
                  <Image src="/imgCharcter.jpg" alt="Character Image" height={200} width={100} />
                </div>
                <div className="text-center">
                  <Link href={`/characters/${idChracter}`} className="font-bold text-secondary hover:underline">
                    {character.name}
                  </Link>
                  <ul className="text-left mt-2">
                    <li><span className="font-bold">Nombre:</span> {character.name}</li>
                    {character.eye_color && character.eye_color !== "n/a" && (
                      <li><span className="font-bold">Color de ojos:</span> {character.eye_color}</li>
                    )}
                    {character.gender && character.gender !== "n/a" && (
                      <li><span className="font-bold">Género:</span> {character.gender}</li>
                    )}
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
  
}
