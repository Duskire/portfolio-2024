import Image from 'next/image'
import Link from 'next/link'
import { useEffect } from "react";

export default function Navbar() {
    return (
        <div className="absolute min-h-screen dark:bg-secondary-500">
            <div className="p-10 font-semibold text-3xl">
                <ul>
                    <li className="p-2">Home</li>
                    <li className="p-2">Projects</li>
                    <li className="p-2">About</li>
                    <li className="p-2">Contact</li>
                </ul>
                <hr className="border-2 rounded dark:bg-background-800" />
            </div>
        </div>
    )
}