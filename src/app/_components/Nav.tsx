"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Costanza from '../costanza/page';
export default function Nav() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex items-center space-x-2">
                    <Image
                        src="https://vandelay-assets.s3.us-east-1.amazonaws.com/Vandelay_Industries.webp"
                        alt="Vandelay Industries"
                        width={50}
                        height={50}
                    />
                    <div className="text-white text-xl font-bold">
                        <Link href="/">Vandelay Industries</Link>
                    </div>
                </div>

                <button
                    onClick={toggleMenu}
                    className="block md:hidden text-gray-300 hover:text-white focus:outline-none"
                    aria-expanded={isOpen}
                    aria-label="Toggle navigation"
                >
                    <svg
                        className="h-6 w-6"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        viewBox="0 0 24 24"
                    >
                        {isOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
                        )}
                    </svg>
                </button>
                <ul
                    className={`absolute top-16 left-0 w-full bg-gray-800 md:static md:flex md:space-x-4 md:w-auto transition-all duration-300 ease-in-out ${
                        isOpen ? 'block' : 'hidden'
                    }`}
                >
                    <li className="border-b border-gray-700 md:border-none">
                        <Link href="/costanza" className="block px-4 py-2 text-gray-300 hover:text-white">
                            Costanza API
                        </Link>
                    </li>
                 
                    <li className="border-b border-gray-700 md:border-none">
                        <Link href="/contact" className="block px-4 py-2 text-gray-300 hover:text-white">
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
