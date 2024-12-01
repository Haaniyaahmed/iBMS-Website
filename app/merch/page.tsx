'use client'

import Banner from "@/components/ui/banner"
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Inter } from 'next/font/google' 
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
})

interface MerchItem {
    image_path: string;
    description: string;
    price: number;
}

export default function Page() {
    const [items, setItems] = useState<MerchItem[]>([]);

    useEffect(() => {
        // Fetch the JSON file from the public folder
        fetch('/merch.json')
        .then((response) => response.json())
        .then((data: MerchItem[]) => setItems(data))
        .catch((error) => console.error('Error fetching JSON:', error));
    }, []);

    return (
        <main className='flex flex-col w-full h-screen bg-black'>
            <Banner imagePath='/upcoming_events.png' title_top='MERCHANDISE' title_bottom=''/>
            <div className="grid grid-cols-4 gap-4 bg-black px-5 pt-8">
                {items.map((item, index) => (
                    <Card key={index} className="border shadow-md">
                        <CardHeader className="p-0">
                        <Image
                            src={item.image_path}
                            alt={item.description}
                            width={250}
                            height={250}
                            className="object-cover w-full h-48 mt-4 rounded-t-lg"
                        />
                        </CardHeader>
                        <CardContent>
                        <CardDescription className="text-base mt-2">{item.description}</CardDescription>
                        </CardContent>
                        <CardFooter className="text-lg font-semibold text-gray-800">
                        ${item.price.toFixed(2)}
                        </CardFooter>
                    </Card>
                  
                ))}
            </div>
        </main>
    )
}
