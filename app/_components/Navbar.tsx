'use client'

import "../globals.css"
import "./navbar.css"
import logo from "../../public/ibiosocietylogo.png"

import Image from "next/image"
import Link from 'next/link';
import { Menu, X, ChevronDown } from "lucide-react"; 
import { useState } from "react"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isStudentLifeOpen, setIsStudentLifeOpen] = useState(false);

  return (
    <div className="w-full border-white bg-black">
      <div className="flex items-center py-5 px-4 sm:px-9">
        <Image
          src={logo}
          width={40}
          height={40}
          layout="fixed"
          alt="iBiomed Society logo"
          className="mr-4 sm:mr-10" 
          priority
        />
        <h1 className="mx-auto font-bold text-sm sm:text-base md:text-lg text-white">
          Official Student Society of McMaster iBioMed Program
        </h1>
      </div>
      <nav className="bg-mac-dark-red text-white relative">
        
        {/* Desktop & Tablet Navbar */}
        <div className="hidden md:flex text-sm md:text-base lg:text-lg min-w-max justify-center gap-8 lg:gap-14 p-4">
          <Link href="/" className="nav-link hover:text-neutral-300">Home</Link>
          <Link href="/team" className="nav-link hover:text-neutral-300">Team</Link>

          {/* Student Life Dropdown (Desktop) */}
          <div className="relative">
          <button 
            className="nav-link flex items-center hover:text-neutral-300 focus:outline-none"
            onClick={() => setIsStudentLifeOpen(!isStudentLifeOpen)}
          >
            Student Life <ChevronDown size={16} className="ml-1" />
          </button>

            {isStudentLifeOpen && (
              <div className="absolute left-0 mt-2 flex flex-col bg-mac-dark-red text-white shadow-lg border border-white z-50">
                <Link href="/studentlife/tech4good" className="p-2 hover:bg-neutral-700">Tech4Good</Link>
                <Link href="/studentlife/clubs" className="p-2 hover:bg-neutral-700">Clubs</Link>
                {/* <Link href="/studentlife/resources" className="p-2 hover:bg-neutral-700">Resources</Link> */}
              </div>
            )}
          </div>

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
            
            {/* Student Life Dropdown (Mobile) */}
            <button 
              className="flex items-center hover:text-neutral-300 focus:outline-none"
              onClick={() => setIsStudentLifeOpen(!isStudentLifeOpen)}
            >
              Student Life <ChevronDown size={16} className="ml-1" />
            </button>
            {isStudentLifeOpen && (
              <div className="flex flex-col items-center space-y-2">
                <Link href="/studentlife/clubs" className="nav-link hover:text-neutral-300" onClick={() => setIsMenuOpen(false)}>Clubs</Link>
                <Link href="/studentlife/tech4good" className="nav-link hover:text-neutral-300" onClick={() => setIsMenuOpen(false)}>Tech4Good</Link>
                {/* <Link href="/studentlife/resources" className="nav-link hover:text-neutral-300" onClick={() => setIsMenuOpen(false)}>Resources</Link> */}
              </div>
            )}

            <Link href="/events" className="nav-link hover:text-neutral-300" onClick={() => setIsMenuOpen(false)}>Events</Link>
            <Link href="/shop" className="nav-link hover:text-neutral-300" onClick={() => setIsMenuOpen(false)}>Shop</Link>
            <Link href="/contact" className="nav-link hover:text-neutral-300" onClick={() => setIsMenuOpen(false)}>Contact</Link>
          </div>
        )}
      </nav>
    </div>
  );
}
