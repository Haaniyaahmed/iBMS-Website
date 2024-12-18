'use client'
import { Inter } from 'next/font/google'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import EventBox from './event_box'
import useMediaQuery from "@/hooks/useMediaQuery"
import React from 'react'

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

interface SlideShowProps {
    listOfEvents : Events[];
}

const SlideShow: React.FC<SlideShowProps> = ({listOfEvents}) => {
    const isMobile = useMediaQuery("(max-width: 640px)");
    return (
        <>
        {
            isMobile ? 
            (
                <div className='flex flex-row justify-center'>
                    <Carousel opts={{align: "center"}} className='flex flex-col rounded-t-lg w-full lg:max-w-5xl'>
                    <p className={`${inter.variable} font-sans text-white font-bold text-xl pt-12 ml-10 pb-3`}>📌NEWEST</p>
                    <CarouselContent key={1} className='rounded-lg -ml-1 w-full'>
                        {listOfEvents?.map((event,index) => (
                        <CarouselItem key={index} className='pl-10 flex flex-col flex-shrink-0 rounded-lg basis-1/3'>
                            <EventBox event={event}/>
                        </CarouselItem>
                        
                    ))}
                    </CarouselContent>
                    </Carousel>
                </div>
            )
            :
            (
                <div className='flex flex-row justify-center'>
                    <Carousel opts={{align: "center"}} className='flex flex-col rounded-t-lg w-full lg:max-w-5xl'>
                    <p className={`${inter.variable} font-sans text-white font-bold text-xl pt-12 ml-10 pb-3`}>📌NEWEST</p>
                    <CarouselContent key={1} className='rounded-lg -ml-1 w-full'>
                        {listOfEvents?.map((event,index) => (
                        <CarouselItem key={index} className='pl-10 flex flex-col flex-shrink-0 rounded-lg basis-1/3'>
                            <EventBox event={event}/>
                        </CarouselItem>
                        
                    ))}
                    </CarouselContent>
                    <CarouselPrevious/>
                    <CarouselNext/>
                    </Carousel>
                </div>
            )
        }
        </>
    )
}

export default SlideShow;