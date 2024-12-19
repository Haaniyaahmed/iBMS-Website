'use client'

import useMediaQuery from "@/hooks/useMediaQuery"
import { useEffect, useState } from 'react'
import Mobile from "./mobile"
import Desktop from "./desktop"

interface MerchItem {
    image_path: string;
    description: string;
    price: number;
}

export default function Interactivity(){
    const [inventory, setInventory] = useState<MerchItem[]>([]);
    const isMobile = useMediaQuery("(max-width: 640px)");

    useEffect(() => {
        // Fetch the JSON file from the public folder
        fetch('/data/merch/merch.json')
        .then((response) => response.json())
        .then((data: MerchItem[]) => setInventory(data))
        .catch((error) => console.error('Error fetching JSON:', error));
    }, []);

    return (
        <>
        {isMobile ?
            ( 
                <Mobile items={inventory} />
            )
            :
            (
                <Desktop items={inventory} />
            )
        }
        </>
    )
}