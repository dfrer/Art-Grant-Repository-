import Header from './Header'
import Footer from './Footer'

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-800">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-6">
        {children}
      </main>
      <Footer />
    </div>
  )
}
