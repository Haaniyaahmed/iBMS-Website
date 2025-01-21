import "../globals.css"
import Banner from "../_components/banner"
import Interactivity from "./interactive"
import type { Metadata } from 'next'


export const metadata: Metadata = {
    title: 'Merchandise',
}

export default function Page() {
    return (
      <div className="flex flex-col min-h-screen">        
        <main className="flex-grow">
          <Banner imagePath='/upcoming_events.png' title_top='MERCHANDISE' title_bottom=''/>  
          <Interactivity/>
        </main>
      </div>
    )
}