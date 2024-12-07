import { useState } from 'react'
import { useRouter } from 'next/router'
import Layout from '../components/Layout'
import Link from 'next/link'

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('')
  const router = useRouter()

  const handleSearchKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      router.push(`/grants?search=${encodeURIComponent(searchTerm)}`)
    }
  }

  return (
    <Layout>
      <div className="text-center max-w-xl mx-auto mt-20">
        <h1 className="text-4xl font-bold mb-6">Find the Right Art Grant for You</h1>
        <p className="mb-8 text-gray-700">
          Browse and discover art grants available in many countries around the world.
        </p>
        
        <div className="mb-8">
          <input
            type="text"
            className="border rounded px-4 py-2 w-full mb-4"
            placeholder="Search grants..."
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            onKeyDown={handleSearchKeyDown}
          />
          <div className="flex flex-wrap justify-center gap-4">
            <Link href={{ pathname: '/grants', query: { country: 'USA' }}} className="underline text-blue-600 hover:text-blue-800">USA</Link>
            <Link href={{ pathname: '/grants', query: { country: 'Canada' }}} className="underline text-blue-600 hover:text-blue-800">Canada</Link>
            <Link href={{ pathname: '/grants', query: { country: 'UK' }}} className="underline text-blue-600 hover:text-blue-800">UK</Link>
            <Link href={{ pathname: '/grants', query: { country: 'Australia' }}} className="underline text-blue-600 hover:text-blue-800">Australia</Link>
            <Link href={{ pathname: '/grants', query: { country: 'Mexico' }}} className="underline text-blue-600 hover:text-blue-800">Mexico</Link>
            <Link href={{ pathname: '/grants', query: { country: 'Sweden' }}} className="underline text-blue-600 hover:text-blue-800">Sweden</Link>
            <Link href={{ pathname: '/grants', query: { country: 'Germany' }}} className="underline text-blue-600 hover:text-blue-800">Germany</Link>
            <Link href={{ pathname: '/grants', query: { country: 'New Zealand' }}} className="underline text-blue-600 hover:text-blue-800">New Zealand</Link>
            <Link href={{ pathname: '/grants', query: { country: 'Singapore' }}} className="underline text-blue-600 hover:text-blue-800">Singapore</Link>
            <Link href={{ pathname: '/grants', query: { country: 'Switzerland' }}} className="underline text-blue-600 hover:text-blue-800">Switzerland</Link>
            <Link href={{ pathname: '/grants', query: { country: 'France' }}} className="underline text-blue-600 hover:text-blue-800">France</Link>
            {/* Additional countries */}
            <Link href={{ pathname: '/grants', query: { country: 'Netherlands' }}} className="underline text-blue-600 hover:text-blue-800">Netherlands</Link>
            <Link href={{ pathname: '/grants', query: { country: 'Ireland' }}} className="underline text-blue-600 hover:text-blue-800">Ireland</Link>
            <Link href={{ pathname: '/grants', query: { country: 'Japan' }}} className="underline text-blue-600 hover:text-blue-800">Japan</Link>
            <Link href={{ pathname: '/grants', query: { country: 'China' }}} className="underline text-blue-600 hover:text-blue-800">China</Link>
            <Link href={{ pathname: '/grants', query: { country: 'Brazil' }}} className="underline text-blue-600 hover:text-blue-800">Brazil</Link>
            <Link href={{ pathname: '/grants', query: { country: 'South Africa' }}} className="underline text-blue-600 hover:text-blue-800">South Africa</Link>
            <Link href={{ pathname: '/grants', query: { country: 'India' }}} className="underline text-blue-600 hover:text-blue-800">India</Link>
            <Link href={{ pathname: '/grants', query: { country: 'Norway' }}} className="underline text-blue-600 hover:text-blue-800">Norway</Link>
            <Link href={{ pathname: '/grants', query: { country: 'Denmark' }}} className="underline text-blue-600 hover:text-blue-800">Denmark</Link>
            <Link href={{ pathname: '/grants', query: { country: 'Spain' }}} className="underline text-blue-600 hover:text-blue-800">Spain</Link>
            <Link href={{ pathname: '/grants', query: { country: 'Italy' }}} className="underline text-blue-600 hover:text-blue-800">Italy</Link>
            <Link href={{ pathname: '/grants', query: { country: 'Poland' }}} className="underline text-blue-600 hover:text-blue-800">Poland</Link>
          </div>
        </div>

        <Link href="/grants" className="inline-block bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
          View All Grants
        </Link>
      </div>
    </Layout>
  )
}
