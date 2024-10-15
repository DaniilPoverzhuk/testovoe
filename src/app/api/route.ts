import path from 'path';
import { writeFile } from 'fs/promises';
import { NextResponse } from 'next/server';
import { MongoClient } from 'mongodb';

import type { IUserRequest } from '@/types';

async function uploadPhoto(file: File) {
    const folderPath = `${process.cwd()}/public/images/`;
    const fileName = `${Date.now()}-${file.name}`;
    const filePath = path.join(folderPath, fileName);

    try {
        const buffer = Buffer.from(await file.arrayBuffer());
        await writeFile(filePath, buffer);

        return fileName;
    } catch (err) {
        return null;
    }
}

function getFormattedData(formData: FormData, photoName: string) {
    const data = {} as IUserRequest;

    formData.forEach((value, key) => {
        if (key === 'photo') {
            const path = process.env.NEXT_PUBLIC_URL + 'images/' + photoName;
            return (data[key] = path);
        }

        data[key as keyof IUserRequest] = value as string;
    });

    return data;
}

async function createRequest(data: IUserRequest) {
    try {
        const client = new MongoClient(process.env.NEXT_PUBLIC_MONGODB_URL!, {});

        await client.connect();

        const database = client.db('requests');
        const collection = database.collection('requests');

        await collection.insertOne(data);

        return data;
    } catch (err) {
        return null;
    }
}

export async function POST(req: Request) {
    const formData = await req.formData();
    const photo = formData.get('photo') as File;

    if (!photo) {
        return NextResponse.json({ message: 'photo is required' }, { status: 400 });
    }

    const photoName = await uploadPhoto(photo);

    if (!photoName) {
        return NextResponse.json({ message: 'an error occurred when uploading a photo' }, { status: 500 });
    }

    const data = getFormattedData(formData, photoName);
    const createdRequest = await createRequest(data); // request - заявка

    if (!createdRequest) {
        return NextResponse.json({ message: 'an error occurred when creating the application' }, { status: 500 });
    }

    return NextResponse.json({ message: "the user's request has been successfully received", data: createdRequest }, { status: 200 });
}
