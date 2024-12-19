import TeamPage from './team_page';
import Footer from '@/components/ui/Footer';
import Nav from '@/components/ui/navbar';
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Team',
}

interface Social {
    platform: string;
    url: string;
}

interface TeamMember {
    id: number;
    name: string;
    position: string;
    image: string;
    stream: string;
    label: string;
    desc: string;
    socials: Social[];
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