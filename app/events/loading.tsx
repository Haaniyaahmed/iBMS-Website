import { Skeleton } from "@/components/ui/skeleton"
import { Inter } from 'next/font/google'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Banner from '@/components/ui/banner'

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
})

export default function Loading() {
    // You can add any UI inside Loading, including a Skeleton.
    return (
        <main className='flex flex-col w-full h-screen bg-black overflow-y-auto'>
        <Banner imagePath='/upcoming_events.png' title_top='UPCOMING' title_bottom='EVENTS'/>
        <p className={`${inter.variable} font-sans text-white font-bold text-xl ml-16 pb-3`}>📌NEWEST</p>
        <div className='flex flex-row justify-center'>
            <Carousel opts={{align: "center"}} className='flex flex-row rounded-t-lg max-w-5xl'>
            <CarouselContent className='rounded-lg -ml-1 w-full'>
                {Array.from({ length: 5 }).map((_, index) => (
                <CarouselItem key={index} className='pl-10 flex flex-col flex-shrink-0 rounded-lg basis-1/3'>
                    <div className="flex flex-col space-y-3">
                        <Skeleton className="h-[125px] w-[250px] rounded-xl" />
                        <div className="space-y-2">
                            <Skeleton className="h-4 w-[250px]" />
                            <Skeleton className="h-4 w-[200px]" />
                        </div>
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
                className='rounded-lg'
            />
        </center>
      </main>
        
    )
  }