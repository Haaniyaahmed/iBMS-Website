'use client'

import "../globals.css"
import "./navbar.css"

import Image from "next/image"
import Link from 'next/link';

import logo from "../../public/ibiosocietylogo.png"

export default function Navbar() {
  return (
      (<div className="min-w-max border-white bg-black">
          <div className="flex items-center py-5 px-9">
            <Image 
                src={logo}
                width={40}
                height={40}
                layout="fixed"
                alt="iBiomed Society logo"
                className="mx-10"
                priority
            />
            <h1 className="inline max-w-64 font-bold text-base">Official Student Society of McMaster iBioMed Program</h1>
          </div>
          <div className="text-base min-w-max flex justify-center gap-14 bg-red">
            <Link href="/" className="text-base my-3 mx-6 nav-link">
                Home
            </Link>
            <Link href="/team" className="nav-link text-base my-3 mx-6">
                Team
            </Link>
            <Link href="/studentlife" className="text-base my-3 mx-6 nav-link">
                Student Life
            </Link>
            <Link href="/events" className="text-base my-3 mx-6 nav-link">
                Events
            </Link>
            <Link href="/contact" className="text-base my-3 mx-6 nav-link">
                Contact
            </Link>
          </div>
          <style>
            {`
            
            `}
          </style>
      </div>)
  );
}