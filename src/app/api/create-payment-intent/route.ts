import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    // Simulate payment processing delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    return NextResponse.json({
      success: true,
      message: "Payment processed successfully",
    })
  } catch (error) {
    return NextResponse.json({
      error: "Error processing payment",
      status: 500,
    })
  }
}

