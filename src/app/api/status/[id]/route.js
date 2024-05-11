import connectMongoDB from "../../../../libs/mongodb";
import Status from "../../../../models/status";
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
  const { id } = params;
  const { newTitle: title, newDescription: description } = await request.json();
  await connectMongoDB();
  await Status.findByIdAndUpdate(id, { title, description });
  return NextResponse.json({ message: "Status updated" }, { status: 200 });
}

export async function GET(request, { params }) {
  const { id } = params;
  await connectMongoDB();
  const status = await Status.findOne({ _id: id });
  return NextResponse.json({ status }, { status: 200 });
}