import * as fs from 'fs';
import * as path from 'path';
import * as csv from 'fast-csv';

const NEWS_CSV_FILE_NAME = "news.csv"

const readNewsAsPromise = () => {
    return new Promise((resolve, reject) => {
        const data: string[] = []
        fs.createReadStream(path.resolve(process.cwd(), "app", "api", NEWS_CSV_FILE_NAME))
            .pipe(csv.parse({ headers: true }))
            .on('error', error => reject(error))
            .on('data', row => data.push(row))
            .on('end', () => resolve(data));
    })
}

export async function GET(request: Request) {
    const data = await readNewsAsPromise()
    return new Response(JSON.stringify({data}), {
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

