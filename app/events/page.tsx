import Image from 'next/image'
import { Inter } from 'next/font/google' 
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Banner from '@/components/ui/banner'
import EventBox from './event_box'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

interface Events {
    "created" : Date;
    "updated" : Date;
    "description" : string | null;
    "location" : string | null;
    "summary" : string | null;
    "start": {
        "date": Date | null;
        "dateTime": string | null;
        "timeZone": string | null
    };
    "end": {
        "date": Date | null;
        "dateTime": string | null;
        "timeZone": string | null
    };
    "attachments": [
      {
        "fileUrl": string | null;
        "title": string | null;
        "mimeType": string | null;
        "iconLink": string | null;
        "fileId": string | null
      }
    ];

}
interface CalendarData {
  items: Events[];
}

export default async function Page() {
  const calendarId = process.env.CALENDAR_ID;  // Replace with your public calendar ID
  const apiKey = process.env.GOOGLE_API_KEY;
  const url = `https://www.googleapis.com/calendar/v3/calendars/${calendarId}/events?key=${apiKey}`;
  const data = await fetch(url);
  const calendar: Events[] = (await data.json()).items;  
  // Extract and format the time (e.g., "5:00 AM")
    return (
      <main className='flex flex-col w-full h-screen bg-black overflow-y-auto'>
        <Banner imagePath='/upcoming_events.png' title_top='UPCOMING' title_bottom='EVENTS'/>
        
        <div className='flex flex-row justify-center'>
          <Carousel opts={{align: "center"}} className='flex flex-col rounded-t-lg max-w-5xl'>
            <p className={`${inter.variable} font-sans text-white font-bold text-xl pt-12 ml-10 pb-3`}>📌NEWEST</p>
            <CarouselContent key={1} className='rounded-lg -ml-1 w-full'>
              {calendar?.map((event,index) => (
                <CarouselItem key={index} className='pl-10 flex flex-col flex-shrink-0 rounded-lg basis-1/3'>
                  <EventBox event={event}/>
                </CarouselItem>
              
            ))}
            </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
          </Carousel>
        </div>
        <center className='mt-6'>
          <div className='max-w-5xl w-full pl-10'>
            <iframe
              src="https://calendar.google.com/calendar/embed?src=37a82d11d86eab4bd30fa00588d06123cfc682511f709dc9fe3c12da9d9a681e%40group.calendar.google.com&ctz=America%2FToronto"
              style={{ border: 0, width: '100%', height: '600px' }}
              className='rounded-lg'
            />
          </div>
        </center>
      </main>
    )
  }