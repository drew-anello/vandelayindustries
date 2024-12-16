import Link from 'next/link';

const Nav: React.FC = () => {
    return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-white text-lg font-bold">
                    <Link href="/">Vandelay Industries</Link>
                </div>
                <ul className="flex space-x-4">
                    <li>
                        <Link href="/about">
                            <a className="text-gray-300 hover:text-white">About</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/services">
                            <a className="text-gray-300 hover:text-white">Services</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/contact">
                            <a className="text-gray-300 hover:text-white">Contact</a>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Nav;