import { NextResponse } from "next/server"

export async function GET(request: Request) {
    const api = "https://portal.chatbotmaker.io/api/v1/chatbots/cb9242051?null&_=1772718774642"
    const res = await fetch(api, {
        cache: "no-store",
        headers: {
            'Content-type': 'application/json',
            'Authorization':  `${process.env.NEXT_PUBLIC_API_TOKEN_SURI}`
        }
    })
    const resJson = await res.json()

    return NextResponse.json(resJson.admins)
}