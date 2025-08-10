// components/NavBar.jsx
"use client";
import Link from "next/link";
import { useState } from "react";

export default function NavBar() {
  const [transportOpen, setTransportOpen] = useState(false);

  return (
    <>
      <nav className="bg-white shadow-md py-3 px-6 sticky top-0 z-10 flex space-x-4">
        <Link href="/" className="text-blue-700 font-semibold hover:underline">
          Home
        </Link>
        <a href="/flights" className="text-gray-700 hover:text-blue-700">
          Flights
        </a>
        <a href="/hotels" className="text-gray-700 hover:text-green-700">
          Hotels
        </a>
        <a href="/vacations" className="text-gray-700 hover:text-purple-700">
          Vacation Packages
        </a>
        <a href="/example">Example</a>
      </nav>

      <nav
        style={{ display: "flex", gap: 24, padding: 16, background: "#f3f3f3" }}
      >
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <div
          style={{ position: "relative" }}
          onMouseEnter={() => setTransportOpen(true)}
          onMouseLeave={() => setTransportOpen(false)}
        >
          <Link href="/transport">Transport</Link>
          <button
            aria-haspopup="true"
            aria-expanded={transportOpen}
            onClick={() => setTransportOpen((v) => !v)}
            style={{ marginLeft: 6, cursor: "pointer" }}
          >
            ▼
          </button>
          {transportOpen && (
            <ul
              style={{
                position: "absolute",
                top: 24,
                left: 0,
                background: "#fff",
                border: "1px solid #ddd",
                padding: 0,
                margin: 0,
                listStyle: "none",
                zIndex: 99,
              }}
            >
              <li>
                <Link
                  href="/transport/flights"
                  style={{ display: "block", padding: 8 }}
                >
                  Flights
                </Link>
              </li>
              <li>
                <Link
                  href="/transport/buses"
                  style={{ display: "block", padding: 8 }}
                >
                  Buses
                </Link>
              </li>
              <li>
                <Link
                  href="/transport/trains"
                  style={{ display: "block", padding: 8 }}
                >
                  Train
                </Link>
              </li>
            </ul>
          )}
        </div>
        {/* Other navbar items */}
      </nav>
    </>
  );
}
