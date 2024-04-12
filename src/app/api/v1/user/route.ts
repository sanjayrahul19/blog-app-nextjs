import { User } from "@/models/user";
import { connectDB } from "@/utils/connectMongoose";
import {NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json();
    const body={email, password};
    await connectDB();
    const user = await User.create(body);
    if (user) {
      return NextResponse.json(
        { status: true, message: "User created successfully", data: user },
        { status: 200 }
      ); // HTTP status code for Created
    }
    return NextResponse.json(
      { status: false, message: "Failed to create user", data: {} },
      { status: 400 }
    ); // HTTP status code for Bad Request
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { status: false, message: "Internal Server Error" },
      { status: 500 }
    ); // HTTP status code for Internal Server Error
  }
}
