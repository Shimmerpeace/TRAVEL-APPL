//components/Navbar/TransportDropdown.jsx
"use client";

import Link from "next/link";

export default function TransportDropdown({ transportOpen, setTransportOpen }) {
  const baseLinkClass =
    "text-gray-700 font-medium hover:text-blue-700 transition-colors duration-150";
  const dropdownItemClass =
    "block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-colors duration-150";

  return (
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
        Transport{" "}
        <span
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
              <Link href="/transport/flights" className={dropdownItemClass}>
                Flights
              </Link>
            </li>
            <li>
              <Link href="/transport/buses" className={dropdownItemClass}>
                Buses
              </Link>
            </li>
            <li>
              <Link href="/transport/trains" className={dropdownItemClass}>
                Trains
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
