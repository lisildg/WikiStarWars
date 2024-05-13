"use client";
import { getAllFilms } from "@/utils/api";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Loader from "@/components/Loader";

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
    <div>
      <h1 className="flex justify-center font-bold">Listado de Films</h1>
      {films.length === 0 ? (
        <div className="flex items-center justify-center h-screen">
          <Loader />
        </div>
      ) : (
        <ul className="flex flex-wrap justify-center px-6 py-4">
          {films.map((film) => {
            const arrayId = film.url.split("/");
            const idFilm = arrayId[arrayId.length - 2];
            return (
              <div
                key={film.idFilm}
                className="w-full sm:w-1/2  lg:w-1/4 xl:w-1/5 flex justify-center  py-2 text-accent rounded overflow-hidden shadow-lg"
              >
                <Image src="/imgFilm.jpg" height={200} width={100} />{" "}
                <Link href={`/films/${idFilm}`}>{film.title}</Link>
                <li>Episodio: {film.episode_id}</li>
              </div>
            );
          })}
        </ul>
      )}
    </div>
  );
  
}
