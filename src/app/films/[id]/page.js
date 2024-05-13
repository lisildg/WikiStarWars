"use client";
import { getFilmById } from "@/utils/api";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function FilmDetail({ params }) {
  const { id } = params;
  const [film, setFilm] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const filmData = await getFilmById(id);
      setFilm(filmData);
    };
    fetchData();
  }, []);

  if (!film) {
    return <div>Cargando...</div>;
  }

  return (
    <div>
      <h1 className="flex justify-center font-bold">{film.title}</h1>
      <ul className="w-full sm:w-1/2  lg:w-1/4 xl:w-1/5 py-2 text-accent rounded overflow-hidden shadow-lg">
        <Image src="/imgFilm.jpg" height={200} width={100} />
        <li>Episodio: {film.episode_id}</li>

        <li>Director: {film.director}</li>
        <h1>Personajes:</h1>
        <ul>
          {film.characters.map((character) => (
            <li key={character.url}>
              <Link
                href={`/characters/${character.url.split("/").slice(-2)[0]}`}
              >
                {character.name}
              </Link>
            </li>
          ))}
        </ul>
      </ul>
    </div>
  );
}
