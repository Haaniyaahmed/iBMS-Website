import "./globals.css";
import Navbar from "./_components/Navbar";
import Footer from "./_components/Footer";
import Banner from "./_components/banner";
import Table from "./table";

interface Events {
  created: Date;
  updated: Date;
  description: string | null;
  location: string | null;
  summary: string | null;
  start: {
    date: Date | null;
    dateTime: string | null;
    timeZone: string | null;
  };
  end: {
    date: Date | null;
    dateTime: string | null;
    timeZone: string | null;
  };
  attachments: [
    {
      fileUrl: string | null;
      title: string | null;
      mimeType: string | null;
      iconLink: string | null;
      fileId: string | null;
    }
  ];
}

export default async function HomePage() {

      const calendarId = process.env.CALENDAR_ID;
      const apiKey = process.env.GOOGLE_API_KEY;
      const url = `https://www.googleapis.com/calendar/v3/calendars/${calendarId}/events?key=${apiKey}`;
      const data = await fetch(url, { next: { revalidate: 60 } });
      const calendarData = await data.json();
  
      //console.log("Calendar Data:", calendarData);  // Check the raw API response
      const calendar: Events[] = calendarData.items || [];
  
      const sortedEvents = [...calendar].sort((a, b) => {
        const getDate = (event: Events) => {
          if (event.start.dateTime) {
            return new Date(event.start.dateTime);
          }
          if (event.start.date) {
            return new Date(event.start.date + "T00:00:00");
          }
          return new Date(0);
        };
  
        const dateA = getDate(a);
        const dateB = getDate(b);
        const now = new Date();
  
        const isAUpcoming = dateA > now;
        const isBUpcoming = dateB > now;
  
        if (isAUpcoming && !isBUpcoming) return -1;
        if (!isAUpcoming && isBUpcoming) return 1;
  
        return dateA.getTime() - dateB.getTime();
      });
  
      //console.log("Sorted Events:", sortedEvents);  // Check the sorted events

  

  return (
    <>
      <Navbar />
      <div className="flex flex-col w-full min-h-screen bg-black">
        {/* Header Image with Text */}
        <Banner imagePath="/studentlife.png" title_top="IBIOMED" title_bottom="SOCIETY" />
        <div className="bg-yellow-500 w-full py-2 mb-6" />

        <Table/>

        {/* Upcoming Events Section */}
        <div className="w-[80%] mx-auto mt-10">
          <h2 className="text-white text-2xl font-bold mb-4">Upcoming Events</h2>
          <div className="grid grid-cols-2 gap-4">
            {sortedEvents.length > 0 ? (
              sortedEvents.slice(0, 4).map((event, index) => {
                const eventDate = event.start.dateTime
                  ? new Date(event.start.dateTime)
                  : event.start.date
                  ? new Date(event.start.date + "T00:00:00")
                  : null;
                const eventTitle = event.summary || "No Title";

                return (
                  <div key={index} className="bg-gray-800 text-white p-4 rounded-lg">
                    <h3 className="text-lg font-bold">{eventTitle}</h3>
                    <p>
                      {eventDate
                        ? new Intl.DateTimeFormat("en-US", {
                            timeZone: event.start.timeZone || "America/Toronto",
                            dateStyle: "full",
                            timeStyle: "short",
                          }).format(eventDate)
                        : "No date available"}
                    </p>

                  </div>
                  
                );
              })
            ) : (
              <div className="col-span-2 text-center text-white">No upcoming events.</div>
            )}
          </div>
        </div>

        <div className="w-[80%] mx-auto mt-10 text-center">
  <h2 className="text-white text-2xl font-bold mb-4">Reach Us!</h2>
  <div className="flex justify-center space-x-8">
    <a href="https://www.facebook.com/ibiomedsociety/" target="_blank" rel="noopener noreferrer">
      <img src="socials/facebook.png" alt="Facebook" className="w-12 h-12" />
    </a>
    <a href="https://www.instagram.com/ibiomedsociety/?hl=en" target="_blank" rel="noopener noreferrer">
      <img src="socials/ig.png" alt="Instagram" className="w-12 h-12" />
    </a>
    <a href="https://www.linkedin.com/company/ibiomed-society/" target="_blank" rel="noopener noreferrer">
      <img src="socials/linkedin.png" alt="LinkedIn" className="w-12 h-12" />
    </a>
  </div>
</div>

        <div className="bg-black w-full py-4 mt-6" />
        <Footer />
      </div>
    </>
  );
}
