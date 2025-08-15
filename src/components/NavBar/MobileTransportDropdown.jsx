//components/Navbar/MobileTransportDropdown.jsx
"use client";

import Link from "next/link";

export default function MobileTransportDropdown({
  mobileTransportOpen,
  setMobileTransportOpen,
  setMobileMenuOpen,
}) {
  const baseLinkClass =
    "text-gray-700 font-medium hover:text-blue-700 transition-colors duration-150";
  const dropdownItemClass =
    "block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-colors duration-150";

  return (
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
          mobileTransportOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
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
  );
}
