//app/vacations/[id]/page.js
"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import VacationCard from "@/components/VacationCard";
import BookingForm from "@/components/BookingForm";

export default function VacationDetail() {
  const pathname = usePathname();
  const id = pathname.split("/").pop();
  const [vacation, setVacation] = useState(null);

  useEffect(() => {
    if (id) {
      fetch(`/api/vacations/${id}`)
        .then((res) => res.json())
        .then(setVacation);
    }
  }, [id]);

  if (!vacation) return <div>Loading...</div>;

  return (
    <div>
      <h2>{vacation.title}</h2>
      <p>{vacation.description}</p>

      <ul>
        <VacationCard key={vacation._id} vacation={vacation} />
      </ul>

      <BookingForm type="vacations" id={vacation._id} />
    </div>
  );
}
