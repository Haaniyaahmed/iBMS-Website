import Banner from "../_components/banner"
import Interactivity from "./interactive"

export default function Page() {
    return (
      <>
        <Banner imagePath='/upcoming_events.png' title_top='MERCHANDISE' title_bottom=''/>  
        <div className="bg-yellow-500 w-full py-2 mb-6" />
        <Interactivity/>
      </>
      
    )
}