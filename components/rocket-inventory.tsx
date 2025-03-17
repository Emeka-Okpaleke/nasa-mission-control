"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Skeleton } from "@/components/ui/skeleton"

interface Rocket {
  id: string
  name: string
  type: string
  status: "active" | "inactive" | "retired"
  stages: number
  boosters: number
  cost_per_launch: number
  success_rate: number
  first_flight: string
  height: number
  diameter: number
  mass: number
}

export function RocketInventory() {
  const [rockets, setRockets] = useState<Rocket[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchRockets() {
      try {
        setLoading(true)
        // In a real app, this would fetch from your backend which calls the SpaceX API
        // For demo purposes, we're using mock data

        // Simulating API call delay
        await new Promise((resolve) => setTimeout(resolve, 1000))

        const mockRockets: Rocket[] = [
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
          {
            id: "3",
            name: "Starship",
            type: "Orbital Launch Vehicle",
            status: "active",
            stages: 2,
            boosters: 0,
            cost_per_launch: 7000000,
            success_rate: 85,
            first_flight: "2021-12-01",
            height: 120,
            diameter: 9,
            mass: 5000000,
          },
        ]

        setRockets(mockRockets)
      } catch (error) {
        console.error("Failed to fetch rockets:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchRockets()
  }, [])

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[...Array(3)].map((_, i) => (
          <Card key={i} className="bg-gray-900 border-gray-800">
            <CardHeader className="pb-2">
              <Skeleton className="h-5 w-1/3 bg-gray-800" />
              <Skeleton className="h-4 w-1/2 bg-gray-800 mt-2" />
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <Skeleton className="h-4 w-full bg-gray-800" />
                <Skeleton className="h-4 w-full bg-gray-800" />
                <Skeleton className="h-4 w-3/4 bg-gray-800" />
                <Skeleton className="h-2 w-full bg-gray-800" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {rockets.map((rocket) => (
        <Card key={rocket.id} className="bg-gray-900 border-gray-800">
          <CardHeader className="pb-2">
            <div className="flex justify-between items-start">
              <CardTitle>{rocket.name}</CardTitle>
              <Badge
                variant="outline"
                className={
                  rocket.status === "active"
                    ? "bg-green-900/30 text-green-400 border-green-800"
                    : "bg-gray-800 text-gray-400 border-gray-700"
                }
              >
                {rocket.status.charAt(0).toUpperCase() + rocket.status.slice(1)}
              </Badge>
            </div>
            <div className="text-sm text-gray-400">{rocket.type}</div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div>
                  <div className="text-gray-400">First Flight</div>
                  <div>{new Date(rocket.first_flight).toLocaleDateString()}</div>
                </div>
                <div>
                  <div className="text-gray-400">Cost per Launch</div>
                  <div>${(rocket.cost_per_launch / 1000000).toFixed(1)}M</div>
                </div>
                <div>
                  <div className="text-gray-400">Height</div>
                  <div>{rocket.height}m</div>
                </div>
                <div>
                  <div className="text-gray-400">Diameter</div>
                  <div>{rocket.diameter}m</div>
                </div>
                <div>
                  <div className="text-gray-400">Mass</div>
                  <div>{(rocket.mass / 1000).toFixed(1)} tons</div>
                </div>
                <div>
                  <div className="text-gray-400">Stages</div>
                  <div>{rocket.stages}</div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm text-gray-400">Success Rate</span>
                  <span className="text-sm">{rocket.success_rate}%</span>
                </div>
                <Progress value={rocket.success_rate} className="h-2 bg-gray-800" />
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

