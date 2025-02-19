import Navbar from "../../_components/Navbar";
import Footer from "../../_components/Footer";

export const metadata = {
  title: 'Tech4Good',
  description: 'Our new initiative!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    // Do not render <html> or <body> here, let Next.js handle it
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow">
        <Navbar/>
        {children}
        <Footer/>
      </div>
    </div>
  )
}
