import "../globals.css"

import Image from "next/image"
import Link from 'next/link';

import logo from "../../public/ibiosocietylogo.png"

export default function Navbar() {
  return (
    <div>
        <Image 
            src={logo}
            width={100}
            height={100}
            layout="fixed"
            alt="iBiomed Society logo"
            priority
        />
        <Link href="/">
            <a>Home</a>
        </Link>
        <Link href="/team">
            <a>Team</a>
        </Link>
        <Link href="/">
            <a>Student Life</a>
        </Link>
        <Link href="/events">
            <a>Events</a>
        </Link>
        <Link href="/contact">
            <a>Contact</a>
        </Link>
    </div>
  )
}