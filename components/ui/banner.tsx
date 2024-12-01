import Image from 'next/image'
import { Inter } from 'next/font/google'
const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
})

interface BannerProps {
    imagePath : string;
    title_top : string | null;
    title_bottom : string | null;
}

const Banner: React.FC<BannerProps> = ({imagePath,title_top,title_bottom}) => {
    return(
        <div className='w-full h-1/2 relative flex-shrink-0'>
            <Image src={imagePath} 
                    alt={`${title_top + " " + title_bottom}`}
                    fill
                    style={{
                    objectFit: 'cover'
                }}
            />
            <div className="absolute inset-0 bg-[#420806] opacity-60 pointer-events-none z-10"></div> {/* Overlay */}
            <h1 className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white ${inter.variable} font-sans text-4xl font-medium z-20`}>
            {title_top}
            <center>
                <h1 className={`${inter.variable} font-sans text-mac-dark-yellow text-4xl font-black`}>
                {title_bottom}
                </h1>
            </center>
            </h1>
        </div>
    )
}

export default Banner;