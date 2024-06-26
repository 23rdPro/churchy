import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  if (!process.env.FACEBOOK) {
    throw new Error("set facebook appId ):");
  };
  const facebookId = process.env.FACEBOOK;
  return facebookId
    ? NextResponse.json({ facebookId })
    : NextResponse.json({ error: "ID not found" }, { status: 500 });
};
