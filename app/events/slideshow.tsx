'use client'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../_components/carousel"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "../_components/dialog"  
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
} from "../_components/drawer"
import { Button } from "../_components/button"
import EventBox from './event_box'
import useMediaQuery from "@/hooks/useMediaQuery"
import React from 'react'
import { useState } from "react"
import { filterXSS } from "xss";


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

const removeHtmlBlob = (html: string) => {
    return html.replace(/<\/?html-blob>/g, "");
};

const SlideShow: React.FC<SlideShowProps> = ({listOfEvents}) => {
    const isMobile = useMediaQuery("(max-width: 640px)");
    const [selectedItem, setSelectedItem] = useState<Events | null>(null);
    const [open, setOpen] = useState(false);
    return (
        <>
        {
            isMobile ? 
            (
                <Drawer>
                    <div className='flex flex-row justify-center'>
                        <Carousel opts={{align: "center"}} className='flex flex-col rounded-t-lg w-full lg:max-w-5xl'>
                        <p className="font-sans text-white font-bold text-xl pt-12 ml-3 pb-3">📌NEWEST</p>
                        <CarouselContent key={1} className='rounded-lg -ml-7 w-full'>
                            {listOfEvents?.map((event,index) => (
                                    <CarouselItem key={index} className='pl-10 flex flex-col flex-shrink-0 rounded-lg basis-2/3 sm:basis-1/3'>
                                        <EventBox event={event} setSelectedItem={setSelectedItem} setOpen={setOpen}/>
                                    </CarouselItem>
                        ))}
                        </CarouselContent>
                        </Carousel>
                    </div>
                    <DrawerContent className='bg-white'>
                        <DrawerHeader>
                            <DrawerTitle className='text-black'>{selectedItem ? selectedItem.summary : "Event"}</DrawerTitle>
                            <DrawerDescription>{selectedItem ? selectedItem.location : "Location"}</DrawerDescription>
                        </DrawerHeader>
                        <center className="max-h-96 overflow-y-auto">
                            <p className="text-black text-wrap" dangerouslySetInnerHTML={{ __html: filterXSS(removeHtmlBlob(selectedItem?.description || "")) }}/>
                        </center>
                        <DrawerFooter>
                            <DrawerClose asChild>
                                <Button>Close</Button>
                            </DrawerClose>
                        </DrawerFooter>
                    </DrawerContent>
                </Drawer>
            )
            :
            (
                <Dialog open={open} onOpenChange={setOpen}>
                        <div className='flex flex-row justify-center'>
                            <Carousel opts={{align: "center"}} className='flex flex-col rounded-t-lg w-full lg:max-w-5xl'>
                            <p className="font-sans text-white font-bold text-xl pt-12 ml-10 pb-3">📌NEWEST</p>
                            <CarouselContent key={1} className='rounded-lg -ml-1 w-full'>
                                {listOfEvents?.map((event,index) => (
                                        <CarouselItem key={index} className='pl-10 flex flex-col flex-shrink-0 rounded-lg basis-1/3'>
                                            <EventBox event={event} setSelectedItem={setSelectedItem} setOpen={setOpen}/>
                                        </CarouselItem>
                            ))}
                            </CarouselContent>
                            <CarouselPrevious className="bg-white"/>
                            <CarouselNext className="bg-white"/>
                            </Carousel>
                        </div>
                        <DialogContent className="max-h-96 h-fit overflow-y-auto bg-white">
                            <DialogHeader>
                                <DialogTitle className="text-black">{selectedItem ? selectedItem.summary : "Event"}</DialogTitle>
                                <DialogDescription>{selectedItem ? selectedItem.location : "Location"}</DialogDescription>
                            </DialogHeader>
                            <p className="text-black overflow-y-auto" dangerouslySetInnerHTML={{ __html: filterXSS(removeHtmlBlob(selectedItem?.description || "")) }} ></p>
                        </DialogContent>
                </Dialog>
            )
        }
        </>
    )
}

export default SlideShow;
