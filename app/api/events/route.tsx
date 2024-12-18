export async function GET(request: Request) {
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