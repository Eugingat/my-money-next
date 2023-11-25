import {cookies} from "next/headers";
export async function PUT() {
    cookies().delete('token');

    return new Response('Success', {
        status: 201
    });
}