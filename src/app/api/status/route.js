import connectMongoDB from "../../../libs/mongodb";
import Status from "../../../models/status";
import { NextResponse } from "next/server";

export async function GET() {
  await connectMongoDB();
  const statuses = await Status.find();
  return NextResponse.json({ statuses });
}