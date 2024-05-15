"use client";
import { getCharacterById } from "@/utils/api";
import { useState, useEffect } from "react";
import Loader from "@/components/Loader";
import Image from "next/image";
import Navbar from "@/components/NavBar";

export default function CharacterDetail({ params }) {
  const { id } = params;
  const [character, setCharacter] = useState(null);
  const menuItems = [
    { name: "Wiki Star Wars", link: "/" },
    { name: "Personajes", link: "/characters" },
    { name: "Films", link: "/films" },
  ];

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
      <Navbar menuItems={menuItems} />
      <div className="max-w-screen-md mx-auto flex flex-wrap justify-center items-start">
        <div className="w-full md:w-1/2 lg:w-1/3 px-4 py-4">
          <h1 className="text-center font-bold text-2xl my-4">
            Detalles del Personaje: {character.name}
          </h1>
          <div className="rounded-lg overflow-hidden flex justify-center shadow-lg shadow-accent gap-4 mb-8">
            <div className="px-4 py-4">
              <div className="mb-4">
                <Image src="/imgCharcter.jpg" height={200} width={100} />
              </div>
              <ul>
                {character.eye_color && character.eye_color !== "n/a" && (
                  <li className="mb-2">Color de ojos: {character.eye_color}</li>
                )}
                {character.birth_year && character.birth_year !== "n/a" && (
                  <li className="mb-2">
                    Año de nacimiento: {character.birth_year}
                  </li>
                )}
                {character.hair_color && character.hair_color !== "n/a" && (
                  <li className="mb-2">
                    Color de pelo: {character.hair_color}
                  </li>
                )}
                {character.height && character.height !== "n/a" && (
                  <li className="mb-2">Altura: {character.height}</li>
                )}
                {character.skin_color && character.skin_color !== "n/a" && (
                  <li className="mb-2">
                    Color de piel: {character.skin_color}
                  </li>
                )}
                {character.mass && character.mass !== "n/a" && (
                  <li className="mb-2">Masa: {character.mass}</li>
                )}
                {character.gender && character.gender !== "n/a" && (
                  <li className="mb-2">Genero: {character.gender}</li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
