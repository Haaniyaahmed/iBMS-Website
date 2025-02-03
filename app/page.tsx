import Footer from "@/components/ui/Footer"
import Nav from "@/components/ui/navbar";
import Banner from "@/components/ui/banner";
import Table from "@/components/ui/table";
import Header from "@/components/ui/header";
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Home',
}

export default function Home() {
  return (
    <main className='flex flex-col w-full h-screen bg-white'>
        <Header/>
        <Nav/>
        <Banner imagePath="/studentlife.png" title_top="IBIOMED" title_bottom="SOCIETY"/>
        <div className="bg-yellow-500 py-2 mb-6"/>
        <Table/>
        <div className="bg-white py-2"/>
        <Footer/>
    </main>
  );
}
