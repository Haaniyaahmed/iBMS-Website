import type { Metadata } from 'next'
import Banner from '@/components/ui/banner'
import SlideShow from './slideshow'

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

export const metadata: Metadata = {
  title: 'Events',
}

export default async function Page() {
  const calendarId = process.env.CALENDAR_ID;  // Replace with your public calendar ID
  const apiKey = process.env.GOOGLE_API_KEY;
  const url = `https://www.googleapis.com/calendar/v3/calendars/${calendarId}/events?key=${apiKey}`;
  const data = await fetch(url);
  const calendar: Events[] = (await data.json()).items;  
  return (
    <main className='flex flex-col w-full h-screen bg-black overflow-y-auto'>
      <Banner imagePath='/upcoming_events.png' title_top='UPCOMING' title_bottom='EVENTS'/>
      <SlideShow listOfEvents={calendar}/>
      <center className='mt-6'>
        <div className='max-w-5xl w-full pl-9'>
          <iframe
            src="https://calendar.google.com/calendar/embed?src=37a82d11d86eab4bd30fa00588d06123cfc682511f709dc9fe3c12da9d9a681e%40group.calendar.google.com&ctz=America%2FToronto"
            style={{ border: 0, width: '99%', height: '600px' }}
            className='rounded-lg'
          />
        </div>
      </center>
    </main>
  )
}