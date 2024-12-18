'use client'
import React from 'react';
import { useState } from 'react'
import Image from 'next/image'
import { Inter } from 'next/font/google' 
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
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
import { Lens } from "@/components/ui/lens"

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
})

interface MerchItem {
    image_path: string;
    description: string;
    price: number;
}

interface DesktopProp {
    items: MerchItem[];
}

const Desktop: React.FC<DesktopProp> = ({items}) => {
    const [selectedItem, setSelectedItem] = useState<MerchItem | null>(null);
    const [hovering, setHovering] = useState(false);
    return (
        <div className="grid grid-cols-1 gap-4 bg-black px-5 pt-8 md:grid-cols-2 lg:grid-cols-4">
            <Dialog>
                {items.map((item, index) => (
                    <DialogTrigger asChild key={index}>
                    <Card key={index} className="border hover:scale-110 hover:border-yellow-400 hover:border-4" onClick={() => setSelectedItem(item)}>
                        <CardHeader className="p-0">
                        <center>
                        <Image
                            src={item.image_path}
                            alt={item.description}
                            width={250}
                            height={250}
                            className="object-cover w-fit h-48 mt-4 rounded-t-lg lg:w-full"
                        />
                        </center>
                        </CardHeader>
                        <CardContent>
                        <CardDescription className={`${inter.variable} text-base mt-2`}>{item.description}</CardDescription>
                        </CardContent>
                        <CardFooter className={`${inter.variable} text-lg font-semibold text-gray-800`}>
                        ${item.price.toFixed(2)}
                        </CardFooter>
                    </Card>
                    </DialogTrigger>
                ))}
                <DialogContent className="h-screen">
                    <DialogHeader>
                        <DialogTitle className={`${inter.variable}`}>{selectedItem ? selectedItem.description : "item"}</DialogTitle>
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
                        <DialogDescription className={`${inter.variable} text-lg text-black`}>{selectedItem ? "$" + selectedItem.price : ""}</DialogDescription>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default Desktop;