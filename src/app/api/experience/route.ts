import { getExperience, getProjects } from "@/lib/notion";
import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  try {
    const posts = await getExperience();
    // console.log(posts);
    return new NextResponse(JSON.stringify(posts), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error: any) {
    return new NextResponse(error.message, { status: 500 });
  }
}
