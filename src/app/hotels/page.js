///app/hotels/page.js
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import NavBar from "@/components/NavBar";

export default function HotelsListing() {
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    fetch("/api/hotels")
      .then((res) => res.json())
      .then((data) => setHotels(data));
  }, []);

  if (!hotels.length) return <div>Loading hotels...</div>;

  return (
    <div>
      <NavBar />
      <h1>All Hotels</h1>
      <ul>
        {hotels.map((hotel) => (
          <li key={hotel._id}>
            <Link href={`/hotels/${hotel._id}`}>{hotel.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}