'use client';

import Image from "next/image";
import Link from 'next/link';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer>
            {/* Top section*/}
            <div className="w-full bg-gray-900 text-white py-8">
                <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between">
                    {/* Left section - Social media and email */}
                    <div className="flex flex-col space-y-4 md:w-1/4">
                        <h3 className="text-lg font-semibold">Connect</h3>
                        <div className="flex space-x-4">
                            <Link href="https://www.instagram.com/ibiomedsociety/" target="_blank">
                                <Image src="/socials/ig.png" width={24} height={24} alt="Instagram" className="hover:opacity-75" />
                            </Link>
                            <Link href="https://www.linkedin.com/company/ibiomed-society/" target="_blank">
                                <Image src="/socials/linkedin.png" width={24} height={24} alt="LinkedIn" className="hover:opacity-75" />
                            </Link>
                            <Link href="mailto:ibiomedsociety@mcmaster.ca">
                                <Image src="/socials/mail.png" width={24} height={24} alt="Email" className="hover:opacity-75" />
                            </Link>
                        </div>
                    </div>

                    {/* Middle sections - Navigation links */}
                    <div className="flex flex-wrap md:w-3/4 justify-around mt-6 md:mt-0 space-y-3 md:space-y-0">
                        <div className="flex flex-col space-y-1 md:space-y-0 md:mr-8">
                            <h3 className="text-lg font-semibold">Society</h3>
                            <div className="flex space-x-4">
                                <Link href="/about" className="hover:text-gray-400">About Us</Link>
                                <Link href="/team" className="hover:text-gray-400">Team</Link>
                                <Link href="/contact" className="hover:text-gray-400">Contact</Link>
                            </div>
                        </div>
                        
                        <div className="flex flex-col space-y-1 md:space-y-0 md:mr-8">
                            <h3 className="text-lg font-semibold">Resources</h3>
                            <div className="flex space-x-4">
                                <Link href="/studentlife/clubs" className="hover:text-gray-400">Clubs</Link>
                                <Link href="/studentlife/mentorship" className="hover:text-gray-400">Mentorship</Link>
                                <Link href="/studentlife/resources" className="hover:text-gray-400">Resources</Link>
                            </div>
                        </div>
                        
                        <div className="flex flex-col space-y-1 md:space-y-0">
                            <h3 className="text-lg font-semibold">Other</h3>
                            <div className="flex space-x-4">
                                <Link href="/shop" className="hover:text-gray-400">Shop</Link>
                                <Link href="/events" className="hover:text-gray-400">Events</Link>
                                <Link href="/studentlife/tech4good" className="hover:text-gray-400">Tech4Good</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom section - Black background with left-aligned logo and centered text */}
            <div className="relative w-full bg-black text-white mt-0 pt-4 pb-4 px-4 flex items-center">
                <Image
                    src="/ibiosocietylogo.png"
                    width={40}
                    height={40}
                    alt="iBiomed Society logo"
                    className="ml-4"
                    priority
                />
                
                <p className="absolute left-1/2 -translate-x-1/2 text-sm">© {currentYear} McMaster iBioMed Society</p>
            </div>
        </footer>
    );
}
