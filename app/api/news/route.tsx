import * as fs from 'fs';
import * as path from 'path';
import * as csv from 'fast-csv';

const NEWS_CSV_FILE_NAME = "news.csv"

export async function GET(request: Request) {
    fs.createReadStream(path.resolve(process.cwd(), "app", "api", NEWS_CSV_FILE_NAME))
        .pipe(csv.parse({ headers: true }))
        .on('error', error => console.error(error))
        .on('data', row => console.log(row))
        .on('end', (rowCount: number) => console.log(`Parsed ${rowCount} rows`));
    return new Response(JSON.stringify({ message: 'Hello, App Router API!' }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
    });
}

export async function POST(request: Request) {
    return new Response(JSON.stringify({ message: 'Hello, App Router API!' }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
    });
}

