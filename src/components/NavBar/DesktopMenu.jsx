"use client";

import Link from "next/link";
import TransportDropdown from "./TransportDropdown";

export default function DesktopMenu({ transportOpen, setTransportOpen }) {
  const baseLinkClass =
    "text-gray-700 font-medium hover:text-blue-700 transition-colors duration-150";

  return (
    <div className="hidden md:flex items-center gap-6 relative">
      <Link
        href="/"
        className={`${baseLinkClass} text-blue-700 font-semibold`}
      >
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

      <TransportDropdown
        transportOpen={transportOpen}
        setTransportOpen={setTransportOpen}
      />
    </div>
  );
}
