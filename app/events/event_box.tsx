import Image from 'next/image'
import { Clock, MapPin, CalendarRange } from 'lucide-react'
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
interface event {
    event : Events
}
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
}

const getTextSize = (text: string) => {
    const length = text.length;
    if (length <= 10) return "text-5xl";
    if (length <= 15) return "text-4xl";
    if (length <= 17) return "text-3xl"; 
    if (length <= 46) return "text-2xl text-wrap";
    if (length <= 56) return "text-xl text-wrap";
    if (length <= 60) return "text-lg text-wrap";
    if (length <= 68) return "text-md text-wrap";
    return "text-sm text-wrap"; 
};

const stripLocation = (location: string) => {
    return location.length <= 26 ? location : location.substring(0, 23) + "...";
}
const stripHtml = (html: string) => {
    // Remove HTML tags
    let plainText = html.replace(/<\/?[^>]+(>|$)/g, "");

    // Remove continuous stretches of 3 or more underscores
    plainText = plainText.replace(/_{3,}/g, "");
  
    // Truncate if longer than 30 characters
    return plainText.length <= 30 ? plainText : plainText.substring(0, 27) + "...";
  };

const EventBox : React.FC<event> = ({event}) => {
    return (
        <div className='bg-white w-full h-80 sm:h-56 rounded-lg'>
            {event?.attachments?.[0]?.fileUrl ? 
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
                {event?.summary && <p className={`absolute top-1/2 -translate-y-1/2 flex items-center left-3 inset-x-0 font-sans font-medium text-white ${getTextSize(event.summary)} overflow-hidden leading-tight z-20`}>{event.summary}</p>}
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
                {event?.summary && <p className={`absolute top-1/2 -translate-y-1/2 flex items-center left-3 inset-x-0 font-sans font-medium text-white ${getTextSize(event.summary)} overflow-hidden leading-tight z-20`}>{event.summary}</p>}
            </div>
            }
            {event?.start?.dateTime && event?.end?.dateTime ?
            <div className='flex flex-row pt-3'>
                <Clock className='ml-5' fill='gray-300' color='#FFFFFF' size={32}/>
                <div className='flex flex-col'>
                <p className="font-sans px-5">{`${formatDateTime(event.start.dateTime)[0]} - ${formatDateTime(event.end.dateTime)[0]}`}</p>
                <p className="font-sans text-xs px-5">{`${formatDateTime(event.start.dateTime)[1]} - ${formatDateTime(event.end.dateTime)[1]}`}</p>
                </div>
            </div>
            :
            <div className='flex flex-row pt-3'>
                <Clock className='ml-5' fill='gray-300' color='#FFFFFF' size={32}/>
                <div className='flex flex-col'>
                <p className="font-sans px-5">{`${formatDate(event.start.date)} - ${formatDate(event.end.date)}`}</p>
                </div>
            </div>
            }
            {event?.location && 
            <div className='flex flex-row pt-3'>
                <MapPin className='ml-5' fill='gray-300' color='#FFFFFF' size={32}/>
                <p className="font-sans px-5">{stripLocation(event.location)}</p>
            </div>
            }
            {event?.description && 
            <div className='flex flex-row pt-3'>
                <CalendarRange className='ml-5'  size={32}/>
                <p className="font-sans px-5 overflow-hidden text-ellipsis">{stripHtml(event.description)}</p>
            </div>
            }
        </div>
    )
}
export default EventBox;