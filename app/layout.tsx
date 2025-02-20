import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'iBioMed Society',
  description: 'Official Student Society of McMaster iBioMed Program',
  icons: {
    icon: '/ibiosocietylogo.png',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.className}>
      <body className="flex flex-col min-h-screen">
        <main 
          className="flex-grow">{children}
        </main>
      </body>
    </html>
  )
}
