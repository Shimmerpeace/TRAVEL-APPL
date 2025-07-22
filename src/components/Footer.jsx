//components/Footer.jsx
export default function Footer() {
    return (
      <footer className="bg-gray-900 text-gray-300 py-8">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-xl font-semibold">Travel App</h2>
            <p className="text-sm text-gray-400">© {new Date().getFullYear()} Travel Inc. All rights reserved.</p>
          </div>
  
          <nav className="space-x-6">
            <a
              href="#"
              className="hover:text-white transition-colors duration-300 text-sm"
            >
              About
            </a>
            <a
              href="#"
              className="hover:text-white transition-colors duration-300 text-sm"
            >
              Contact
            </a>
            <a
              href="#"
              className="hover:text-white transition-colors duration-300 text-sm"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="hover:text-white transition-colors duration-300 text-sm"
            >
              Terms of Service
            </a>
          </nav>
        </div>
      </footer>
    );
  }