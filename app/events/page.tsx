import Banner from '../_components/banner'
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

export default async function Page() {
  const calendarId = process.env.CALENDAR_ID;  // Replace with your public calendar ID
  const apiKey = process.env.GOOGLE_API_KEY;
  const url = `https://www.googleapis.com/calendar/v3/calendars/${calendarId}/events?key=${apiKey}`;
  const data = await fetch(url);
  const calendar: Events[] = (await data.json()).items;  
  return (
    <>
      <Banner imagePath='/upcoming_events.png' title_top='UPCOMING' title_bottom='EVENTS'/>
      <SlideShow listOfEvents={calendar}/>
      <center className='mt-6 pb-10'>
        <div className='max-w-5xl w-full pl-3 sm:pl-9'>
          <iframe
            src="https://calendar.google.com/calendar/embed?src=vpexternal.ibiomed%40gmail.com&ctz=America%2FToronto"
            style={{ border: 0, width: '99%', height: '600px' }}
            className='rounded-lg'
            loading="lazy"
          />
        </div>
      </center>
    </>
  )
}