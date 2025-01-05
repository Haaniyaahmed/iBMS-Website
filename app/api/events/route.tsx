import * as fs from 'fs';
import * as path from 'path';
import * as csv from 'fast-csv';

const EVENTS_CSV_FILE_NAME = "events.csv"
const EVENTS_FILE_PATH = path.join(process.cwd(), 'app/api/events.csv');

const readEventsAsPromise = (): Promise<Record<string, string>[]> => {
    return new Promise<Record<string, string>[]>((resolve, reject) => {
        const data: Record<string, string>[] = []
        fs.createReadStream(path.resolve(process.cwd(), "app", "api", EVENTS_CSV_FILE_NAME))
            .pipe(csv.parse({ headers: true }))
            .on('error', error => reject(error))
            .on('data', row => data.push(row))
            .on('end', () => resolve(data));
    })
}

export async function GET(request: Request) {
    const data = await readEventsAsPromise()
    return new Response(JSON.stringify({ data }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
    });
}

export async function POST(request: Request) {
    const {event_name, description, date, time, location} = await request.json()
    const fileLine = `${event_name},${description},${date},${time},${location}`

    await fs.appendFile(EVENTS_FILE_PATH,"\n" + fileLine, err => {
        if (err) throw err;
        console.log('The new row was appended')
    });

    return new Response(JSON.stringify({ message: 'Event appended successfully!!' }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
    });
}

export async function DELETE(request: Request) {
    const {event_name} = await request.json() // this is the event name to remove

    const data = await readEventsAsPromise()
    const eventExists = data.some(line => line.event_name == event_name)
    if (!eventExists) {
        return new Response(JSON.stringify({message: "That title does not corrispond to an event!"}))
    }

    const filteredJson = data.filter(line => line.event_name != event_name) // keep events different name
    const csvData = filteredJson.map(eventJson => `${eventJson.event_name},${eventJson.description},${eventJson.date},${eventJson.time},${eventJson.location}`)
    fs.writeFile(EVENTS_FILE_PATH, "title,article_link,photo_link" + "\n" + csvData.join(""), err => {
        if (err) {
            return new Response(JSON.stringify({error: err}), {
                status: 500
            })
        };
        console.log('The row was deleted!')
    })

    return new Response(JSON.stringify(filteredJson), {
        status: 200
    })
}
