import Link from "next/link";

export default function VacationCard({ vacation }) {
  return (
    <div>
      <h3>
        <Link href={`/vacations/${vacation._id}`}>{vacation.name}</Link>
      </h3>
      <p>{vacation.description}</p>
      {/* Real-time availability, price, etc */}
    </div>
  );
}
