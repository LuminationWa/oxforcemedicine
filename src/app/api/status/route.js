import connectMongoDB from "../../../libs/mongodb";
import Status from "../../../models/status";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { title, description } = await request.json();
  await connectMongoDB();
  await Status.create({ title, description });
  return NextResponse.json({ message: "Status Created" }, { status: 201 });
}

export async function GET() {
  await connectMongoDB();
  const statuses = await Status.find();
  return NextResponse.json({ statuses });
}

export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");
  await connectMongoDB();
  await Status.findByIdAndDelete(id);
  return NextResponse.json({ message: "Status deleted" }, { status: 200 });
}