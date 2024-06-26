import { getEntries } from "@/app/utils/libs";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const contentType = "blog";
  if (!contentType.length) {
    throw new Error("set content type :(");
  }
  const items = await getEntries({ contentType: contentType });
  return items
    ? NextResponse.json({ items })
    : NextResponse.json({ error: "not found" }, { status: 500 });
}
