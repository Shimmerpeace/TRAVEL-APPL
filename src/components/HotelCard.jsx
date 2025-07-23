//components/HotelCard.jsx
import Link from "next/link";

export default function HotelCard({ hotel }) {
  return (
    <div className="border rounded-md p-4 bg-white shadow-sm hover:shadow-md transition">
      <h3 className="text-xl font-bold mb-1">
        <Link href={`/hotels/${hotel._id}`} className="text-blue-600 hover:underline">{hotel.name}</Link>
      </h3>
      <p className="text-gray-700">{hotel.location}</p>
      <p className="text-gray-700">{hotel.description}</p>
      <p className="text-gray-700">{hotel.pricePerNight}</p>
      {/* Real-time availability, price, etc */}
    </div>
  );
}

