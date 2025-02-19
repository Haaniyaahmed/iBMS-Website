import Navbar from '../_components/Navbar';
import Footer from '../_components/Footer';
import type { Metadata } from 'next'


export const metadata: Metadata = {
    title: 'Merchandise',
}



export default function BlogLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
        <div className='flex flex-col w-full min-h-screen bg-black' style={{
            backgroundImage: "url('/elipses.png')", 
          }}>
            <Navbar/>
              {children}
            <Footer/>
        </div>
    );
}