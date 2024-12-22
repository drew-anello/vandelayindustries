import Link from "next/link";

import { api, HydrateClient } from "~/trpc/server";

export default async function Costanza() {
    return (
        <HydrateClient>
            <main className="p-4">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-3xl font-bold mb-4">Costazna API</h1>
                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-2">Overview</h2>
                        <p>
                            The Costazna API is a serverless application built with FastAPI. It provides famous quotes by George and Frank Costanza from the television show &quot;Seinfeld&quot;.
                        </p>
                    </section>
                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-2">Features</h2>
                        <ul className="list-disc list-inside">
                            <li>Fetch random quotes.</li>
                            <li>Retrieve quotes by character (George or Frank Costanza).</li>
                            <li>Retrieve random quote by character (George or Frank).</li>
                        </ul>
                    </section>
                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-2">Getting Started</h2>
                        <h3 className="text-xl font-semibold mb-1">Prerequisites</h3>
                        <ul className="list-disc list-inside">
                            <li>Python 3.11 or higher</li>
                            <li>pip package manager</li>
                        </ul>
                    </section>
                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-2">Usage</h2>
                        <p>Access the following endpoints to interact with the API:</p>
                        <ul className="list-disc list-inside">
                            <li>GET /getquotes/ - Retrieve all quotes.</li>
                            <li>GET /quote/random - Retrieve a random quote.</li>
                            <li>GET /quotes/{`{character}`} - Retrieve all quotes by character (george or frank).</li>
                            <li>GET /{`{character}`}/random - Retrieve a random quote by character (george or frank).</li>
                        </ul>
                    </section>
                    <section>
                        <h2 className="text-2xl font-semibold mb-2">Example</h2>
                        <pre className="bg-gray-100 p-4 rounded">
                            <code>curl https://costanza.vandelayindustries.biz/quotes/george</code>
                        </pre>
                    </section>
                </div>
            </main>
        </HydrateClient>
    );
}
