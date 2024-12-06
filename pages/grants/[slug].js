import Layout from '../../components/Layout'
import grantsData from '../../data/grants.json'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function GrantDetailPage() {
  const router = useRouter()
  const { slug } = router.query

  // Find the grant by slug
  // Since we created slug by `grantName.replace(/\s+/g, '-').toLowerCase()`
  const grant = grantsData.find(g => g.grantName.replace(/\s+/g, '-').toLowerCase() === slug)

  if (!grant) {
    return (
      <Layout>
        <h1 className="text-2xl font-bold">Grant not found</h1>
        <Link href="/grants" className="underline text-blue-600">Back to Grants</Link>
      </Layout>
    )
  }

  return (
    <Layout>
      <Link href="/grants" className="text-blue-600 underline mb-4 inline-block">← Back to Grants</Link>
      <h1 className="text-3xl font-bold mb-4">{grant.grantName}</h1>
      <p className="mb-2"><strong>Funding Organization:</strong> {grant.fundingOrganization}</p>
      <p className="mb-2">
        <strong>Website:</strong> <a href={grant.website} className="underline text-blue-600" target="_blank" rel="noopener noreferrer">{grant.website}</a>
      </p>
      <p className="mb-2"><strong>Country:</strong> {grant.country}</p>
      <p className="mb-2"><strong>Grant Amount:</strong> {grant.grantAmount}</p>
      <p className="mb-2"><strong>Disciplines:</strong> {grant.eligibleDisciplines.join(', ')}</p>
      <p className="mb-2"><strong>Application Frequency:</strong> {grant.applicationFrequency}</p>
      <p className="mb-2"><strong>Key Requirements:</strong> {grant.keyRequirements}</p>
      <p className="mb-2"><strong>Typical Deadlines:</strong> {grant.typicalDeadlines.join(', ')}</p>
    </Layout>
  )
}
