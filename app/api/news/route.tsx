import * as fs from 'fs';
import * as path from 'path';
import * as csv from 'fast-csv';

const NEWS_CSV_FILE_NAME = "news.csv"
const NEWS_FILE_PATH = path.join(process.cwd(), 'app/api/news.csv');

const readNewsAsPromise = (): Promise<Record<string, string>[]> => {
    return new Promise<Record<string, string>[]>((resolve, reject) => {
        const data: Record<string, string>[] = []
        fs.createReadStream(path.resolve(process.cwd(), "app", "api", NEWS_CSV_FILE_NAME))
            .pipe(csv.parse({ headers: true }))
            .on('error', error => reject(error))
            .on('data', row => data.push(row))
            .on('end', () => resolve(data));
    })
}

export async function GET(request: Request) {
    const data = await readNewsAsPromise()
    return new Response(JSON.stringify({ data }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
    });
}

export async function POST(request: Request) {
    const {title, article_link, photo_link} = await request.json()
    const fileLine = `${title},${article_link},${photo_link}`

    await fs.appendFile(NEWS_FILE_PATH, "\n" + fileLine, err => {
        if (err) throw err;
        console.log('The new row was appended')
    });

    return new Response(JSON.stringify({ message: 'Article appended successfully!!' }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
    });
}

