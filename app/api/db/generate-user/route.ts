import {createCollectionUser} from "@/app/utils/migrations/createCollections";
import {NextRequest, NextResponse} from "next/server";

export async function GET(request: NextRequest, response: NextResponse) {
    await createCollectionUser()

    return new Response('Success', { status: 200 });
}