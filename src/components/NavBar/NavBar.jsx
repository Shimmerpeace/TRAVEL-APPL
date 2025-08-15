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

