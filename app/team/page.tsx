import TeamPage from './team_page';
import Footer from '@/components/ui/Footer';
import Nav from '@/components/ui/navbar';
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Team',
}

export default function Page() {
  return (
    <div
      className="min-h-screen bg-cover bg-center text-white bg-black"
      style={{
        backgroundImage: "url('/elipses.png')", 
      }}
    >
      <Nav/>
      <TeamPage/>
      <Footer />
    </div>
  );
}