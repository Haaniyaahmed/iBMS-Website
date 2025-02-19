import type { Metadata } from 'next'
import Navbar from "../_components/Navbar"
import Footer from "../_components/Footer"

export const metadata: Metadata = {
    title: 'Events',
  }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    // Do not render <html> or <body> here, let Next.js handle it
    <div className='flex flex-col w-full min-h-screen bg-black overflow-y-auto' style={{
      backgroundImage: "url('/elipses.png')", 
    }}>
        <Navbar/>
          {children}
        <Footer/>
    </div>
  )
}
