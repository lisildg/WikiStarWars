"use client";
import { getFilmById } from "@/utils/api";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Loader from "@/components/Loader";

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
    return <div><Loader /></div>;
  }

  return (
    <div className="max-w-screen-md mx-auto">
      <h1 className="text-center font-bold text-2xl my-4">{film.title}</h1>
      <div className="rounded-lg overflow-hidden shadow-lg shadow-accent">
        <div className="px-4 py-4">
          <div className="mb-4">
            <Image src="/imgFilm.jpg" height={200} width={100} />
          </div>
          <div className="mb-4">
            <h2 className="font-bold text-lg">Episodio:</h2>
            <p>{film.episode_id}</p>
          </div>
          <div className="mb-4">
            <h2 className="font-bold text-lg">Director:</h2>
            <p>{film.director}</p>
          </div>
          <div className="mb-4">
            <h2 className="font-bold text-lg">Personajes:</h2>
            <ul>
              {film.characters.map((character) => (
                <li key={character.url} className="mb-2">
                  <Link href={`/characters/${character.url.split("/").slice(-2)[0]}`}>
                    <span className="text-highlight hover:underline">{character.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
  
}
