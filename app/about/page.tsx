import Link from "next/link";
import Banner from '../_components/banner';


export default function AboutUs() {
    return (
        <div className="bg-gray-100">
            {/* Hero Section */}
            <Banner imagePath="/about.png" title_top="ABOUT" title_bottom="US" />
        <div className="bg-yellow-500 w-full py-2 mb-6" />

            {/* Who We Are Section */}
            <div className="max-w-4xl mx-auto text-center py-5 px-6">
                <h2 className="text-3xl font-semibold text-gray-800">Who We Are</h2>
                <p className="text-gray-600 mt-4">
                    We are a passionate student group dedicated to building a community for iBioMed students, advancing biomedical innovation and collaboration. 
                    Our mission is to empower students through industry connections, social events, and outreach opportunities!
                </p>

                {/* Button to Team Page */}
                <div className="mt-6">
                    <Link href="/team">
                        <button className="bg-red-700 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition">
                            Check Out Our Team
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
