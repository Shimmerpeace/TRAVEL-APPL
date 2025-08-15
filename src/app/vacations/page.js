//app/vacations/page.js
"use client";

import { useEffect, useState } from "react";
import VacationCard from "@/components/VacationCard";
import AddVacationForm from "@/components/AddVacationForm";

export default function VacationsPage() {
  const [vacations, setVacations] = useState([]);

  const fetchVacations = async () => {
    try {
      const res = await fetch("/api/vacations");
      const data = await res.json();
      setVacations(data);
    } catch (err) {
      console.error("Failed to fetch vacations:", err);
    }
  };

  useEffect(() => {
    fetchVacations();
  }, []);

  if (!vacations.length) return <div>Loading vacations...</div>;

  const handleAdded = () => {
    fetchVacations();
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-purple-600 text-white py-4 px-6 mb-6">
        <h1 className="text-3xl font-bold">Vacation Packages</h1>
      </header>

      <main className="container mx-auto px-4">
        {vacations.length === 0 && <p>No vacation packages available.</p>}
        <ul className="grid gap-4 md:grid-cols-3">
          {vacations.map((vacation) => (
            <li key={vacation._id}>
              <VacationCard vacation={vacation} />
            </li>
          ))}
        </ul>
        <AddVacationForm onAdded={handleAdded} />
      </main>
    </div>
  );
}

