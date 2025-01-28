import Image from "next/image";

export default function Header(){
    return (
        <div className="flex items-center py-5 px-9 bg-black">
          <Image 
              src="/ibiosocietylogo.png"
              width={40}
              height={40}
              layout="fixed"
              alt="iBiomed Society logo"
              className="mx-10"
              priority
          />
          <h1 className="inline max-w-64 font-bold text-base text-white">Official Student Society of McMaster iBioMed Program</h1>
        </div>
    );
}