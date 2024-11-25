import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Clock, MapPin, CalendarRange } from 'lucide-react' 
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

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
  let data = await fetch("http://localhost:3000/api/events");
  let calendar: Events[] = await data.json();
  // Helper function to format date and time and return as an array
  const formatDateTime = (dateTime: string | null) => {
    if (!dateTime) return ["", ""]

    const date = new Date(dateTime)

    // Format date like "Sept 21, 2024"
    const formattedDate = date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    })

    // Format time like "5:00 AM"
    const hours = date.getHours()
    const minutes = date.getMinutes()
    const period = hours >= 12 ? 'PM' : 'AM'
    const formattedTime = `${(hours % 12 || 12)}:${minutes.toString().padStart(2, '0')} ${period}`

    return [formattedDate, formattedTime]
  }
  const formatDate = (date: Date | null): string => {
    if (!date) {
      return ""; // Return an empty string for null or invalid Date objects
    }
    const date2 = new Date(date)
    // Format date like "Sept 21, 2024"
    return date2.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };  
  // Extract and format the time (e.g., "5:00 AM")
    return (
      <main className='flex flex-col w-full h-screen bg-black overflow-y-auto'>
        <div className='w-full h-1/2 relative flex-shrink-0'>
          <Image src="/upcoming_events.png" 
                 alt="Upcoming Events"
                 fill
                 style={{
                  objectFit: 'cover'
                }}
          />
          <div className="absolute inset-0 bg-[#420806] opacity-60 pointer-events-none z-10"></div> {/* Overlay */}
          <h1 className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white ${inter.variable} font-sans text-4xl font-medium z-20`}>
            UPCOMING
            <center>
              <h1 className={`${inter.variable} font-sans text-mac-dark-yellow text-4xl font-black`}>
                EVENTS
              </h1>
            </center>
          </h1>
        </div>
        <p className={`${inter.variable} font-sans text-white font-bold text-xl pt-12`}>📌NEWEST</p>
      <div className='flex flex-row justify-center'>
        <Carousel opts={{align: "center"}} className='flex flex-row rounded-t-lg max-w-5xl'>
        <CarouselContent key={1} className='rounded-lg -ml-1 w-full'>
            {calendar?.map((event) => (
              <CarouselItem className='pl-10 flex flex-col flex-shrink-0 rounded-lg basis-1/3'>
                <div className='bg-white w-full h-56 rounded-lg'>
                  {event?.attachments?.[0]?.fileUrl ? 
                    <div className='w-full h-16 relative'>
                      <Image src={event.attachments[0].fileUrl}
                            alt="Event"
                            fill
                            style={{
                              objectFit: 'cover'
                            }}
                            className='rounded-t-lg'
                      />
                      <div className="absolute inset-0 bg-[#420806] opacity-60 pointer-events-none z-10"></div> {/* Overlay */}
                      {event?.summary && <h1 className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white ${inter.variable} font-sans text-4xl font-medium z-20`}>{event.summary}</h1>}
                    </div>
                    :
                    <div className='w-full h-16 relative'>
                      <Image src="/default_event.png"
                            alt="Event"
                            fill
                            style={{
                              objectFit: 'cover'
                            }}
                            className='rounded-t-lg'
                      />
                      <div className="absolute inset-0 bg-[#420806] opacity-60 pointer-events-none z-10"></div> {/* Overlay */}
                      {event?.summary && <h1 className={`absolute top-2/3 left-1/4 transform -translate-x-1/2 -translate-y-2/3 text-white ${inter.variable} font-sans text-4xl font-medium z-20`}>{event.summary}</h1>}
                    </div>
                  }
                  {event?.start?.dateTime && event?.end?.dateTime ?
                    <div className='flex flex-row pt-3'>
                      <Clock className='ml-5' fill='gray-300' color='#FFFFFF' size={32}/>
                      <div className='flex flex-col'>
                        <p className={`${inter.variable} font-sans px-5`}>{`${formatDateTime(event.start.dateTime)[0]} - ${formatDateTime(event.end.dateTime)[0]}`}</p>
                        <p className={`${inter.variable} font-sans text-xs px-5`}>{`${formatDateTime(event.start.dateTime)[1]} - ${formatDateTime(event.end.dateTime)[1]}`}</p>
                      </div>
                    </div>
                    :
                    <div className='flex flex-row pt-3'>
                      <Clock className='ml-5' fill='gray-300' color='#FFFFFF' size={32}/>
                      <div className='flex flex-col'>
                        <p className={`${inter.variable} font-sans px-5`}>{`${formatDate(event.start.date)} - ${formatDate(event.end.date)}`}</p>
                      </div>
                    </div>
                  }
                  {event?.location && 
                    <div className='flex flex-row pt-3'>
                      <MapPin className='ml-5' fill='gray-300' color='#FFFFFF' size={32}/>
                      <p className={`${inter.variable} font-sans px-5`}>{event.location}</p>
                    </div>
                  }
                  {event?.description && 
                    <div className='flex flex-row pt-3'>
                      <CalendarRange className='ml-5'  size={32}/>
                      <p className={`${inter.variable} font-sans px-5`}>{event.description}</p>
                    </div>
                  }
                </div>
              </CarouselItem>
            
          ))}
          </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
        </Carousel>
      </div>
      <center className='mt-6'>
        <iframe
            src="https://calendar.google.com/calendar/embed?src=37a82d11d86eab4bd30fa00588d06123cfc682511f709dc9fe3c12da9d9a681e%40group.calendar.google.com&ctz=America%2FToronto"
            style={{ border: 0 }}
            width="800"
            height="600"
          />
      </center>
      </main>
    )
  }