import Navbar from "../_components/Navbar"
import Footer from "../_components/Footer"

export const metadata = {
  title: 'Contact Us',
  description: 'Contact us with any questions/inquiries!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    // Do not render <html> or <body> here, let Next.js handle it
    <div className="flex flex-col min-h-screen bg-black">
      <Navbar/>
        <main className="flex-grow">
          {children}
        </main>
      <Footer/>
    </div>
  )
}
