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
