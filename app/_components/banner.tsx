import Image from 'next/image'

interface BannerProps {
  imagePath : string;
  title_top : string | null;
  title_bottom : string | null;
}

const Banner: React.FC<BannerProps> = ({imagePath,title_top,title_bottom}) => {
  return (
    <div className="w-full relative h-[150px] sm:h-[300px] lg:h-[450px] overflow-hidden">
      <Image
        src={imagePath}
        alt={`${title_top} ${title_bottom}`}
        layout="fill"
        objectFit="cover"
        priority
      />
      <div className="absolute inset-0 bg-[#420806] opacity-20 z-10"></div>
      <div className="absolute inset-0 flex flex-col justify-center items-center z-20"> {/* Center content */}
        <h1 className="text-white font-sans text-5xl font-medium md:text-6xl text-center">
          {title_top}
        </h1>
        <h1 className="font-sans text-mac-dark-yellow text-5xl font-black md:text-8xl text-center">
          {title_bottom}
        </h1>
      </div>
    </div>
  );
}

export default Banner;