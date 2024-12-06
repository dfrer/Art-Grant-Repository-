import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-white border-b shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold hover:underline">
          Art Grants Directory
        </Link>
        <nav className="space-x-4 text-sm">
          <Link href="/" className="text-gray-700 hover:underline">Home</Link>
          <Link href="/grants" className="text-gray-700 hover:underline">All Grants</Link>
          <Link href="/about" className="text-gray-700 hover:underline">About</Link>
        </nav>
      </div>
    </header>
  )
}
