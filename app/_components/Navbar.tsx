'use client'

import "../globals.css"
import "./navbar.css"
import logo from "../../public/ibiosocietylogo.png"

import Image from "next/image"
import Link from 'next/link';
import { Menu, X } from "lucide-react"; 
import { useState } from "react"

export default function Navbar() {

	const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
      <div className="min-w-max border-white bg-black">
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
					<h1 className="inline max-w-64 font-bold text-base text-white">Official Student Society of McMaster iBioMed Program</h1>
				</div>
				<nav className="bg-mac-dark-red text-white">
					{/* Desktop & Tablet Navbar */}
					<div className="hidden md:flex text-sm md:text-base lg:text-lg min-w-max justify-center gap-8 lg:gap-14 p-4">
						<Link href="/" className="nav-link hover:text-neutral-300">Home</Link>
						<Link href="/team" className="nav-link hover:text-neutral-300">Team</Link>
						<Link href="/studentlife" className="nav-link hover:text-neutral-300">Student Life</Link>
						<Link href="/events" className="nav-link hover:text-neutral-300">Events</Link>
						<Link href="/shop" className="nav-link hover:text-neutral-300">Shop</Link>
						<Link href="/contact" className="nav-link hover:text-neutral-300">Contact</Link>
					</div>

					{/* Mobile Navbar with Hamburger Menu */}
					<div className="md:hidden p-4 flex justify-between items-center">
						<button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white focus:outline-none">
							{isMenuOpen ? <X size={28} /> : <Menu size={28} />}
						</button>
					</div>

					{/* Mobile Menu Dropdown */}
					{isMenuOpen && (
						<div className="flex flex-col items-center space-y-4 p-4 text-sm bg-mac-dark-red">
							<Link href="/" className="nav-link hover:text-neutral-300" onClick={() => setIsMenuOpen(false)}>Home</Link>
							<Link href="/team" className="nav-link hover:text-neutral-300" onClick={() => setIsMenuOpen(false)}>Team</Link>
							<Link href="/studentlife" className="nav-link hover:text-neutral-300" onClick={() => setIsMenuOpen(false)}>Student Life</Link>
							<Link href="/events" className="nav-link hover:text-neutral-300" onClick={() => setIsMenuOpen(false)}>Events</Link>
							<Link href="/shop" className="nav-link hover:text-neutral-300" onClick={() => setIsMenuOpen(false)}>Shop</Link>
							<Link href="/contact" className="nav-link hover:text-neutral-300" onClick={() => setIsMenuOpen(false)}>Contact</Link>
						</div>
					)}
				</nav>
      </div>
  );
}