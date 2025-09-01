import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-yellow-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-lg relative z-20">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/diamond-upholstery.png')] opacity-5"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex justify-between items-center py-6">
            <div className="text-3xl font-serif font-extrabold bg-gradient-to-r from-blue-500 via-blue-400 to-blue-600 bg-clip-text text-transparent drop-shadow-lg tracking-tight">
              corevist.
            </div>
            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-7">
              <Link
                href="/product1"
                className="text-blue-700 hover:text-blue-600 transition-colors font-medium text-lg"
              >
                product 1
              </Link>
              <Link
                href="/product2"
                className="text-blue-700 hover:text-blue-600 transition-colors font-medium text-lg"
              >
                product 2
              </Link>
              <Link
                href="#"
                className="text-blue-700 hover:text-blue-600 transition-colors font-medium text-lg"
              >
                About
              </Link>
              <button className="bg-gradient-to-r from-blue-400 to-blue-600 text-white px-6 py-2 rounded-xl font-bold hover:from-blue-500 hover:to-blue-700 transition-all duration-300 shadow-lg ml-4">
                Contact Us
              </button>
            </nav>
            {/* Mobile Menu Button */}
            <button className="md:hidden p-2 rounded-xl bg-gradient-to-br from-blue-400 to-blue-600 text-white shadow-lg">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Alert Bar */}
      <div className="bg-gradient-to-r from-blue-200 via-blue-100 to-blue-300 text-yellow-900 font-semibold shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <p className="text-center">
            Just Due Corevist Commerce 2024 Innovation Labs.
            <Link
              href="#"
              className="underline ml-1 hover:text-yellow-700 transition-colors"
            >
              Read the full press release here.
            </Link>
          </p>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-white  py-12 relative overflow-hidden">
        {/* Light luxury background pattern overlay */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/diamond-upholstery.png')] opacity-5"></div>
          <div className="absolute top-20 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-gradient-to-br from-yellow-200/30 to-yellow-100/10 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-5 gap-12 items-center">
            {/* Left Content - 60% width (3/5 columns) */}
            <div className="md:col-span-3">
              <h1 className="text-4xl font-serif font-extrabold text-yellow-900 mb-6 drop-shadow-xl tracking-tight">
                Dyes & Pigments for Professionals
              </h1>
              <div className="w-24 h-1 mb-6 bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 rounded-full shadow-lg"></div>
              <p className="text-lg text-yellow-800 mb-6 font-light">
                Premium dyes and pigments for textile, industrial, and creative
                applications. Trusted by professionals worldwide.
              </p>
              <div className="mb-6">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br from-blue-300 to-blue-500 shadow-lg mr-3">
                      <svg
                        className="w-5 h-5 text-blue-900"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                    <span className="text-base text-yellow-900 font-medium tracking-wide">
                      Vibrant, lasting color for every use
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br from-blue-300 to-blue-500 shadow-lg mr-3">
                      <svg
                        className="w-5 h-5 text-blue-900"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                    <span className="text-base text-yellow-900 font-medium tracking-wide">
                      Eco-friendly and safe formulations
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br from-blue-300 to-blue-500 shadow-lg mr-3">
                      <svg
                        className="w-5 h-5 text-blue-900"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                    <span className="text-base text-yellow-900 font-medium tracking-wide">
                      Expert support for your business
                    </span>
                  </li>
                </ul>
              </div>
              <p className="text-base text-yellow-800 mb-6 font-light">
                Fast shipping. Global reach. Satisfaction guaranteed.
              </p>
              <button className="bg-gradient-to-r from-blue-400 to-blue-600 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-xl hover:from-blue-500 hover:to-blue-700 transition-all duration-300 flex items-center">
                REQUEST QUOTE
                <svg
                  className="w-5 h-5 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
            {/* Right Image - 40% width (2/5 columns) */}
            <div className="md:col-span-2 flex justify-center items-center">
              <div className="w-full h-72 flex items-center justify-center">
                <div className="text-center text-yellow-700">
                  <svg
                    className="w-16 h-16 mx-auto mb-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <p className="text-lg font-semibold font-serif">
                    Dye & Pigment Visual
                  </p>
                  <p className="text-sm text-yellow-700/80">
                    Add your product image here
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* SAP Certifications - Below the two columns */}
          <div className="mt-16 flex justify-center space-x-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <svg
                  className="w-8 h-8 text-blue-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <p className="text-sm text-gray-600">
                SAP Certified Integration
                <br />
                with SAP S/4HANA
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <svg
                  className="w-8 h-8 text-blue-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <p className="text-sm text-gray-600">
                SAP Certified Integration
                <br />
                with SAP ECC
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <svg
                  className="w-8 h-8 text-blue-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <p className="text-sm text-gray-600">
                SAP Certified Integration
                <br />
                with SAP BTP
              </p>
            </div>
          </div>

          {/* Client Logos - Below the certifications */}
          <div className="mt-16">
            <div className="flex items-center justify-center space-x-8">
              <button className="p-2 text-gray-400 hover:text-gray-600">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <div className="flex items-center space-x-12">
                <div className="text-gray-400 font-semibold">
                  CHICAGO FAUCETS
                </div>
                <div className="text-gray-400 font-semibold">Nordson</div>
              </div>
              <button className="p-2 text-gray-400 hover:text-gray-600">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Manufacturers Section */}
      <section className="bg-white text-yellow-900 py-20 relative overflow-hidden">
        {/* Light luxury background pattern overlay */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://static.vecteezy.com/system/resources/previews/029/364/345/non_2x/macro-shots-of-psychedelic-tie-dye-patterns-on-different-textile-surfaces-photo.jpg')] opacity-15"></div>
          <div className="absolute top-10 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-gradient-to-br from-yellow-200/30 to-yellow-100/10 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-serif font-extrabold mb-4 text-yellow-900 drop-shadow-lg">
              Why Professionals Choose Us
            </h2>
            <div className="w-32 h-1 mx-auto mb-6 bg-gradient-to-r from-blue-400 via-blue-300 to-blue-500 rounded-full shadow-lg"></div>
            <p className="text-2xl text-yellow-800 max-w-4xl mx-auto font-light tracking-wide">
              For over 15 years, we’ve delivered world-class dyes and pigments
              trusted by leading manufacturers and creators worldwide.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <ul className="space-y-6 mb-10">
                <li className="flex items-start">
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-blue-300 to-blue-500 shadow-lg mr-4">
                    <svg
                      className="w-6 h-6 text-blue-900"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      />
                    </svg>
                  </span>
                  <span className="text-lg text-yellow-900 font-medium tracking-wide">
                    Unmatched color brilliance & consistency
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-blue-300 to-blue-500 shadow-lg mr-4">
                    <svg
                      className="w-6 h-6 text-blue-900"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      />
                    </svg>
                  </span>
                  <span className="text-lg text-yellow-900 font-medium tracking-wide">
                    Industry-leading customer retention
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-blue-300 to-blue-500 shadow-lg mr-4">
                    <svg
                      className="w-6 h-6 text-blue-900"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      />
                    </svg>
                  </span>
                  <span className="text-lg text-yellow-900 font-medium tracking-wide">
                    Expert support for every project
                  </span>
                </li>
              </ul>
              <p className="text-yellow-800 mb-10 text-lg font-light">
                We obsess over every detail, so you can focus on your craft.
                More vibrant results, fewer issues, and customers who love your
                work.
              </p>
              <button className="bg-gradient-to-r from-blue-400 to-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:from-yellow-500 hover:to-yellow-700 transition-all duration-300 flex items-center">
                Read Client Stories
                <svg
                  className="w-5 h-5 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
            <div className="bg-white text-yellow-900 p-10 rounded-2xl border-2 border-blue-200 shadow-2xl relative">
              <blockquote className="text-2xl font-serif italic mb-6 text-yellow-900 drop-shadow-lg">
                “The color quality and support are unmatched. Our products stand
                out, and our customers notice the difference.”
              </blockquote>
              <cite className="font-semibold text-yellow-700 text-lg">
                - Leading Textile Manufacturer
              </cite>
            </div>
          </div>
        </div>
      </section>

      {/* SAP Roadmap Section */}
      <section className="bg-white text-yellow-900 py-20 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/diamond-upholstery.png')] opacity-5"></div>
          <div className="absolute top-20 right-1/3 w-96 h-96 bg-gradient-to-br from-yellow-200/30 to-yellow-100/10 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-5 gap-16">
            {/* Left Image - 20% width (1/5 columns) */}
            <div className="md:col-span-1 flex justify-center items-start">
              <div className="w-full h-48 flex items-center justify-center">
                <img
                  src="/roadmap.png"
                  alt="SAP Roadmap"
                  className="max-h-40 object-contain"
                />
              </div>
            </div>

            {/* Right Content - 80% width (4/5 columns) */}
            <div className="md:col-span-4">
              <h2 className="text-5xl font-serif font-extrabold mb-4 text-yellow-900 drop-shadow-lg">
                Built for Your Roadmap. Ready for the Future.
              </h2>
              <div className="w-32 h-1 mb-8 bg-gradient-to-r from-blue-400 via-blue-300 to-blue-500 rounded-full shadow-lg"></div>
              <p className="text-2xl text-yellow-800 max-w-4xl font-light tracking-wide">
                Our dyes and pigments evolve with your needs. We’re committed to
                innovation, quality, and seamless integration with your
                processes—today and tomorrow.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Solutions Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 py-20 relative overflow-hidden">
        {/* Background 3D Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-blue-600 rounded-full opacity-20 blur-xl"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-500 rounded-full opacity-15 blur-xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-700 rounded-full opacity-10 blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-6 drop-shadow-2xl">
              Our Product Solutions
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Choose the perfect B2B eCommerce solution that fits your SAP
              integration needs
            </p>
          </div>

          {/* Product Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Corevist Direct */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 rounded-2xl p-8 shadow-2xl transform transition-all duration-500 group-hover:scale-105 group-hover:-translate-y-2 border border-blue-600/30 backdrop-blur-sm">
                <div className="text-center mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-blue-300 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg transform group-hover:rotate-6 transition-transform duration-300">
                    <svg
                      className="w-10 h-10 text-blue-900"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">
                    Corevist Direct
                  </h3>
                  <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-blue-300 mx-auto rounded-full shadow-lg"></div>
                </div>

                <p className="text-blue-100 text-center mb-6 leading-relaxed">
                  A fully-featured B2B eCommerce solution with direct SAP
                  integration for immediate deployment and maximum efficiency.
                </p>

                <div className="space-y-3">
                  <div className="flex items-center justify-center">
                    <div className="w-2 h-2 bg-blue-300 rounded-full mr-3"></div>
                    <span className="text-blue-100 text-sm">
                      Direct SAP ECC/S4HANA integration
                    </span>
                  </div>
                  <div className="flex items-center justify-center">
                    <div className="w-2 h-2 bg-blue-300 rounded-full mr-3"></div>
                    <span className="text-blue-100 text-sm">
                      Real-time data synchronization
                    </span>
                  </div>
                  <div className="flex items-center justify-center">
                    <div className="w-2 h-2 bg-blue-300 rounded-full mr-3"></div>
                    <span className="text-blue-100 text-sm">
                      Complete B2B functionality
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Corevist Next Gen */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative bg-gradient-to-br from-indigo-900 via-purple-800 to-indigo-800 rounded-2xl p-8 shadow-2xl transform transition-all duration-500 group-hover:scale-105 group-hover:-translate-y-2 border border-indigo-600/30 backdrop-blur-sm">
                <div className="absolute -top-3 -right-3 bg-gradient-to-r from-indigo-400 to-purple-400 text-indigo-900 text-xs font-bold px-4 py-2 rounded-full shadow-lg">
                  NEW
                </div>

                <div className="text-center mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-indigo-400 to-purple-400 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg transform group-hover:rotate-6 transition-transform duration-300">
                    <svg
                      className="w-10 h-10 text-indigo-900"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">
                    Corevist Next Gen
                  </h3>
                  <div className="w-20 h-1 bg-gradient-to-r from-indigo-400 to-purple-400 mx-auto rounded-full shadow-lg"></div>
                </div>

                <p className="text-indigo-100 text-center mb-6 leading-relaxed">
                  Modernizing your B2B SAP eCommerce with SAP Fiori-based user
                  experience and headless architecture for ultimate flexibility.
                </p>

                <div className="space-y-3">
                  <div className="flex items-center justify-center">
                    <div className="w-2 h-2 bg-indigo-300 rounded-full mr-3"></div>
                    <span className="text-indigo-100 text-sm">
                      SAP Fiori design principles
                    </span>
                  </div>
                  <div className="flex items-center justify-center">
                    <div className="w-2 h-2 bg-indigo-300 rounded-full mr-3"></div>
                    <span className="text-indigo-100 text-sm">
                      Headless microservices architecture
                    </span>
                  </div>
                  <div className="flex items-center justify-center">
                    <div className="w-2 h-2 bg-indigo-300 rounded-full mr-3"></div>
                    <span className="text-indigo-100 text-sm">
                      SAP BTP integration
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Corevist Headless */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-500 to-gray-600 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative bg-gradient-to-br from-gray-800 via-gray-700 to-gray-600 rounded-2xl p-8 shadow-2xl transform transition-all duration-500 group-hover:scale-105 group-hover:-translate-y-2 border border-gray-500/30 backdrop-blur-sm">
                <div className="text-center mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-gray-400 to-gray-300 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg transform group-hover:rotate-6 transition-transform duration-300">
                    <svg
                      className="w-10 h-10 text-gray-800"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 002-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">
                    Corevist Headless
                  </h3>
                  <div className="w-20 h-1 bg-gradient-to-r from-gray-400 to-gray-300 mx-auto rounded-full shadow-lg"></div>
                </div>

                <p className="text-gray-100 text-center mb-6 leading-relaxed">
                  A flexible, API-driven solution that allows you to deliver
                  custom front-end experiences while leveraging your existing
                  SAP backend.
                </p>

                <div className="space-y-3">
                  <div className="flex items-center justify-center">
                    <div className="w-2 h-2 bg-gray-300 rounded-full mr-3"></div>
                    <span className="text-gray-100 text-sm">
                      Custom frontend experiences
                    </span>
                  </div>
                  <div className="flex items-center justify-center">
                    <div className="w-2 h-2 bg-gray-300 rounded-full mr-3"></div>
                    <span className="text-gray-100 text-sm">
                      RESTful API architecture
                    </span>
                  </div>
                  <div className="flex items-center justify-center">
                    <div className="w-2 h-2 bg-gray-300 rounded-full mr-3"></div>
                    <span className="text-gray-100 text-sm">
                      Existing SAP backend integration
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Deploy Section */}
      <section className="bg-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/diamond-upholstery.png')] opacity-5"></div>
          <div className="absolute top-24 right-1/3 w-96 h-96 bg-gradient-to-br from-yellow-200/30 to-yellow-100/10 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            {/* Main Content */}
            <div className="mb-14">
              <h2 className="text-5xl font-serif font-extrabold text-yellow-900 mb-6 drop-shadow-lg tracking-tight">
                Fast, Reliable Delivery—Worldwide
              </h2>
              <div className="w-32 h-1 mx-auto mb-8 bg-gradient-to-r from-blue-400 via-blue-300 to-blue-500 rounded-full shadow-lg"></div>
              <p className="text-2xl text-yellow-800 max-w-4xl mx-auto leading-relaxed mb-10 font-light">
                Get the dyes and pigments you need, when you need them. Our
                logistics network ensures prompt, safe, and professional
                delivery to your door.
              </p>
            </div>
            {/* Feature Grid */}
            <div className="grid md:grid-cols-3 gap-8 mb-14">
              <div className="group">
                <div className="relative bg-white border border-blue-200 rounded-2xl p-8 text-center shadow-xl overflow-hidden transition-all duration-500 group-hover:scale-105 group-hover:-translate-y-2">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-300 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:rotate-6 transition-transform duration-300 border-2 border-blue-100">
                    <svg
                      className="w-8 h-8 text-blue-900"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-yellow-900 mb-2 font-serif tracking-wide">
                    Lightning Fast
                  </h3>
                  <p className="text-yellow-800 text-base leading-relaxed font-light">
                    Delivery in as little as 2 days for most locations
                  </p>
                </div>
              </div>
              <div className="group">
                <div className="relative bg-white border border-blue-200 rounded-2xl p-8 text-center shadow-xl overflow-hidden transition-all duration-500 group-hover:scale-105 group-hover:-translate-y-2">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-300 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:rotate-6 transition-transform duration-300 border-2 border-blue-100">
                    <svg
                      className="w-8 h-8 text-blue-900"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-yellow-900 mb-2 font-serif tracking-wide">
                    Zero Risk
                  </h3>
                  <p className="text-yellow-800 text-base leading-relaxed font-light">
                    Secure packaging and full order tracking
                  </p>
                </div>
              </div>
              <div className="group">
                <div className="relative bg-white border border-blue-200 rounded-2xl p-8 text-center shadow-xl overflow-hidden transition-all duration-500 group-hover:scale-105 group-hover:-translate-y-2">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-300 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:rotate-6 transition-transform duration-300 border-2 border-blue-100">
                    <svg
                      className="w-8 h-8 text-blue-900"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-yellow-900 mb-2 font-serif tracking-wide">
                    ROI Focused
                  </h3>
                  <p className="text-yellow-800 text-base leading-relaxed font-light">
                    Competitive pricing and satisfaction guarantee
                  </p>
                </div>
              </div>
            </div>
            <div className="relative group mb-10">
              <button className="relative bg-gradient-to-r from-blue-400 to-blue-600 text-white px-12 py-5 rounded-2xl font-bold text-2xl hover:from-yellow-500 hover:to-yellow-700 transition-all duration-500 transform group-hover:scale-105 group-hover:-translate-y-1 shadow-2xl flex items-center mx-auto border border-yellow-200">
                REQUEST QUOTE
                <svg
                  className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
            <div className="mt-10 flex flex-wrap justify-center items-center gap-8 text-yellow-700">
              <div className="flex items-center space-x-2">
                <svg
                  className="w-5 h-5 text-blue-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414L9 12.586l4.293-4.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-base font-medium">ISO Certified</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg
                  className="w-5 h-5 text-blue-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414L9 12.586l4.293-4.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-base font-medium">Enterprise Ready</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg
                  className="w-5 h-5 text-blue-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414L9 12.586l4.293-4.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-base font-medium">24/7 Support</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-blue-900 via-blue-600 to-blue-900 py-20 pb-8 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 left-1/2 transform -translate-x-1/2 w-[600px] h-64 bg-gradient-to-br from-yellow-200/40 via-blue-200/30 to-yellow-300/30 rounded-full blur-3xl"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/diamond-upholstery.png')] opacity-10"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col sm:flex-row gap-6 mb-20 justify-center">
            <div className="group relative">
              <button className="relative bg-gradient-to-r from-blue-400 to-blue-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:from-blue-500 hover:to-yellow-700 transition-all duration-500 transform group-hover:scale-105 group-hover:-translate-y-1 shadow-2xl flex items-center justify-center border border-yellow-200">
                Contact Sales
              </button>
            </div>
            <div className="group relative">
              <button className="relative bg-gradient-to-r from-blue-400 to-blue-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:from-blue-500 hover:to-blue-700 transition-all duration-500 transform group-hover:scale-105 group-hover:-translate-y-1 shadow-2xl flex items-center justify-center border border-blue-200">
                Request Sample
              </button>
            </div>
          </div>
          <div className="grid lg:grid-cols-5 gap-12 mb-8">
            <div className="lg:col-span-2">
              <div className="bg-gradient-to-br from-blue-100/50 to-blue-50/50 backdrop-blur-sm border border-yellow-200 rounded-2xl p-8">
                <h4 className="font-bold text-2xl text-yellow-900 mb-6 flex items-center">
                  SALES
                </h4>
                <p className="text-4xl font-bold text-yellow-900 mb-4 tracking-tight">
                  +1 800 123 4567
                </p>
                <p className="text-white text-lg leading-relaxed mb-6">
                  Our product experts are here to answer any questions you have
                  about our dyes and pigments.
                </p>
                <div className="flex items-center space-x-4">
                  <div className="w-3 h-3 bg-green-800 rounded-full animate-pulse"></div>
                  <span className="text-green-700 text-sm font-medium">
                    Available 24/7
                  </span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-bold text-xl text-yellow-900 mb-6 flex items-center">
                COMPANY
              </h4>
              <ul className="space-y-4">
                <li>
                  <Link
                    href="#"
                    className="text-white hover:text-blue-900 transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 group-hover:scale-150 transition-transform duration-300"></span>
                    Our Story
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-white hover:text-blue-900 transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 group-hover:scale-150 transition-transform duration-300"></span>
                    Careers
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-white hover:text-blue-900 transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 group-hover:scale-150 transition-transform duration-300"></span>
                    Press Room
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-white hover:text-blue-900 transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 group-hover:scale-150 transition-transform duration-300"></span>
                    News & Media
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-xl text-yellow-900 mb-6 flex items-center">
                PRODUCT
              </h4>
              <ul className="space-y-4">
                <li>
                  <Link
                    href="#"
                    className="text-white hover:text-blue-900 transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 group-hover:scale-150 transition-transform duration-300"></span>
                    Textile Dyes
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-white hover:text-blue-900 transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 group-hover:scale-150 transition-transform duration-300"></span>
                    Pigments
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-white hover:text-blue-900 transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 group-hover:scale-150 transition-transform duration-300"></span>
                    Eco-Friendly Solutions
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-xl text-yellow-900 mb-6 flex items-center">
                RESOURCES
              </h4>
              <ul className="space-y-4">
                <li>
                  <Link
                    href="#"
                    className="text-white hover:text-blue-900 transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 group-hover:scale-150 transition-transform duration-300"></span>
                    Client Stories
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-white hover:text-blue-900 transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 group-hover:scale-150 transition-transform duration-300"></span>
                    Case Studies
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-white hover:text-blue-900 transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 group-hover:scale-150 transition-transform duration-300"></span>
                    Webinars
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-white hover:text-blue-900 transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 group-hover:scale-150 transition-transform duration-300"></span>
                    ROI Calculator
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-yellow-200 py-2">
            <div className="flex flex-col lg:flex-row justify-between items-center">
              <div className="flex flex-col lg:flex-row items-center lg:space-y-0 lg:space-x-8 mb-0 lg:mb-0">
                <span className="text-white text-lg">
                  © 2025 Dyes & Pigments Inc. All rights reserved.
                </span>
                <div className="flex space-x-6 text-sm">
                  <Link
                    href="#"
                    className="text-white hover:text-blue-900 transition-colors duration-300"
                  >
                    Privacy Policy
                  </Link>
                  <Link
                    href="#"
                    className="text-white hover:text-blue-900 transition-colors duration-300"
                  >
                    Cookie Policy
                  </Link>
                  <Link
                    href="#"
                    className="text-white hover:text-blue-900 transition-colors duration-300"
                  >
                    Terms of Use
                  </Link>
                </div>
              </div>

              <div className="flex items-center space-x-8">
                <div className="text-3xl font-serif font-extrabold bg-gradient-to-r from-blue-500 via-blue-400 to-blue-600 bg-clip-text text-transparent drop-shadow-lg tracking-tight">
                  corevist.
                </div>
                <div className="flex space-x-4">
                  <Link
                    href="#"
                    className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-500 rounded-2xl flex items-center justify-center text-white hover:from-yellow-500 hover:to-yellow-600 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 shadow-lg hover:shadow-xl"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </Link>
                  <Link
                    href="#"
                    className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-500 rounded-2xl flex items-center justify-center text-white hover:from-yellow-500 hover:to-yellow-600 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 shadow-lg hover:shadow-xl"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.665 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                    </svg>
                  </Link>
                  <Link
                    href="#"
                    className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-500 rounded-2xl flex items-center justify-center text-white hover:from-yellow-500 hover:to-yellow-600 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 shadow-lg hover:shadow-xl"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
