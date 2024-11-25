import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Clock, MapPin } from 'lucide-react' 
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
    return(
        <div className='flex flex-row gap-20 ml-5 mr-5 mt-5'>
            {calendar?.map((event) => (
            <div key={event.created.toString()} className='flex flex-col w-full'>
            {/* Conditionally render details if available */}
            <div className='bg-white w-full h-fit rounded-lg'>
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
                    <p className={`${inter.variable} font-sans px-5`}>{event.start.date + " - " + event.end.date}</p>
                    </div>
                </div>
                }
                {event?.description && <p className={`${inter.variable} font-sans px-5`}>{event.description}</p>}
                {event?.location && 
                <div className='flex flex-row pt-3'>
                    <MapPin className='ml-5' fill='gray-300' color='#FFFFFF' size={32}/>
                    <p className={`${inter.variable} font-sans px-5`}>{event.location}</p>
                </div>
                }

            </div>
            </div>
        ))}
        </div>
)}