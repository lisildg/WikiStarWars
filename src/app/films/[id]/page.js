"use client";
import { getFilmById } from "@/utils/api";
import { useState, useEffect } from "react";
import Link from "next/link";

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
    <div className="flex justify-center">
      <h1>Detalle del Film: {film.title}</h1>
      <ul>
        <li>Episode: {film.episode_id}</li>
        
          <li>Director: {film.director}</li>
     
          <ul>
            {film.characters.map(character => (
              <li key={character.url}>
                <Link href={`/characters/${character.url.split('/').slice(-2)[0]}`}>
                  {character.name}
                </Link>
              </li>
            ))}
          </ul>
      </ul>
    </div>
  );
}
