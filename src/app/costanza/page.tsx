import Image from "next/image";

import { HydrateClient } from "~/trpc/server";

export default async function Costanza() {
    return (
        <HydrateClient>
            <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 p-6">
                <div className="max-w-4xl mx-auto space-y-12">
                    <h1 className="text-5xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 py-8">
                        Costanza API
                    </h1>

                    <section className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                        <h2 className="text-3xl font-bold mb-4 text-gray-800">Overview</h2>
                        <p className="text-gray-600 leading-relaxed">
                            The Costanza API is a serverless application built with FastAPI. It provides famous quotes by George and Frank Costanza from the television show &quot;Seinfeld&quot;.
                        </p>
                        <section className="flex justify-center">
                        <Image 
                            src="https://vandelay-assets.s3.us-east-1.amazonaws.com/jerk-store.gif" 
                            alt="Jerk Store GIF"
                            className="rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                            width={500}
                            height={300}
                        />
                    </section>
                    </section>

                    <section className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                        <h2 className="text-3xl font-bold mb-4 text-gray-800">Features</h2>
                        <ul className="space-y-3">
                            {['Fetch random quotes', 'Retrieve quotes by character (George or Frank Costanza)', 'Retrieve random quote by character (George or Frank)'].map((feature) => (
                                <li key={feature} className="flex items-center space-x-2">
                                    <span className="text-purple-500">•</span>
                                    <span className="text-gray-600">{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </section>

                    <section className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                        <h2 className="text-3xl font-bold mb-4 text-gray-800">Usage</h2>
                        <p className="text-gray-600 mb-4">Access the following endpoints to interact with the API:</p>
                        <ul className="space-y-3 bg-gray-50 p-6 rounded-lg">
                            {[
                                {
                                    endpoint: 'GET /getquotes/ - Retrieve all quotes',
                                    url: 'http://costanza.vandelayindustries.biz/getquotes'
                                },
                                {
                                    endpoint: 'GET /quote/random - Retrieve a random quote',
                                    url: 'http://costanza.vandelayindustries.biz/quote/random'
                                },
                                {
                                    endpoint: `GET /quotes/{'{character}'} - Retrieve all quotes by character (george or frank)`,
                                    urls: [
                                        'http://costanza.vandelayindustries.biz/quotes/george',
                                        'http://costanza.vandelayindustries.biz/quotes/frank'
                                    ]
                                },
                                {
                                    endpoint: `GET /{'{character}'}/random - Retrieve a random quote by character (george or frank)`,
                                    urls: [
                                        'http://costanza.vandelayindustries.biz/george/random',
                                        'http://costanza.vandelayindustries.biz/frank/random'
                                    ]
                                }
                            ].map(({ endpoint, url, urls }) => (
                                <li key={endpoint} className="space-y-2">
                                    <div className="flex items-center space-x-2 font-mono text-sm">
                                        <span className="text-green-500">→</span>
                                        <span className="text-gray-700">{endpoint}</span>
                                    </div>
                                    {url ? (
                                        <div className="ml-6 text-sm text-purple-600">
                                            {url}
                                        </div>
                                    ) : (
                                        urls?.map((url, index) => (
                                            <div key={index} className="ml-6 text-sm text-purple-600">
                                                {url}
                                            </div>
                                        ))
                                    )}
                                </li>
                            ))}
                        </ul>
                    </section>


                </div>
            </main>
        </HydrateClient>
    );
}
