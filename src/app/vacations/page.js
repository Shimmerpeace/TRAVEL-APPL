//app/vacations/page.js

"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import NavBar from "@/components/NavBar";

export default function VacationsListing() {
  const [vacations, setVacations] = useState([]);

  useEffect(() => {
    fetch("/api/vacations")
      .then((res) => res.json())
      .then((data) => setVacations(data));
  }, []);

  if (!vacations.length) return <div>Loading vacations...</div>;

  return (
    <div>
      <NavBar />
      <h1>All Vacations</h1>
      <ul>
        {vacations.map((vacation) => (
          <li key={vacation._id}>
            <Link href={`/vacations/${vacation._id}`}>{vacation.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}