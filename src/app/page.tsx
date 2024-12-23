import Link from "next/link";
import Image from "next/image";
import { api, HydrateClient } from "~/trpc/server";

export default async function Home() {
  void api.post.getLatest.prefetch();

  return (
    <HydrateClient>
      <main className="p-4 sm:p-6 md:p-8">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <header className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-blue-600">
              Vandelay Industries
            </h1>
            <p className="text-lg md:text-xl text-gray-700">
              Importers. Exporters. Masters of Innovation.
            </p>
          </header>

          {/* About Section */}
          <section className="mb-10 bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-800">About Us</h2>
            <p className="text-base md:text-lg leading-relaxed text-gray-600">
              Vandelay Industries is a global leader in the import and export industry. From latex manufacturing to marine biology, we redefine innovation with our unique blend of creativity and expertise.
            </p>
            <div className="flex justify-center mt-6">
              <Image 
                src="https://vandelay-assets.s3.us-east-1.amazonaws.com/Vandelay_Industries-removebg-preview.png" 
                alt="Vandelay Industries Logo"
                
                width={500}
                height={300}
              />
            </div>
          </section>

          {/* Services Section */}
          <section className="mb-10 bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-800">Our Services</h2>
            <ul className="list-disc list-inside space-y-3 text-base md:text-lg text-gray-600">
              <li>Global import and export logistics</li>
              <li>Latex manufacturing for various industries</li>
              <li>Marine biology consulting services</li>
              <li>Architectural design and innovation</li>
            </ul>
          </section>

          {/* Featured Projects */}
          <section className="mb-10 bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-800">Featured Projects</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Latex Revolution</h3>
                <p className="text-sm text-gray-600">
                  A breakthrough in sustainable latex manufacturing for the global market.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Marine Biology Insights</h3>
                <p className="text-sm text-gray-600">
                  Collaborative research projects that enhance our understanding of marine ecosystems.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Architectural Wonders</h3>
                <p className="text-sm text-gray-600">
                  Innovative designs that push the boundaries of architecture and creativity.
                </p>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section className="text-center py-10 bg-gray-100 rounded-lg">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">
              Partner with Vandelay Industries
            </h2>
            <p className="text-base md:text-lg text-gray-600 mb-6">
              Let’s build the future together. Contact us today to learn how we can help you.
            </p>
            <Link href="/contact" legacyBehavior>
              <a className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors">
                Contact Us
              </a>
            </Link>
          </section>
        </div>
      </main>
    </HydrateClient>
  );
}
