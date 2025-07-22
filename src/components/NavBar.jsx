// components/NavBar.jsx
import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="bg-white shadow-md py-3 px-6 sticky top-0 z-10 flex space-x-4">
      <Link href="/" className="text-blue-700 font-semibold hover:underline">
        Home
      </Link>
      <a href="#flights" className="text-gray-700 hover:text-blue-700">
        Flights
      </a>
      <a href="#hotels" className="text-gray-700 hover:text-green-700">
        Hotels
      </a>
      <a href="#vacations" className="text-gray-700 hover:text-purple-700">
        Vacation Packages
      </a>
    </nav>
  );
}