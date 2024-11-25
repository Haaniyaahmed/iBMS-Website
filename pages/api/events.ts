import { NextApiRequest, NextApiResponse } from 'next';

// API endpoint to fetch calendar events
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const calendarId = process.env.CALENDAR_ID;  // Replace with your public calendar ID
  const apiKey = process.env.GOOGLE_API_KEY;
  const url = `https://www.googleapis.com/calendar/v3/calendars/${calendarId}/events?key=${apiKey}`;
  //console.log(url);
  try {
    const response = await fetch(url);
    const data = await response.json();

    if (!response.ok) {
      return res.status(500).json({ error: 'Failed to fetch calendar events' });
    }
    res.status(200).json(data.items); 
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
}
