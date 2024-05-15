"use client";
import { getAllFilms } from "@/utils/api";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Loader from "@/components/Loader";
import Navbar from "@/components/NavBar";

export default function Films() {
  const [films, setFilms] = useState([]);
  const menuItems = [
    { name: "Wiki Star Wars", link: "/" },
    { name: "Personajes", link: "/characters" },
  ];

  useEffect(() => {
    const fetchData = async () => {
      const filmsData = await getAllFilms();
      setFilms(filmsData);
    };
    fetchData();
  }, []);

  return (
    <div>
      <Navbar menuItems={menuItems} />
      <div className="container mx-auto px-4">
        <h1 className="text-center font-bold text-2xl mt-8 mb-4">
          Listado de Films
        </h1>
        {films.length === 0 ? (
          <div className="flex items-center justify-center h-screen">
            <Loader />
          </div>
        ) : (
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mb-8">
            {films.map((film) => {
              const arrayId = film.url.split("/");
              const idFilm = arrayId[arrayId.length - 2];
              return (
                <li
                  key={film.idFilm}
                  className="flex flex-col items-center justify-between p-4  rounded-lg shadow-lg shadow-accent"
                >
                  <div className="flex justify-center mb-4">
                    <Image
                      src="/imgFilm.jpg"
                      alt="Film Poster"
                      height={200}
                      width={100}
                    />
                  </div>
                  <div className="text-center">
                    <Link
                      href={`/films/${idFilm}`}
                      className="font-bold hover:underline"
                    >
                      {film.title}
                    </Link>
                    <p>Episodio: {film.episode_id}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
}
