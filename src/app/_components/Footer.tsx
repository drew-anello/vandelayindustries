"use client";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-800 p-4 mt-auto">
            <div className="container mx-auto">
                <div className="flex justify-center items-center">
                    <p className="text-gray-300 text-sm">
                        © {currentYear} Created by Drew Anello. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}