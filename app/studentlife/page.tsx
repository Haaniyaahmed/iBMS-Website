import Banner from "@/components/ui/banner"
import Footer from "@/components/ui/Footer"
import Nav from "@/components/ui/navbar"
import Header from "@/components/ui/header"
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Student Life',
}

export default function Page() {
    return (
        <main className='flex flex-col w-full h-screen bg-black' style={{
            backgroundImage: "url('/elipses.png')", 
        }}>
            <Header/>
            <Nav/>
            <Banner imagePath="/studentlife.png" title_top='IBIOMED' title_bottom=''/> 
            <Footer/>
        </main>
    )
}