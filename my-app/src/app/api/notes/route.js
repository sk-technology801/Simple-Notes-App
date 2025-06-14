import clientPromise from '@/lib/mongodb';

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db();
    const notes = await db.collection('notes').find().toArray();

    return Response.json(notes);
  } catch (error) {
    console.error('GET Error:', error);
    return new Response(JSON.stringify({ error: 'Failed to fetch notes' }), {
      status: 500,
    });
  }
}

export async function POST(req) {
  try {
    const body = await req.json();

    if (!body.text || typeof body.text !== 'string') {
      return new Response(JSON.stringify({ error: 'Invalid input' }), {
        status: 400,
      });
    }

    const client = await clientPromise;
    const db = client.db();
    const note = { text: body.text, createdAt: new Date() };

    const result = await db.collection('notes').insertOne(note);

    return Response.json({ _id: result.insertedId, ...note });
  } catch (error) {
    console.error('POST Error:', error);
    return new Response(JSON.stringify({ error: 'Failed to save note' }), {
      status: 500,
    });
  }
}
