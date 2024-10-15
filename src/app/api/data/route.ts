import { NextResponse } from 'next/server';
import { MongoClient } from 'mongodb';

export async function GET() {
    const client = new MongoClient(process.env.NEXT_PUBLIC_MONGODB_URL!, {});

    try {
        await client.connect();

        const database = client.db('requests');
        const collection = database.collection('requests');
        const data = (await collection.find({}).toArray()).reverse();

        return NextResponse.json({ message: 'the data was successfully received', data }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: 'an error occurred while receiving the data' }, { status: 200 });
    }
}
