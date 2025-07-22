// components/FlightCard.jsx
import Link from "next/link";

export default function FlightCard({ flight }) {
  return (
    <div className="border rounded-md p-4 bg-white shadow-sm hover:shadow-md transition">
      <h3 className="text-xl font-bold mb-1">
        <Link href={`/flights/${flight._id}`} className="text-blue-600 hover:underline">
          {flight.name}
        </Link>
      </h3>
      <p className="text-gray-700">{flight.description}</p>
    </div>
  );
}
