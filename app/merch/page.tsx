'use client'

import Banner from "@/components/ui/banner"
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Head from 'next/head';
import { Inter } from 'next/font/google' 
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { Lens } from "@/components/ui/lens";

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
    const [selectedItem, setSelectedItem] = useState<MerchItem | null>(null);
    const [hovering, setHovering] = useState(false);

    useEffect(() => {
        // Fetch the JSON file from the public folder
        fetch('/merch.json')
        .then((response) => response.json())
        .then((data: MerchItem[]) => setItems(data))
        .catch((error) => console.error('Error fetching JSON:', error));
    }, []);
    return (
        <>
        <Head>
            <title>Merchandise</title>
        </Head>
        <main className='flex flex-col w-full h-screen bg-black'>
            <Banner imagePath='/upcoming_events.png' title_top='MERCHANDISE' title_bottom=''/>
            <div className="grid grid-cols-1 gap-4 bg-black px-5 pt-8 md:grid-cols-2 lg:grid-cols-4">
            <Dialog>
                {items.map((item, index) => (
                    <DialogTrigger asChild key={index}>
                    <Card key={index} className="border hover:scale-110 hover:border-yellow-400 hover:border-4" onClick={() => setSelectedItem(item)}>
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
                    </DialogTrigger>
                ))}
                <DialogContent className="h-screen">
                    <DialogHeader>
                        <DialogTitle>{selectedItem ? selectedItem.description : "item"}</DialogTitle>
                    </DialogHeader>
                    <Lens hovering={hovering} setHovering={setHovering}>
                    <Image
                            src={selectedItem ? selectedItem.image_path : "/merch/10.png"}
                            alt={selectedItem ? selectedItem.description : "hi"}
                            width={250}
                            height={250}
                            className="object-cover w-full h-screen mt-4 rounded-t-lg"
                            unoptimized
                        />
                    </Lens>
                    <DialogFooter className="flex justify-start">
                        <DialogDescription className="text-lg">{selectedItem ? "$" + selectedItem.price : ""}</DialogDescription>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
            </div>
        </main>
        </>
    )
}
