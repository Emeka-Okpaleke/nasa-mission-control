import { NextResponse } from "next/server"

export async function GET() {
  try {
    // In a real application, you would call the SpaceX API here
    // For demo purposes, we'll return mock data

    const mockRockets = [
      {
        id: "1",
        name: "Falcon 9",
        type: "Orbital Launch Vehicle",
        status: "active",
        stages: 2,
        boosters: 0,
        cost_per_launch: 50000000,
        success_rate: 98,
        first_flight: "2010-06-04",
        height: 70,
        diameter: 3.7,
        mass: 549054,
      },
      {
        id: "2",
        name: "Falcon Heavy",
        type: "Orbital Launch Vehicle",
        status: "active",
        stages: 2,
        boosters: 2,
        cost_per_launch: 90000000,
        success_rate: 100,
        first_flight: "2018-02-06",
        height: 70,
        diameter: 12.2,
        mass: 1420788,
      },
      // Add more mock rockets as needed
    ]

    return NextResponse.json(mockRockets)
  } catch (error) {
    console.error("Error in rockets API route:", error)
    return NextResponse.json({ error: "Failed to fetch rockets" }, { status: 500 })
  }
}

