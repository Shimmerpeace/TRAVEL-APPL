// components/NavBar.jsx

"use client";
import Link from "next/link";
import { useState } from "react";

export default function NavBar() {
  const [transportOpen, setTransportOpen] = useState(false); // desktop dropdown
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false); // mobile menu
  const [mobileTransportOpen, setMobileTransportOpen] = useState(false); // mobile dropdown

  const baseLinkClass =
    "text-gray-700 font-medium hover:text-blue-700 transition-colors duration-150";
  const dropdownItemClass =
    "block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-colors duration-150";

  return (
    <nav className="bg-gray-50 shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between py-3 px-6">
        {/* Brand */}
        <h1 className="text-lg font-bold text-blue-700">
          <Link href="/">TravelHeirs</Link>
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6 relative">
          <Link href="/" className={`${baseLinkClass} text-blue-700 font-semibold`}>
            Home
          </Link>
          <Link href="/pages/hotels" className={baseLinkClass}>
            Hotels
          </Link>
          <Link href="/pages/vacations" className={baseLinkClass}>
            Vacation Packages
          </Link>
          <Link href="/pages/example" className={baseLinkClass}>
            Example
          </Link>

          {/* Transport Dropdown (Desktop) */}
          <div
            className="relative"
            onMouseEnter={() => setTransportOpen(true)}
            onMouseLeave={() => setTransportOpen(false)}
          >
            <button
              onClick={() => setTransportOpen((prev) => !prev)}
              aria-haspopup="true"
              aria-expanded={transportOpen}
              className={`${baseLinkClass} flex items-center gap-1`}
            >
              Transport <span className="text-xs">▼</span>
            </button>

            {transportOpen && (
              <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                <ul className="py-1">
                  <li>
                    <Link href="/pages/transport/flights" className={dropdownItemClass}>
                      Flights
                    </Link>
                  </li>
                  <li>
                    <Link href="/pages/transport/buses" className={dropdownItemClass}>
                      Buses
                    </Link>
                  </li>
                  <li>
                    <Link href="/pages/transport/trains" className={dropdownItemClass}>
                      Trains
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex items-center text-gray-700 focus:outline-none"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <span className="text-2xl">&times;</span>
          ) : (
            <span className="text-2xl">&#9776;</span>
          )}
        </button>
      </div>

      {/* Mobile Menu - Animated Slide Down */}
      <div
        className={`md:hidden bg-white border-t border-gray-200 overflow-hidden transition-all duration-300 ease-in-out ${
          mobileMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col p-4 space-y-3">
          <li>
            <Link
              href="/"
              className={`${baseLinkClass} block`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/pages/hotels"
              className={baseLinkClass}
              onClick={() => setMobileMenuOpen(false)}
            >
              Hotels
            </Link>
          </li>
          <li>
            <Link
              href="/pages/vacations"
              className={baseLinkClass}
              onClick={() => setMobileMenuOpen(false)}
            >
              Vacation Packages
            </Link>
          </li>
          <li>
            <Link
              href="/pages/example"
              className={baseLinkClass}
              onClick={() => setMobileMenuOpen(false)}
            >
              Example
            </Link>
          </li>

          {/* Mobile Transport Dropdown - Animated Slide Down */}
          <li className="flex flex-col">
            <button
              onClick={() => setMobileTransportOpen((prev) => !prev)}
              className={`${baseLinkClass} flex justify-between items-center`}
              aria-expanded={mobileTransportOpen}
            >
              Transport <span className="text-xs">▼</span>
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                mobileTransportOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <ul className="mt-2 ml-4 space-y-2">
                <li>
                  <Link
                    href="/pages/transport/flights"
                    className={dropdownItemClass}
                    onClick={() => {
                      setMobileMenuOpen(false);
                      setMobileTransportOpen(false);
                    }}
                  >
                    Flights
                  </Link>
                </li>
                <li>
                  <Link
                    href="/pages/transport/buses"
                    className={dropdownItemClass}
                    onClick={() => {
                      setMobileMenuOpen(false);
                      setMobileTransportOpen(false);
                    }}
                  >
                    Buses
                  </Link>
                </li>
                <li>
                  <Link
                    href="/pages/transport/trains"
                    className={dropdownItemClass}
                    onClick={() => {
                      setMobileMenuOpen(false);
                      setMobileTransportOpen(false);
                    }}
                  >
                    Trains
                  </Link>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
}

