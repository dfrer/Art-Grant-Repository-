import { useState, useMemo, useEffect } from 'react'
import { useRouter } from 'next/router'
import Layout from '../../components/Layout'
import grantsData from '../../data/grants.json'
import Link from 'next/link'
import Flag from 'react-world-flags'

function getCountryCode(country) {
  const lowerCountry = country.toLowerCase()
  
  if (lowerCountry.includes('usa')) return 'US'
  if (lowerCountry.includes('canada')) return 'CA'
  if (
    lowerCountry.includes('uk') ||
    lowerCountry.includes('england') ||
    lowerCountry.includes('scotland') ||
    lowerCountry.includes('wales') ||
    lowerCountry.includes('northern ireland')
  ) return 'GB'

  if (lowerCountry.includes('australia')) return 'AU'
  if (lowerCountry.includes('mexico')) return 'MX'
  if (lowerCountry.includes('sweden')) return 'SE'
  if (lowerCountry.includes('germany')) return 'DE'
  if (lowerCountry.includes('new zealand')) return 'NZ'
  if (lowerCountry.includes('singapore')) return 'SG'
  if (lowerCountry.includes('switzerland')) return 'CH'
  if (lowerCountry.includes('france')) return 'FR'
  if (lowerCountry.includes('netherlands')) return 'NL'
  if (lowerCountry.includes('ireland')) return 'IE'
  if (lowerCountry.includes('japan')) return 'JP'
  if (lowerCountry.includes('china')) return 'CN'
  if (lowerCountry.includes('brazil')) return 'BR'
  if (lowerCountry.includes('south africa')) return 'ZA'
  if (lowerCountry.includes('india')) return 'IN'
  if (lowerCountry.includes('norway')) return 'NO'
  if (lowerCountry.includes('denmark')) return 'DK'
  if (lowerCountry.includes('spain')) return 'ES'
  if (lowerCountry.includes('italy')) return 'IT'
  if (lowerCountry.includes('poland')) return 'PL'

  return ''
}

