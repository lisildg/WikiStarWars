import Link from "next/link";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ul>
      <li>
        <Link href="/">Wiki star wars</Link>
      </li>
      <li>
        <Link href="/characters">characters</Link>
      </li>
      <li>
        <Link href="/films">films</Link>
      </li>
    </ul>
    
    </main>
  );
}
