// components/Footer.js
export default function Footer() {
    return (
      <footer className="bg-gray-100 mt-8">
        <div className="container mx-auto p-4 text-gray-600 text-sm">
          © {new Date().getFullYear()} Art Grants Directory. All rights reserved.
        </div>
      </footer>
    )
  }
  