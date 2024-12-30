import Link from "next/link";
import Image from "next/image";

export default function Contact() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 p-6">
      <div className="mx-auto max-w-4xl space-y-12">
        {/* Header Section */}
        <h1 className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text py-8 text-center text-5xl font-extrabold text-transparent">
          Contact Us
        </h1>

        {/* Contact Section */}
        <section className="rounded-xl bg-white p-8 shadow-lg transition-shadow duration-300 hover:shadow-xl">
          <h2 className="mb-4 text-3xl font-bold text-gray-800">
            Get in Touch
          </h2>
          <p className="mb-6 leading-relaxed text-gray-600">
            Reach out to us via LinkedIn or GitHub. Whether you&apos;re looking
            to collaborate or simply connect, we&apos;d love to hear from you!
          </p>

          <div className="grid grid-cols-1 justify-items-center gap-6 sm:grid-cols-2">
            {/* LinkedIn */}
            <div>
              <Link
                href="https://linkedin.com/in/drew-anello"
                target="_blank"
                legacyBehavior
              >
                <a className="inline-block rounded-lg bg-blue-600 px-6 py-3 text-lg font-semibold text-white transition-colors hover:bg-blue-700">
                  Visit LinkedIn
                </a>
              </Link>
            </div>

            {/* GitHub */}
            <div>
              <Link
                href="https://github.com/drew-anello"
                target="_blank"
                legacyBehavior
              >
                <a className="inline-block rounded-lg bg-gray-800 px-6 py-3 text-lg font-semibold text-white transition-colors hover:bg-gray-900">
                  Visit GitHub
                </a>
              </Link>
            </div>
          </div>
        </section>

        {/* Image Section */}
        <section className="flex justify-center">
          <Image
            src="https://vandelay-assets.s3.us-east-1.amazonaws.com/George-Costanza-working-for-Costanza-and-Son.jpg"
            alt="Networking illustration"
            className="rounded-xl shadow-lg transition-shadow duration-300 hover:shadow-xl"
            width={600}
            height={400}
          />
        </section>
      </div>
    </main>
  );
}
