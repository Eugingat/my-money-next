import {NextRequest, NextResponse} from "next/server";

export async function GET() {}

export async function POST(request: NextRequest, response: NextResponse) {
    console.log(request.body);
}

export async function PUT() {}