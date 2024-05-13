import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="flex flex-col items-center p-24 ">
        <Link href="/" className="font-bold">Wiki star wars</Link>
        <br/>
        <span>¡Bienvenido! Aquí podrás encontrar información sobre tus peliculas y personajes favoritos de Star Wars</span>
      </div>
      <div className="flex justify-between px-24">
        <button className="text-secondary bg-highlight font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 md:text-base md:px-8 md:py-3 md:me-4 md:mb-4 lg:text-lg lg:px-10 lg:py-3 lg:me-4 lg:mb-4 hover:animate-pulse ">
        <Link href="/characters">characters</Link>
      </button>
      <button className="text-secondary bg-highlight font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 md:text-base md:px-8 md:py-3 md:me-4 md:mb-4 lg:text-lg lg:px-10 lg:py-3 lg:me-4 lg:mb-4 hover:animate-pulse ">
        <Link href="/films">films</Link>
      </button> 
      </div>
    </main>
  );
}
