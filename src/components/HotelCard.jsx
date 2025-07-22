import Link from "next/link";

export default function HotelCard({ hotel }) {
  return (
    <div>
      <h3>
        <Link href={`/hotels/${hotel._id}`}>{hotel.name}</Link>
      </h3>
      <p>{hotel.description}</p>
      {/* Real-time availability, price, etc */}
    </div>
  );
}
