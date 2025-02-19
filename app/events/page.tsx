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
  const data = await fetch(url, { next: { revalidate: 60 } });
  const calendar: Events[] = (await data.json()).items;  
  const sortedEvents = [...calendar].sort((a, b) => {
    // Convert dateTime or date into Date objects
    const getDate = (event: Events) => {
      if (event.start.dateTime) {
        return new Date(event.start.dateTime); // If there's a dateTime, use it
      }
      if (event.start.date) {
        return new Date(event.start.date + 'T00:00:00'); // If there's just a date, assume midnight
      }
      return new Date(0); // If neither exists, return the Unix epoch (oldest)
    };
  
    const dateA = getDate(a);
    const dateB = getDate(b);
  
    const now = new Date(); // Get the current date and time
  
    // Determine if each event is upcoming or past
    const isAUpcoming = dateA > now;
    const isBUpcoming = dateB > now;
  
    if (isAUpcoming && !isBUpcoming) {
      return -1; // A is upcoming, B is past, A comes first
    }
    if (!isAUpcoming && isBUpcoming) {
      return 1; // B is upcoming, A is past, B comes first
    }
  
    // If both are upcoming or both are past, sort them in ascending order by date
    return dateA.getTime() - dateB.getTime(); // Ascending order for upcoming and past events
  });
  /*
  const sortedEvents = [...calendar].sort((a, b) => {
    // Convert dateTime or date into Date objects
    const getDate = (event: Events) => {
      if (event.start.dateTime) {
        return new Date(event.start.dateTime); // If there's a dateTime, use it
      }
      if (event.start.date) {
        return new Date(event.start.date + 'T00:00:00'); // If there's just a date, assume midnight
      }
      return new Date(0); // If neither exists, return the Unix epoch (oldest)
    };
  
    const dateA = getDate(a);
    const dateB = getDate(b);
  
    // Sort in descending order
    return dateB.getTime() - dateA.getTime();
  });
  */

  return (
    <>
      <Banner imagePath='/upcoming_events.png' title_top='UPCOMING' title_bottom='EVENTS'/>
      <SlideShow listOfEvents={sortedEvents}/>
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