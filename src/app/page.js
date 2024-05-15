"use client"; 
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/NavBar";

export default function Home() {
  const [loadingButton, setLoadingButton] = useState(null);

  const handleClick = (button) => {
    setLoadingButton(button);
    setTimeout(() => {
      setLoadingButton(null); 
    }, 2000);
  };

  const menuItems = [
    { name: "Personajes", link: "/characters" },
    { name: "Films", link: "/films" },
  ];

  return (
    <main className="relative w-full h-screen">
      <Navbar menuItems={menuItems} />
      <div className="relative w-full h-full">
        <Image
          src="/bg.jpg"
          alt="Background Image"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="z-0"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-opacity-50 flex flex-col items-center justify-center text-secondary z-10">
          <h1 className="text-4xl font-bold mb-4">Wiki Star Wars</h1>
          <p className="text-lg text-center mb-8">
            ¡Bienvenido! Aquí podrás encontrar información sobre tus películas y
            personajes favoritos de Star Wars.
          </p>
          <div className="flex justify-center space-x-56">
            <Link href="/characters">
              <button
                onClick={() => handleClick('characters')}
                disabled={loadingButton === 'characters'}
                className={`text-secondary bg-highlight font-medium rounded-lg text-sm px-5 py-2.5 text-center hover:animate-pulse ${
                  loadingButton === 'characters' ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                {loadingButton === 'characters' ? "Cargando..." : "Personajes"}
              </button>
            </Link>
            <Link href="/films">
              <button
                onClick={() => handleClick('films')}
                disabled={loadingButton === 'films'}
                className={`text-secondary bg-highlight font-medium rounded-lg text-sm px-5 py-2.5 text-center hover:animate-pulse ${
                  loadingButton === 'films' ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                {loadingButton === 'films' ? "Cargando..." : "Films"}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
