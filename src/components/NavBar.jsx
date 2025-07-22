import Link from 'next/link';

export default function Navbar() {
  return (
    <nav >
      <Link href="/">Home</Link> |{' '}
      <Link href="#flights">Flights</Link> |{' '}
      <Link href="#hotels">Hotels</Link> |{' '}
      <Link href="#vacations">Vacation Packages</Link>
    </nav>
  );
}