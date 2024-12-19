import Nav from '@/components/ui/navbar';
import Banner from '@/components/ui/banner';
import Footer from '@/components/ui/Footer';
import Contact from './contact';
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Contact Us',
}

export default function Page() {
  return (
    <main className='flex flex-col w-full h-screen bg-black overflow-y-auto' style={{
      backgroundImage: "url('/elipses.png')", 
    }}>
        <Nav />
        <Banner imagePath='/contact2.png' title_top="GET IN TOUCH" title_bottom="CONTACT US" />
        <Contact/>
        <Footer/>
    </main>
  );
}