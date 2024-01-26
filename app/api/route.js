import { NextResponse } from "next/server";
import { ConnectDB } from "@/lib/config/db";
import TodoModel from "@/lib/models/TodoModel";

const LoadDB = async () => {
  await ConnectDB();
};

LoadDB();

// export async function GET(req) {
//   return NextResponse.json({ msg: "Hello From Next server" });
// }
export async function POST(req) {
  const { title, description } = await req.json();

  await TodoModel.create({
    title,
    description,
  });

  return NextResponse.json({ msg: "Todo Created" });
}
export async function GET(req) {
  const todos = await TodoModel.find({});

  return NextResponse.json({ todos });
}

export async function DELETE(req) {
  const id = req.nextUrl.searchParams.get("id");
  await TodoModel.findByIdAndDelete(id);

  return NextResponse.json({ msg: "Todo Deleted" }, { status: 200 });
}
export async function PUT(req) {
  const id = req.nextUrl.searchParams.get("id");
  const test = await TodoModel.findByIdAndUpdate(id, {
    $set: {
      isComplete: true,
    },
  });

  console.log(test, req.nextUrl);

  return NextResponse.json({ msg: "Todo marked completed" }, { status: 200 });
}
