import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { email, password, firstName, lastName } = await req.json();

    if (!email || !password || !firstName || !lastName) {
      return NextResponse.json({ message: "Missing required fields" }, { status: 400 });
    }

    const response = await fetch("http://localhost:8000/users/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password, first_name: firstName, last_name: lastName }),
    });

    if (!response.ok) {
      return NextResponse.json({ message: "Registration failed" }, { status: response.status });
    }

    const data = await response.json();
    return NextResponse.json({ message: "User registered successfully", user: data }, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}
