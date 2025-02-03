import "../globals.css"
import Banner from "../_components/banner"
import Interactivity from "./interactive"
import Footer from "../_components/Footer"
import Navbar from "../_components/Navbar"

export default function Page() {
    return (
      <>
        <Banner imagePath='/upcoming_events.png' title_top='MERCHANDISE' title_bottom=''/>  
        <Interactivity/>
      </>
      
    )
}