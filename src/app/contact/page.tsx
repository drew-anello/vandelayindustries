import Link from "next/link";
import Image from "next/image";

export default function Contact() {
    return (
        <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 p-6">
            <div className="max-w-4xl mx-auto space-y-12">
                {/* Header Section */}
                <h1 className="text-5xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-blue-600 py-8">
                    Contact Us
                </h1>

                {/* Contact Section */}
                <section className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                    <h2 className="text-3xl font-bold mb-4 text-gray-800">Get in Touch</h2>
                    <p className="text-gray-600 leading-relaxed mb-6">
                        Reach out to us via LinkedIn or GitHub. Whether you&apos;re looking to collaborate or simply connect, we&apos;d love to hear from you!
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 justify-items-center">
                        {/* LinkedIn */}
                        <div>
                            <Link href="https://linkedin.com/in/your-profile" target="_blank" legacyBehavior>
                                <a className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors">
                                    Visit LinkedIn
                                </a>
                            </Link>
                        </div>

                        {/* GitHub */}
                        <div>
                            <Link href="https://github.com/drew-anello" target="_blank" legacyBehavior>
                                <a className="inline-block px-6 py-3 bg-gray-800 text-white rounded-lg font-semibold text-lg hover:bg-gray-900 transition-colors">
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
                        className="rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                        width={600}
                        height={400}
                    />
                </section>
            </div>
        </main>
    );
}
