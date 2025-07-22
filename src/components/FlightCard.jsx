import Link from "next/link";

export default function FlightCard({ flight }) {
  return (
    <div>
      <h3>
        <Link href={`/flights/${flight._id}`}>{flight.name}</Link>
      </h3>
      <p>{flight.description}</p>
      {/* Real-time availability, price, etc */}
    </div>
  );
}
