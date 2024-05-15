import Link from "next/link";

export default function Navbar({ menuItems }) {
  return (
    <nav className="bg-highlight py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center">
          <div className="flex space-x-4">
            {menuItems.map((item) => (
              <Link key={item.link} href={item.link}>
                <h1 className="font-semibold hover:text-background">{item.name}</h1>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
