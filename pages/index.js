import Head from 'next/head';
import grants from '../data/grants.json';

export default function Home() {
  return (
    <div className="p-6">
      <Head>
        <title>Art Grants Directory</title>
      </Head>
      <h1 className="text-2xl font-bold mb-4">Art Grants</h1>
      <ul className="space-y-4">
        {grants.map((grant, idx) => (
          <li key={idx} className="border p-4 rounded">
            <h2 className="text-xl font-semibold">{grant.grantName}</h2>
            <p>Country: {grant.country}</p>
            <p>Amount: {grant.grantAmount}</p>
            <a className="text-blue-500 underline" href={grant.website} target="_blank" rel="noopener noreferrer">
              Visit Website
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
