import Link from "next/link";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 ">
    
      <div>
        <Link href="/">Wiki star wars</Link>
      </div>
      <button className="text-secondary bg-highlight font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 md:text-base md:px-8 md:py-3 md:me-4 md:mb-4 lg:text-lg lg:px-10 lg:py-3 lg:me-4 lg:mb-4 animate-pulse">
        <Link href="/characters" >characters</Link>
      </button>
      <button className="text-secondary bg-highlight font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 md:text-base md:px-8 md:py-3 md:me-4 md:mb-4 lg:text-lg lg:px-10 lg:py-3 lg:me-4 lg:mb-4 hover:animate-ping">
        <Link href="/films">films</Link>
      </button>
  
    
    </main>
  );
}
