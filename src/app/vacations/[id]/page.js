//app/vacations/[id]/page.js
"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
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
      <h2>{vacation.name}</h2>
      <p>{vacation.description}</p>
      <BookingForm type="vacations" id={vacation._id} />
    </div>
  );
}