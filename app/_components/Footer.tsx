'use client';

import Image from "next/image";
import Link from 'next/link';

export default function Footer() {
	const currentYear = new Date().getFullYear();

	return (
		<div className="w-full">
			{/* Top section - red background */}
			<div className="bg-mac-dark-red text-white py-6">
				<div className="container mx-auto px-4 flex items-center">
					{/* Left-aligned group: HELPFUL LINKS and CONNECT */}
					<div className="flex space-x-4 sm:space-x-8 w-2/3 justify-center">
						<Link href="/studentlife" className="text-xs sm:text-sm hover:text-neutral-300">
							HELPFUL LINKS
						</Link>
						<Link href="/contact" className="text-xs sm:text-sm hover:text-neutral-300">
							CONNECT
						</Link>
					</div>
					{/* Right-aligned: ADMIN */}
					<div className="flex w-1/3 justify-center">
						<Link href="/admin" className="text-xs sm:text-sm hover:text-neutral-300">
							ADMIN
						</Link>
					</div>
				</div>
			</div>

			{/* Bottom section - black background */}
			<div className="bg-black py-5">
				<div className="container mx-auto px-4 flex items-center pl-4 sm:pl-6">
					{/* Logo on the left */}
					<Image
						src={"/ibiosocietylogo.png"}
						width={40}
						height={40}
						alt="iBiomed Society logo"
						className="mr-4"
						priority
					/>
					{/* Centered copyright text */}
					<p className="text-xs sm:text-sm text-white flex-grow text-center">
						© {currentYear} McMaster iBioMed Society
					</p>
				</div>
			</div>
		</div>
	);
}