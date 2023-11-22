import {createCollectionCategories, createCollectionUser} from "@/app/utils/migrations/createCollections";
import {NextRequest, NextResponse} from "next/server";

export async function GET(request: NextRequest, response: NextResponse) {
    await createCollectionUser();
    await createCollectionCategories();

    return new Response('Success', { status: 200 });
}