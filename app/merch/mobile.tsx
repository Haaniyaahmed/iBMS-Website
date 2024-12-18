'use client'

import { Inter } from 'next/font/google' 
import Image from 'next/image';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
} from "@/components/ui/card"
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"
import { Button } from "@/components/ui/button"
import React from 'react';
import { useState } from 'react';

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
})

interface MerchItem {
    image_path: string;
    description: string;
    price: number;
}

interface MobileProps {
    items : MerchItem[];
}

const Mobile: React.FC<MobileProps> = ({items}) => {
    const [selectedItem, setSelectedItem] = useState<MerchItem | null>(null);
    return (
        <div className="grid grid-cols-1 gap-6 bg-black px-11 pt-16">
            <Drawer>
                {items.map((item, index) => (
                    <DrawerTrigger asChild key={index}>
                    <Card key={index} className="border hover:scale-110 hover:border-yellow-400 hover:border-4" onClick={() => setSelectedItem(item)}>
                        <CardHeader className="p-0">
                        <center>
                            <Image
                                src={item.image_path}
                                alt={item.description}
                                width={250}
                                height={250}
                                className="object-cover w-fit h-64 mt-4 rounded-t-lg"
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
                    </DrawerTrigger>
                ))}
                <DrawerContent>
                    <DrawerHeader>
                        <DrawerTitle className={`${inter.variable}`}>{selectedItem ? selectedItem.description : "item"}</DrawerTitle>
                    </DrawerHeader>
                    <Image
                            src={selectedItem ? selectedItem.image_path : "/merch/10.png"}
                            alt={selectedItem ? selectedItem.description : "hi"}
                            width={250}
                            height={250}
                            className="object-cover w-full h-[60vh] mt-4 rounded-t-lg"
                            unoptimized
                        />
                    <DrawerFooter>
                        <DrawerDescription className={`${inter.variable} text-lg text-black`}>{selectedItem ? "$" + selectedItem.price : ""}</DrawerDescription>
                        <DrawerClose asChild>
                            <Button>Close</Button>
                        </DrawerClose>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </div>
    )
}

export default Mobile;