import Layout from '../components/Layout'

export default function AboutPage() {
  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-4">About This Directory</h1>
      <p className="text-gray-700">
        This site compiles art grants from various sources across the US and Canada. 
        Our goal is to help artists find funding opportunities more easily. 
        We do our best to keep the information updated, but always verify details on official grant websites.
      </p>
    </Layout>
  )
}
