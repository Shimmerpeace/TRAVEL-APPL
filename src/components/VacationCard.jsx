//components/VacationCard.jsx
import Link from "next/link";

export default function VacationCard({ vacation }) {
  return (
    <div className="border rounded-md p-4 bg-white shadow-sm hover:shadow-md transition">
      <h3 className="text-xl font-bold mb-1">
        <Link href={`/vacations/${vacation._id}`} className="text-blue-600 hover:underline">{vacation.name}</Link>
      </h3>
      <p className="text-gray-700">{vacation.title}</p>
      <p className="text-gray-700">{vacation.description}</p>
      <p className="text-gray-700">{vacation.price}</p>
      {/* Real-time availability, price, etc */}
    </div>
  );
}
