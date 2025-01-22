import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const { amount } = await request.json()

    // Simulate payment processing delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Simulate a successful payment (you can add conditions to simulate failures if needed)
    const success = Math.random() > 0.1 // 90% success rate

    if (success) {
      return NextResponse.json({
        success: true,
        message: "Payment processed successfully",
        amount: amount,
        transactionId: Math.random().toString(36).substr(2, 9),
      })
    } else {
      throw new Error("Payment failed")
    }
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: "Error processing payment",
      },
      { status: 500 },
    )
  }
}

