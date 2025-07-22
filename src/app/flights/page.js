//app/flights/page.js
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import NavBar from "@/components/NavBar";

export default function FlightsListing() {
  const [flights, setFlights] = useState([]);

  useEffect(() => {
    fetch("/api/flights")
      .then((res) => res.json())
      .then((data) => setFlights(data));
  }, []);

  if (!flights.length) return <div>Loading flights...</div>;

  return (
    <div>
      <NavBar />
      <h1>All Flights</h1>
      <ul>
        {flights.map((flight) => (
          <li key={flight._id}>
            <Link href={`/flights/${flight._id}`}>{flight.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}