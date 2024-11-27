import "../globals.css"

import Image from "next/image"
import Link from 'next/link';

import logo from "../../public/ibiosocietylogo.png"

export default function Navbar() {
  return (
      (<div className="min-w-max border-white bg-black">
          <div className="flex items-center py-5 px-9">
            <Image 
                src={logo}
                width={60}
                height={60}
                layout="fixed"
                alt="iBiomed Society logo"
                className="mx-10"
                priority
            />
            <h1 className="inline max-w-64 font-bold">Official Student Society of McMaster iBioMed Program</h1>
          </div>
          <div className="min-w-max flex justify-center gap-14 bg-red">
            <Link href="/" className="text-base my-3 mx-6">
                <h3>Home</h3>
            </Link>
            <Link href="/team" className="text-base my-3 mx-6">
                <h3>Team</h3>
            </Link>
            <Link href="/studentlife" className="text-base my-3 mx-6">
                <h3>Student Life</h3>
            </Link>
            <Link href="/events" className="text-base my-3 mx-6">
                <h3>Events</h3>
            </Link>
            <Link href="/contact" className="text-base my-3 mx-6">
                <h3>Contact</h3>
            </Link>
          </div>
      </div>)
  );
}