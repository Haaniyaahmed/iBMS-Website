import Navbar from "./_components/Navbar"
import Footer from "./_components/Footer"
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <main 
          className="flex-grow">{children}
        </main>
      </body>
    </html>
  )
}
