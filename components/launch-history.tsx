"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Skeleton } from "@/components/ui/skeleton"

interface Launch {
  id: string
  name: string
  date_utc: string
  details: string | null
  rocket: string
  launchpad: string
  success: boolean | null
  upcoming: boolean
}

export function LaunchHistory() {
  const [launches, setLaunches] = useState<Launch[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchLaunches() {
      try {
        setLoading(true)
        // In a real app, this would fetch from your backend which calls the SpaceX API
        // For demo purposes, we're using mock data

        // Simulating API call delay
        await new Promise((resolve) => setTimeout(resolve, 1000))

        const mockLaunches: Launch[] = [
          {
            id: "1",
            name: "CRS-24",
            date_utc: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString(),
            details: "SpaceX's 24th Commercial Resupply Services mission to the International Space Station.",
            rocket: "Falcon 9",
            launchpad: "Kennedy Space Center",
            success: true,
            upcoming: false,
          },
          {
            id: "2",
            name: "Starlink 4-34",
            date_utc: new Date(Date.now() - 45 * 24 * 60 * 60 * 1000).toISOString(),
            details: "A Falcon 9 rocket launched a batch of Starlink satellites.",
            rocket: "Falcon 9",
            launchpad: "Cape Canaveral",
            success: true,
            upcoming: false,
          },
          {
            id: "3",
            name: "Transporter-3",
            date_utc: new Date(Date.now() - 60 * 24 * 60 * 60 * 1000).toISOString(),
            details: "SpaceX's third dedicated SmallSat Rideshare Program mission.",
            rocket: "Falcon 9",
            launchpad: "Cape Canaveral",
            success: true,
            upcoming: false,
          },
          {
            id: "4",
            name: "DART Mission",
            date_utc: new Date(Date.now() - 90 * 24 * 60 * 60 * 1000).toISOString(),
            details: "Double Asteroid Redirection Test (DART) mission, NASA's first planetary defense test mission.",
            rocket: "Falcon 9",
            launchpad: "Vandenberg",
            success: true,
            upcoming: false,
          },
        ]

        setLaunches(mockLaunches)
      } catch (error) {
        console.error("Failed to fetch launches:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchLaunches()
  }, [])

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[...Array(4)].map((_, i) => (
          <Card key={i} className="bg-gray-900 border-gray-800">
            <CardHeader className="pb-2">
              <Skeleton className="h-5 w-1/3 bg-gray-800" />
              <Skeleton className="h-4 w-1/2 bg-gray-800 mt-2" />
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <Skeleton className="h-4 w-full bg-gray-800" />
                <Skeleton className="h-4 w-full bg-gray-800" />
                <Skeleton className="h-4 w-3/4 bg-gray-800" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {launches.map((launch) => (
        <Card key={launch.id} className="bg-gray-900 border-gray-800">
          <CardHeader className="pb-2">
            <div className="flex justify-between items-start">
              <CardTitle>{launch.name}</CardTitle>
              <Badge
                variant="outline"
                className={
                  launch.success
                    ? "bg-green-900/30 text-green-400 border-green-800"
                    : "bg-red-900/30 text-red-400 border-red-800"
                }
              >
                {launch.success ? "Success" : "Failed"}
              </Badge>
            </div>
            <div className="text-sm text-gray-400">
              {new Date(launch.date_utc).toLocaleDateString()} - {launch.rocket}
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <p className="text-sm">{launch.details || "No details available."}</p>
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Launchpad:</span>
                <span>{launch.launchpad}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Launch Date:</span>
                <span>{new Date(launch.date_utc).toLocaleDateString()}</span>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

