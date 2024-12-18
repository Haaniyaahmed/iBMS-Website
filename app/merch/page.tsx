import Banner from "@/components/ui/banner"
import Interactivity from "./interactive"
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Merchandise',
}

export default function Page() {
    return (
        <main className='flex flex-col w-full h-screen bg-black'>
            <Banner imagePath='/upcoming_events.png' title_top='MERCHANDISE' title_bottom=''/>
            <Interactivity/>
        </main>
    )
}
