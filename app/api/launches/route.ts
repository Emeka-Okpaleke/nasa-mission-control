import { NextResponse } from "next/server"

export async function GET() {
  try {
    // In a real application, you would call the SpaceX API here
    // For demo purposes, we'll return mock data

    const mockLaunches = [
      {
        id: "1",
        name: "CRS-25",
        date_utc: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(),
        details: "SpaceX's 25th Commercial Resupply Services mission to the International Space Station.",
        rocket: "Falcon 9",
        launchpad: "Kennedy Space Center",
        success: null,
        upcoming: true,
      },
      {
        id: "2",
        name: "Starlink 4-35",
        date_utc: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000).toISOString(),
        details: "A Falcon 9 rocket will launch a batch of Starlink satellites.",
        rocket: "Falcon 9",
        launchpad: "Cape Canaveral",
        success: null,
        upcoming: true,
      },
      // Add more mock launches as needed
    ]

    return NextResponse.json(mockLaunches)
  } catch (error) {
    console.error("Error in launches API route:", error)
    return NextResponse.json({ error: "Failed to fetch launches" }, { status: 500 })
  }
}

