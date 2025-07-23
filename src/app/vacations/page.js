//app/vacations/page.js

"use client";

import { useEffect, useState } from "react";
import VacationCard from "@/components/VacationCard";

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
      <h1>All Vacations</h1>
      <ul>
        {vacations.map((vacation) => (
          <VacationCard key={vacation._id} vacation={vacation} />
        ))}
      </ul>
    </div>
  );
}
