import { NextResponse } from 'next/server';
import { MongoClient } from 'mongodb';

export async function GET() {
    const client = new MongoClient(process.env.NEXT_PUBLIC_MONGODB_URL!, {});

    await client.connect();

    const database = client.db('requests');
    const collection = database.collection('requests');
    const data = (await collection.find({}).toArray()).reverse();

    return NextResponse.json({ status: 'success', data }, { status: 200 });
}