export default function GrantsPage() {
  const router = useRouter()
  
  const [searchTerm, setSearchTerm] = useState('')
  const [countryFilter, setCountryFilter] = useState('All')
  const [disciplineFilter, setDisciplineFilter] = useState('All')
  const [isFilterOpen, setIsFilterOpen] = useState(false)

  // Sync state with URL query parameters on initial load and when they change
  useEffect(() => {
    if (router.query.country) {
      setCountryFilter(router.query.country)
    } else {
      setCountryFilter('All')
    }
    if (router.query.search) {
      setSearchTerm(router.query.search)
    }
  }, [router.query])

  // Extract unique disciplines from grants data
  const disciplines = useMemo(() => {
    const allDisciplines = grantsData.flatMap(g => g.eligibleDisciplines || [])
    return Array.from(new Set(allDisciplines)).sort()
  }, [])

  // Filter grants based on search term, country, and discipline
  const filteredGrants = useMemo(() => {
    return grantsData.filter(grant => {
      // Search filter
      const matchesSearch = searchTerm === '' || (
        grant.grantName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        grant.fundingOrganization.toLowerCase().includes(searchTerm.toLowerCase())
      )

      // Country filter
      const matchesCountry = countryFilter === 'All' || 
        grant.country.toLowerCase().includes(countryFilter.toLowerCase())

      // Discipline filter
      const matchesDiscipline = disciplineFilter === 'All' ||
        grant.eligibleDisciplines.map(d => d.toLowerCase()).includes(disciplineFilter.toLowerCase())

      return matchesSearch && matchesCountry && matchesDiscipline
    })
  }, [searchTerm, countryFilter, disciplineFilter])

  // Handle pressing Enter in the search bar
  const handleSearchKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      // Update URL with search query
      router.push({
        pathname: '/grants',
        query: {
          ...router.query,
          search: searchTerm
        }
      })
    }
  }

  // Handle country filter change
  const handleCountryChange = (e) => {
    setCountryFilter(e.target.value)
    router.push({
      pathname: '/grants',
      query: {
        ...router.query,
        country: e.target.value === 'All' ? undefined : e.target.value,
        search: searchTerm || undefined
      }
    })
  }

  // Handle discipline filter change
  const handleDisciplineChange = (e) => {
    setDisciplineFilter(e.target.value)
    // Optional: Update URL for discipline as well if desired
  }

  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-4">All Grants</h1>

      {/* Mobile Filters Button */}
      <div className="md:hidden mb-4">
        <button 
          onClick={() => setIsFilterOpen(true)} 
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Filters
        </button>
      </div>

      {/* Mobile Filter Drawer */}
      {isFilterOpen && (
        <div className="fixed inset-0 bg-white z-50 p-4 overflow-auto">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">Filters</h2>
            <button onClick={() => setIsFilterOpen(false)} className="underline text-sm">Close</button>
          </div>
          <div className="flex flex-col space-y-4">
            {/* Search Field */}
            <input
              type="text"
              className="border rounded px-4 py-2 w-full"
              placeholder="Search by name or org..."
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              onKeyDown={handleSearchKeyDown}
            />

            {/* Country Filter */}
            <select
              className="border rounded px-4 py-2"
              value={countryFilter}
              onChange={handleCountryChange}
            >
              <option value="All">All Countries</option>
              <option value="USA">USA</option>
              <option value="Canada">Canada</option>
              <option value="UK">UK</option>
              <option value="Australia">Australia</option>
              <option value="Mexico">Mexico</option>
              <option value="Sweden">Sweden</option>
              <option value="Germany">Germany</option>
              <option value="New Zealand">New Zealand</option>
              <option value="Singapore">Singapore</option>
              <option value="Switzerland">Switzerland</option>
              <option value="France">France</option>
              <option value="Netherlands">Netherlands</option>
              <option value="Ireland">Ireland</option>
              <option value="Japan">Japan</option>
              <option value="China">China</option>
              <option value="Brazil">Brazil</option>
              <option value="South Africa">South Africa</option>
              <option value="India">India</option>
              <option value="Norway">Norway</option>
              <option value="Denmark">Denmark</option>
              <option value="Spain">Spain</option>
              <option value="Italy">Italy</option>
              <option value="Poland">Poland</option>
            </select>

            {/* Discipline Filter */}
            <select
              className="border rounded px-4 py-2"
              value={disciplineFilter}
              onChange={handleDisciplineChange}
            >
              <option value="All">All Disciplines</option>
              {disciplines.map((disc, idx) => (
                <option key={idx} value={disc}>{disc}</option>
              ))}
            </select>

            {/* Clear All Filters */}
            <button 
              onClick={() => {
                setCountryFilter('All')
                setDisciplineFilter('All')
                setSearchTerm('')
                router.push('/grants')
              }} 
              className="underline text-sm text-gray-600"
            >
              Clear All
            </button>
          </div>
        </div>
      )}

      {/* Desktop Filters */}
      <div className="hidden md:flex items-center space-x-4 mb-4">
        {/* Search Input */}
        <input
          type="text"
          className="border rounded px-4 py-2"
          placeholder="Search by name or organization..."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          onKeyDown={handleSearchKeyDown}
        />

        {/* Country Filter */}
        <select
          className="border rounded px-4 py-2"
          value={countryFilter}
          onChange={handleCountryChange}
        >
          <option value="All">All Countries</option>
          <option value="USA">USA</option>
          <option value="Canada">Canada</option>
          <option value="UK">UK</option>
          <option value="Australia">Australia</option>
          <option value="Mexico">Mexico</option>
          <option value="Sweden">Sweden</option>
          <option value="Germany">Germany</option>
          <option value="New Zealand">New Zealand</option>
          <option value="Singapore">Singapore</option>
          <option value="Switzerland">Switzerland</option>
          <option value="France">France</option>
          <option value="Netherlands">Netherlands</option>
          <option value="Ireland">Ireland</option>
          <option value="Japan">Japan</option>
          <option value="China">China</option>
          <option value="Brazil">Brazil</option>
          <option value="South Africa">South Africa</option>
          <option value="India">India</option>
          <option value="Norway">Norway</option>
          <option value="Denmark">Denmark</option>
          <option value="Spain">Spain</option>
          <option value="Italy">Italy</option>
          <option value="Poland">Poland</option>
        </select>

        {/* Discipline Filter */}
        <select
          className="border rounded px-4 py-2"
          value={disciplineFilter}
          onChange={handleDisciplineChange}
        >
          <option value="All">All Disciplines</option>
          {disciplines.map((disc, idx) => (
            <option key={idx} value={disc}>{disc}</option>
          ))}
        </select>
      </div>

      {/* Grants Listing */}
      {filteredGrants.length === 0 ? (
        <p>No grants found matching your criteria.</p>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGrants.map((grant, idx) => {
            const slug = encodeURIComponent(grant.grantName.replace(/\s+/g, '-').toLowerCase())
            return (
              <div key={idx} className="border rounded p-4 hover:shadow-sm transition-shadow">
                <h2 className="text-xl font-semibold mb-2">{grant.grantName}</h2>
                <div className="flex items-center flex-wrap gap-2 text-sm text-gray-600 mb-2">
                  <span className="inline-flex items-center gap-2">
                    <Flag code={getCountryCode(grant.country)} className="w-6 h-4 object-cover rounded" />
                    {grant.country}
                  </span>
                  <span className="inline-flex items-center px-2 py-1 rounded bg-gray-100">
                    💰 {grant.grantAmount}
                  </span>
                </div>
                {/* **Added Deadlines Display** */}
                <div className="flex items-center flex-wrap gap-2 text-sm text-gray-600 mb-2">
                  <span className="inline-flex items-center gap-2">
                    📅 Deadline:
                    {grant.typicalDeadlines && grant.typicalDeadlines.length > 0 ? (
                      <span>{grant.typicalDeadlines.join(', ')}</span>
                    ) : (
                      <span>Not specified</span>
                    )}
                  </span>
                </div>
                <p className="text-sm text-gray-700 mb-2">
                  {grant.keyRequirements 
                    ? `Requirements: ${grant.keyRequirements.substring(0, 60)}...` 
                    : 'View details for requirements'}
                </p>
                <Link 
                  href={`/grants/${slug}`}
                  className="text-blue-600 underline text-sm"
                >
                  View Details →
                </Link>
              </div>
            )
          })}
        </div>
      )}
    </Layout>
  )
}
