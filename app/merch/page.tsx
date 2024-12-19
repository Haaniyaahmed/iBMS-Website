import Banner from "@/components/ui/banner"
import Interactivity from "./interactive"
import Nav from "@/components/ui/navbar"
import Footer from "@/components/ui/Footer"
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Merchandise',
}

export default function Page() {
    return (
        <main className='flex flex-col w-full h-screen bg-black'>
            <Nav/>
            <Banner imagePath='/upcoming_events.png' title_top='MERCHANDISE' title_bottom=''/>
            <Interactivity/>
            <Footer/>
        </main>
    )
}
