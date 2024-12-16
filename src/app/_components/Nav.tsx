import Link from 'next/link';
import Image from 'next/image';
export default function Nav() {
    return (
        (<nav className="bg-gray-800 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex items-center">
                <Image src="https://vandelay-assets.s3.us-east-1.amazonaws.com/Vandelay_Industries.webp" alt="Vandelay Industries" width={100} height={100} />
                    <div className="text-white text-2xl font-bold">
                        <Link href="/">Vandelay Industries</Link>
                    </div>
                </div>
                <ul className="flex space-x-4">
                    <li>
                        <Link href="/about" className="text-gray-300 hover:text-white">
                            About
                        </Link>
                    </li>
                    <li>
                        <Link href="/services" className="text-gray-300 hover:text-white">
                            Services
                        </Link>
                    </li>
                    <li>
                        <Link href="/contact" className="text-gray-300 hover:text-white">
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>)
    );
};

