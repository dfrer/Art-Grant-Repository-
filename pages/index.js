import Layout from '../components/Layout'
import Link from 'next/link'

export default function Home() {
  return (
    <Layout>
      <div className="text-center max-w-xl mx-auto mt-20">
        <h1 className="text-4xl font-bold mb-6">Find the Right Art Grant for You</h1>
        <p className="mb-8 text-gray-700">
          Browse and discover art grants available in the US and Canada. Filter by discipline, amount, and more.
        </p>
        
        <div className="mb-8">
          {/* Placeholder for a future search bar component */}
          <input
            type="text"
            className="border rounded px-4 py-2 w-full mb-4"
            placeholder="Search grants..."
          />
          <div className="flex justify-center space-x-4">
            <Link href="/grants?country=USA" className="underline text-blue-600">USA Grants</Link>
            <Link href="/grants?country=Canada" className="underline text-blue-600">Canada Grants</Link>
          </div>
        </div>

        <Link href="/grants" className="inline-block bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
          View All Grants
        </Link>
      </div>
    </Layout>
  )
}
