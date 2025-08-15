// components/Navbar.jsx
"use client";

import Link from "next/link";
import { useState } from "react";
import AuthModal from "@/components/AuthModal";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";
import AuthControls from "./AuthControls";

export default function Navbar() {
  const [transportOpen, setTransportOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileTransportOpen, setMobileTransportOpen] = useState(false);
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [user, setUser] = useState(null);

  return (
    <>
      <nav className="bg-gray-50 shadow-md sticky top-0 z-50">
        <div className="container mx-auto flex items-center justify-between py-3 px-6">
          {/* Brand */}
          <h1 className="text-lg font-bold text-blue-700">
            <Link href="/">TravelHeirs</Link>
          </h1>

          {/* Desktop Menu */}
          <DesktopMenu
            transportOpen={transportOpen}
            setTransportOpen={setTransportOpen}
          />

          {/* Desktop Auth */}
          <div className="hidden md:flex items-center gap-4">
            <AuthControls
              user={user}
              onLoginClick={() => setAuthModalOpen(true)}
              onLogout={() => setUser(null)}
            />
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

        {/* Mobile Menu */}
        <MobileMenu
          mobileMenuOpen={mobileMenuOpen}
          setMobileMenuOpen={setMobileMenuOpen}
          mobileTransportOpen={mobileTransportOpen}
          setMobileTransportOpen={setMobileTransportOpen}
          user={user}
          onLoginClick={() => setAuthModalOpen(true)}
          onLogout={() => setUser(null)}
        />
      </nav>

      {/* Authentication Modal */}
      <AuthModal
        open={authModalOpen}
        onClose={() => setAuthModalOpen(false)}
        onLogin={(userData) => {
          setUser(userData);
          setAuthModalOpen(false);
        }}
      />
    </>
  );
}


/*
"use client";

import Link from "next/link";
import { useState } from "react";
import AuthModal from "@/components/AuthModal";

export default function Navbar() {
  // State for menus
  const [transportOpen, setTransportOpen] = useState(false); // desktop dropdown
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false); // mobile menu
  const [mobileTransportOpen, setMobileTransportOpen] = useState(false); // mobile dropdown

  // Auth state
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [user, setUser] = useState(null);

  const baseLinkClass =
    "text-gray-700 font-medium hover:text-blue-700 transition-colors duration-150";
  const dropdownItemClass =
    "block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-colors duration-150";

  return (
    <>
      <nav className="bg-gray-50 shadow-md sticky top-0 z-50">
        <div className="container mx-auto flex items-center justify-between py-3 px-6">
          {/* Brand *
          <h1 className="text-lg font-bold text-blue-700">
            <Link href="/">TravelHeirs</Link>
          </h1>

          {/* Desktop Menu 
          <div className="hidden md:flex items-center gap-6 relative">
            <Link
              href="/"
              className={`${baseLinkClass} text-blue-700 font-semibold`}
            >
              Home
            </Link>
            <Link href="/hotels" className={baseLinkClass}>
              Hotels
            </Link>
            <Link href="/vacations" className={baseLinkClass}>
              Vacation Packages
            </Link>
            <Link href="/example" className={baseLinkClass}>
              Example
            </Link>

            {/* Transport Dropdown *
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
                Transport <span
                  className={`text-xs transform transition-transform duration-200 ${
                    transportOpen ? "rotate-180" : ""
                  }`}
                >
                  ▼
                </span>
              </button>

              {transportOpen && (
                <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                  <ul className="py-1">
                    <li>
                      <Link
                        href="transport/flights"
                        className={dropdownItemClass}
                      >
                        Flights
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="transport/buses"
                        className={dropdownItemClass}
                      >
                        Buses
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="transport/trains"
                        className={dropdownItemClass}
                      >
                        Trains
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>

          {/* Desktop Auth Button *
          <div className="hidden md:flex items-center gap-4">
            {user ? (
              <div className="flex items-center gap-3">
                <div
                  className="w-9 h-9 rounded-full bg-gray-200 flex items-center justify-center font-bold text-lg text-blue-600"
                  aria-label={`Profile avatar for ${user.name}`}
                >
                  {user.name[0]}
                </div>
                <span className="font-medium">{user.name}</span>
                <button
                  onClick={() => setUser(null)}
                  className="text-red-500 border border-red-400 px-3 py-1 rounded-full hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-red-400"
                >
                  Logout
                </button>
              </div>
            ) : (
              <button
                onClick={() => setAuthModalOpen(true)}
                className="bg-white text-blue-600 px-4 py-2 rounded-full border border-blue-600 font-semibold shadow hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                Login
              </button>
            )}
          </div>

          {/* Mobile Hamburger 
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

        {/* Mobile Menu 
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
                href="/hotels"
                className={baseLinkClass}
                onClick={() => setMobileMenuOpen(false)}
              >
                Hotels
              </Link>
            </li>
            <li>
              <Link
                href="/vacations"
                className={baseLinkClass}
                onClick={() => setMobileMenuOpen(false)}
              >
                Vacation Packages
              </Link>
            </li>
            <li>
              <Link
                href="/example"
                className={baseLinkClass}
                onClick={() => setMobileMenuOpen(false)}
              >
                Example
              </Link>
            </li>

            {/* Mobile Transport Dropdown 
            <li className="flex flex-col">
              <button
                onClick={() => setMobileTransportOpen((prev) => !prev)}
                className={`${baseLinkClass} flex justify-between items-center`}
                aria-expanded={mobileTransportOpen}
              >
                Transport  <span
                  className={`text-xs transform transition-transform duration-200 ${
                    mobileTransportOpen ? "rotate-180" : ""
                  }`}
                >
                  ▼
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  mobileTransportOpen
                    ? "max-h-40 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <ul className="mt-2 ml-4 space-y-2">
                  <li>
                    <Link
                      href="/transport/flights"
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
                      href="/transport/buses"
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
                      href="/transport/trains"
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

            {/* Mobile Auth 
            <li>
              {user ? (
                <div className="flex items-center gap-3 mt-4">
                  <div
                    className="w-9 h-9 rounded-full bg-gray-200 flex items-center justify-center font-bold text-lg text-blue-600"
                    aria-label={`Profile avatar for ${user.name}`}
                  >
                    {user.name[0]}
                  </div>
                  <span className="font-medium">{user.name}</span>
                  <button
                    onClick={() => {
                      setUser(null);
                      setMobileMenuOpen(false);
                    }}
                    className="text-red-500 border border-red-400 px-3 py-1 rounded-full hover:bg-red-50"
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => {
                    setAuthModalOpen(true);
                    setMobileMenuOpen(false);
                  }}
                  className="w-full bg-blue-600 text-white px-4 py-2 rounded-full mt-4 shadow hover:bg-blue-700"
                >
                  Login
                </button>
              )}
            </li>
          </ul>
        </div>
      </nav>

      {/* Authentication Modal 
      <AuthModal
        open={authModalOpen}
        onClose={() => setAuthModalOpen(false)}
        onLogin={(userData) => {
          setUser(userData);
          setAuthModalOpen(false);
        }}
      />
    </>
  );
}
*/