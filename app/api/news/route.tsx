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

export async function GET() {
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
        if (err) {
            return new Response(JSON.stringify({error: err}), {
                status: 500
            })
        };
        console.log('The new row was appended')
    });

    return new Response(JSON.stringify({ message: 'Article appended successfully!!' }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
    });
}

export async function DELETE(request: Request) {
    const {title} = await request.json() // this is the title of news articles to remove
    
    const data = await readNewsAsPromise()
    const articleExists = data.some(line => line.title == title)
    if (!articleExists) {
        return new Response(JSON.stringify({message: "That title does not corrispond to a news article!"}))
    }

    const filteredJson = data.filter(line => line.title != title) // keep articles with different title 

    const csvData = filteredJson.map(newsJson => `${newsJson.title},${newsJson.article_link},${newsJson.photo_link}`)
    fs.writeFile(NEWS_FILE_PATH, "title,article_link,photo_link" + "\n" + csvData.join(""), err => {
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