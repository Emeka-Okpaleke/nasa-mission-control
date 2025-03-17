import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MissionStatus } from "@/components/mission-status"
import { LaunchCountdown } from "@/components/launch-countdown"
import { UpcomingLaunches } from "@/components/upcoming-launches"
import { LaunchHistory } from "@/components/launch-history"
import { RocketInventory } from "@/components/rocket-inventory"
import { MissionControl } from "@/components/mission-control"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <header className="sticky top-0 z-10 border-b border-gray-800 bg-black/80 backdrop-blur">
        <div className="container flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <div className="rounded-full bg-white p-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-black"
              >
                <circle cx="12" cy="12" r="10" />
                <circle cx="12" cy="12" r="4" />
                <line x1="4.93" y1="4.93" x2="9.17" y2="9.17" />
                <line x1="14.83" y1="14.83" x2="19.07" y2="19.07" />
                <line x1="14.83" y1="9.17" x2="19.07" y2="4.93" />
                <line x1="4.93" y1="19.07" x2="9.17" y2="14.83" />
              </svg>
            </div>
            <span className="text-lg font-bold">NASA Mission Control</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-sm font-medium hover:text-blue-400">
              Dashboard
            </Link>
            <Link href="/launches" className="text-sm font-medium hover:text-blue-400">
              Launches
            </Link>
            <Link href="/rockets" className="text-sm font-medium hover:text-blue-400">
              Rockets
            </Link>
            <Link href="/missions" className="text-sm font-medium hover:text-blue-400">
              Missions
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              className="border-gray-700 bg-gray-800 text-cyan-300 hover:bg-gray-700 hover:text-cyan-200 font-medium"
            >
              Login
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1 py-8">
        <div className="container px-4">
          <div className="grid gap-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="bg-gray-900 border-gray-800">
                <CardHeader className="pb-2">
                  <CardTitle>Next Launch</CardTitle>
                  <CardDescription>SpaceX Falcon 9 - CRS-25</CardDescription>
                </CardHeader>
                <CardContent>
                  <LaunchCountdown />
                </CardContent>
              </Card>
              <Card className="bg-gray-900 border-gray-800">
                <CardHeader className="pb-2">
                  <CardTitle>Mission Status</CardTitle>
                  <CardDescription>Current mission parameters</CardDescription>
                </CardHeader>
                <CardContent>
                  <MissionStatus />
                </CardContent>
              </Card>
              <Card className="bg-gray-900 border-gray-800">
                <CardHeader className="pb-2">
                  <CardTitle>Weather Conditions</CardTitle>
                  <CardDescription>Launch site conditions</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-yellow-400"
                      >
                        <circle cx="12" cy="12" r="5" />
                        <line x1="12" y1="1" x2="12" y2="3" />
                        <line x1="12" y1="21" x2="12" y2="23" />
                        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                        <line x1="1" y1="12" x2="3" y2="12" />
                        <line x1="21" y1="12" x2="23" y2="12" />
                        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                      </svg>
                      <span className="text-lg font-bold">72°F</span>
                    </div>
                    <div>
                      <div className="text-sm">Wind: 5 mph</div>
                      <div className="text-sm">Visibility: 10 miles</div>
                      <div className="text-sm text-green-400">GO for launch</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            <Tabs defaultValue="mission-control" className="space-y-4">
              <TabsList className="bg-gray-900 border-gray-800">
                <TabsTrigger value="mission-control">Mission Control</TabsTrigger>
                <TabsTrigger value="upcoming-launches">Upcoming Launches</TabsTrigger>
                <TabsTrigger value="launch-history">Launch History</TabsTrigger>
                <TabsTrigger value="rocket-inventory">Rocket Inventory</TabsTrigger>
              </TabsList>
              <TabsContent value="mission-control" className="space-y-4">
                <MissionControl />
              </TabsContent>
              <TabsContent value="upcoming-launches" className="space-y-4">
                <UpcomingLaunches />
              </TabsContent>
              <TabsContent value="launch-history" className="space-y-4">
                <LaunchHistory />
              </TabsContent>
              <TabsContent value="rocket-inventory" className="space-y-4">
                <RocketInventory />
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
      <footer className="border-t border-gray-800 py-6 bg-black">
        <div className="container px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-sm text-gray-400">
              © {new Date().getFullYear()} NASA Mission Control. All rights reserved.
            </div>
            <div className="flex items-center gap-4">
              <Link href="#" className="text-sm text-gray-400 hover:text-white">
                Privacy Policy
              </Link>
              <Link href="#" className="text-sm text-gray-400 hover:text-white">
                Terms of Service
              </Link>
              <Link href="#" className="text-sm text-gray-400 hover:text-white">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

