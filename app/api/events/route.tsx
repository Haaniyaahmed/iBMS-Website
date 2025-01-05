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

    return new Response(JSON.stringify({ message: 'Article appended successfully!!' }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
    });
}