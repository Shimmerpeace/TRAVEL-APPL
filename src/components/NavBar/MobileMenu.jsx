"use client";

import Link from "next/link";
import AuthControls from "./AuthControls";
import MobileTransportDropdown from "./MobileTransportDropdown";

export default function MobileMenu({
  mobileMenuOpen,
  setMobileMenuOpen,
  mobileTransportOpen,
  setMobileTransportOpen,
  user,
  onLoginClick,
  onLogout,
}) {
  const baseLinkClass =
    "text-gray-700 font-medium hover:text-blue-700 transition-colors duration-150";

  return (
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
            href="/flights"
            className={baseLinkClass}
            onClick={() => setMobileMenuOpen(false)}
          >
           Flights
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

        {/* Mobile Transport */}
        <MobileTransportDropdown
          mobileTransportOpen={mobileTransportOpen}
          setMobileTransportOpen={setMobileTransportOpen}
          setMobileMenuOpen={setMobileMenuOpen}
        />

        {/* Mobile Auth */}
        <li>
          <AuthControls
            user={user}
            onLoginClick={() => {
              onLoginClick();
            }}
            onLogout={() => {
              onLogout();
              setMobileMenuOpen(false);
            }}
            mobile
          />
        </li>
      </ul>
    </div>
  );
}
