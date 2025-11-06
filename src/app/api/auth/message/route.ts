import { NextRequest, NextResponse } from "next/server";
import Backendless from "@/utils/backendless";

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { name, email, message } = body;

        const response = await Backendless.Data.of("PersonalWebMessages").save({
            name,
            email,
            message,
        });

        return NextResponse.json(
            {
                success: true,
                message: "Message has been sent.",
                data: response,
            },
            { status: 200 }
        );
    } catch (error: unknown) {
        const errorMessage =
            error instanceof Error
                ? error.message
                : "An error occurred while saving message.";

        return NextResponse.json(
            {
                success: false,
                message: errorMessage,
            },
            { status: 500 }
        );
    }
}
