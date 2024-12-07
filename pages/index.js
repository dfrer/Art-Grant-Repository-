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
          Browse and discover art grants available in the US, Canada, UK, Australia, Mexico, Sweden, Germany, New Zealand, and many other countries.
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
          <div className="flex flex-wrap justify-center space-x-4">
            <Link href={{ pathname: '/grants', query: { country: 'USA' }}} className="underline text-blue-600 hover:text-blue-800">USA Grants</Link>
            <Link href={{ pathname: '/grants', query: { country: 'Canada' }}} className="underline text-blue-600 hover:text-blue-800">Canada Grants</Link>
            <Link href={{ pathname: '/grants', query: { country: 'UK' }}} className="underline text-blue-600 hover:text-blue-800">UK Grants</Link>
            <Link href={{ pathname: '/grants', query: { country: 'Australia' }}} className="underline text-blue-600 hover:text-blue-800">Australia Grants</Link>
            <Link href={{ pathname: '/grants', query: { country: 'Mexico' }}} className="underline text-blue-600 hover:text-blue-800">Mexico Grants</Link>
            <Link href={{ pathname: '/grants', query: { country: 'Sweden' }}} className="underline text-blue-600 hover:text-blue-800">Sweden Grants</Link>
            <Link href={{ pathname: '/grants', query: { country: 'Germany' }}} className="underline text-blue-600 hover:text-blue-800">Germany Grants</Link>
            <Link href={{ pathname: '/grants', query: { country: 'New Zealand' }}} className="underline text-blue-600 hover:text-blue-800">New Zealand Grants</Link>
          </div>
        </div>

        <Link href="/grants" className="inline-block bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
          View All Grants
        </Link>
      </div>
    </Layout>
  )
}
