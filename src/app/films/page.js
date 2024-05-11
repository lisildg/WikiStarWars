"use client";
import { getAllFilms } from "@/utils/api";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Films() {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const filmsData = await getAllFilms();
      setFilms(filmsData);
    };
    fetchData();
  }, []);

  return (
    <div className="flex justify-center">
      <h1>Listado de Films</h1>
      <ul>
        {films.map((film) => {
          const arrayId = film.url.split("/");
          const idFilm = arrayId[arrayId.length - 2];
          return (
            <div key={film.idFilm}>
              <Link href={`/films/${idFilm}`}>
                {film.title}
              </Link>
              <li>{film.episode_id}</li>
            </div>
        
          );
        })}
      </ul>
    </div>
  );
}
