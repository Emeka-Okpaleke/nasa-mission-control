import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { UpcomingLaunches } from "@/components/upcoming-launches"
import { LaunchHistory } from "@/components/launch-history"

export default function LaunchesPage() {
  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <header className="sticky top-0 z-10 border-b border-gray-800 bg-black/80 backdrop-blur">
        <div className="container flex h-16 items-center px-4">
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
        </div>
      </header>
      <main className="flex-1 py-8">
        <div className="container px-4">
          <div className="grid gap-6">
            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle>Launch Schedule</CardTitle>
                <CardDescription>Upcoming and past SpaceX launches</CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="upcoming" className="space-y-4">
                  <TabsList className="bg-gray-900 border-gray-800">
                    <TabsTrigger value="upcoming">Upcoming Launches</TabsTrigger>
                    <TabsTrigger value="past">Launch History</TabsTrigger>
                  </TabsList>
                  <TabsContent value="upcoming" className="space-y-4">
                    <UpcomingLaunches />
                  </TabsContent>
                  <TabsContent value="past" className="space-y-4">
                    <LaunchHistory />
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}

