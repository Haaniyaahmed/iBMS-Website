import Image from "next/image";
import Footer from "@/components/ui/Footer"
import Nav from "@/components/ui/navbar";
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Home',
}

export default function Home() {
  return (
    <main className='flex flex-col w-full h-screen bg-white'>
        <Nav/>
        <div className="relative flex justify-center items-center h-1/4 sm:h-1/2">
          <Image
            src="/hero_title.png"
            alt="title"
            fill
            priority
          />
        </div>
        <Footer/>
    </main>
  );
}
