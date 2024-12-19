'use client'

import Image from "next/image"
import Link from 'next/link';

export default function Footer() {

	const currentYear = new Date().getFullYear();

  return (
		<div className="w-full border-white">
			{/* Top section - red background */}
			<div className="bg-mac-dark-red text-white flex justify-evenly py-6 align-text-top">
				<div className="flex space-x-12 align-top mr-11 pr-11 pb-10">
					<Link href="/studentlife" className="text-sm nav-link hover:text-neutral-300 ">
                        HELPFUL LINKS
                    </Link>
                    <Link href="/contact" className="text-sm nav-link hover:text-neutral-300 ">
                        CONNECT
                    </Link>
                    </div>
                    <div className="ml-11 pl-11 pb-10">
                        <Link href="/admin" className="text-sm nav-link hover:text-neutral-300 ">
                            ADMIN
                        </Link>
                    </div>
                </div>

			{/* Bottom section - black background */}
			<div className="relative flex items-center py-5 px-9 bg-black">
				<Image 
					src={"/ibiosocietylogo.png"}
					width={40}
					height={40}
					layout="fixed"
					alt="iBiomed Society logo"
					className="mx-10"
					priority
				/>
				<p className="text-sm sm:text-xs md:text-sm text-white absolute bottom-2 left-1/2 transform -translate-x-1/2">
					@ {currentYear} McMaster iBioMed Society
				</p>
			</div>
		</div>
  );
}