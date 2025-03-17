"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"

export function MissionControl() {
  const [telemetryData, setTelemetryData] = useState({
    altitude: 0,
    velocity: 0,
    temperature: 22,
    pressure: 1,
    fuel: 100,
    oxygen: 100,
  })

  const [systemStatus, setSystemStatus] = useState({
    primaryPower: true,
    backupPower: true,
    communications: true,
    lifeSupportPrimary: true,
    lifeSupportBackup: false,
    navigationSystem: true,
    propulsionMain: false,
    propulsionSecondary: false,
  })

  const [launchSequence, setLaunchSequence] = useState({
    preFlightChecks: false,
    fuelLoading: false,
    engineIgnition: false,
    mainEngineStart: false,
    liftoff: false,
  })

  const toggleSystem = (system: keyof typeof systemStatus) => {
    setSystemStatus((prev) => ({
      ...prev,
      [system]: !prev[system],
    }))
  }

  const startLaunchSequence = () => {
    setLaunchSequence({
      preFlightChecks: true,
      fuelLoading: false,
      engineIgnition: false,
      mainEngineStart: false,
      liftoff: false,
    })

    // Simulate launch sequence
    setTimeout(() => {
      setLaunchSequence((prev) => ({ ...prev, fuelLoading: true }))
    }, 2000)

    setTimeout(() => {
      setLaunchSequence((prev) => ({ ...prev, engineIgnition: true }))
    }, 4000)

    setTimeout(() => {
      setLaunchSequence((prev) => ({ ...prev, mainEngineStart: true }))
    }, 6000)

    setTimeout(() => {
      setLaunchSequence((prev) => ({ ...prev, liftoff: true }))

      // Start telemetry updates
      let altitude = 0
      let velocity = 0
      let fuel = 100

      const telemetryInterval = setInterval(() => {
        altitude += 10
        velocity += 5
        fuel -= 0.5

        setTelemetryData((prev) => ({
          ...prev,
          altitude,
          velocity,
          fuel: Math.max(0, fuel),
        }))

        if (fuel <= 0) {
          clearInterval(telemetryInterval)
        }
      }, 1000)
    }, 8000)
  }

  const abortLaunchSequence = () => {
    setLaunchSequence({
      preFlightChecks: false,
      fuelLoading: false,
      engineIgnition: false,
      mainEngineStart: false,
      liftoff: false,
    })

    setTelemetryData({
      altitude: 0,
      velocity: 0,
      temperature: 22,
      pressure: 1,
      fuel: 100,
      oxygen: 100,
    })
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <Card className="md:col-span-2 bg-gray-900 border-gray-800">
        <CardHeader>
          <CardTitle>Mission Telemetry</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <div className="text-sm text-gray-400">Altitude</div>
              <div className="text-2xl font-bold">{telemetryData.altitude.toLocaleString()} km</div>
              <Progress value={Math.min(telemetryData.altitude / 10, 100)} className="h-2 bg-gray-800" />
            </div>
            <div className="space-y-2">
              <div className="text-sm text-gray-400">Velocity</div>
              <div className="text-2xl font-bold">{telemetryData.velocity.toLocaleString()} km/h</div>
              <Progress value={Math.min(telemetryData.velocity / 5, 100)} className="h-2 bg-gray-800" />
            </div>
            <div className="space-y-2">
              <div className="text-sm text-gray-400">Temperature</div>
              <div className="text-2xl font-bold">{telemetryData.temperature}°C</div>
              <Progress value={(telemetryData.temperature / 100) * 100} className="h-2 bg-gray-800" />
            </div>
            <div className="space-y-2">
              <div className="text-sm text-gray-400">Pressure</div>
              <div className="text-2xl font-bold">{telemetryData.pressure} atm</div>
              <Progress value={telemetryData.pressure * 100} className="h-2 bg-gray-800" />
            </div>
            <div className="space-y-2">
              <div className="text-sm text-gray-400">Fuel</div>
              <div className="text-2xl font-bold">{telemetryData.fuel}%</div>
              <Progress value={telemetryData.fuel} className="h-2 bg-gray-800" />
            </div>
            <div className="space-y-2">
              <div className="text-sm text-gray-400">Oxygen</div>
              <div className="text-2xl font-bold">{telemetryData.oxygen}%</div>
              <Progress value={telemetryData.oxygen} className="h-2 bg-gray-800" />
            </div>
          </div>

          <div className="mt-6 space-y-4">
            <div className="text-sm font-medium">Launch Sequence</div>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-2">
              <div
                className={`p-2 rounded-md text-center text-sm ${launchSequence.preFlightChecks ? "bg-green-900/30 text-green-400" : "bg-gray-800 text-gray-400"}`}
              >
                Pre-flight Checks
              </div>
              <div
                className={`p-2 rounded-md text-center text-sm ${launchSequence.fuelLoading ? "bg-green-900/30 text-green-400" : "bg-gray-800 text-gray-400"}`}
              >
                Fuel Loading
              </div>
              <div
                className={`p-2 rounded-md text-center text-sm ${launchSequence.engineIgnition ? "bg-green-900/30 text-green-400" : "bg-gray-800 text-gray-400"}`}
              >
                Engine Ignition
              </div>
              <div
                className={`p-2 rounded-md text-center text-sm ${launchSequence.mainEngineStart ? "bg-green-900/30 text-green-400" : "bg-gray-800 text-gray-400"}`}
              >
                Main Engine Start
              </div>
              <div
                className={`p-2 rounded-md text-center text-sm ${launchSequence.liftoff ? "bg-green-900/30 text-green-400" : "bg-gray-800 text-gray-400"}`}
              >
                Liftoff
              </div>
            </div>

            <div className="flex gap-4 mt-4">
              <Button
                onClick={startLaunchSequence}
                disabled={Object.values(launchSequence).some(Boolean)}
                className="bg-green-600 hover:bg-green-700 text-white"
              >
                Start Launch Sequence
              </Button>
              <Button
                onClick={abortLaunchSequence}
                variant="destructive"
                disabled={!Object.values(launchSequence).some(Boolean)}
              >
                Abort
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-gray-900 border-gray-800">
        <CardHeader>
          <CardTitle>Systems Control</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="power">
            <TabsList className="bg-gray-800">
              <TabsTrigger value="power">Power</TabsTrigger>
              <TabsTrigger value="life-support">Life Support</TabsTrigger>
              <TabsTrigger value="propulsion">Propulsion</TabsTrigger>
            </TabsList>
            <TabsContent value="power" className="space-y-4 mt-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="primary-power">Primary Power</Label>
                  <div className="text-sm text-gray-400">Main power systems</div>
                </div>
                <Switch
                  id="primary-power"
                  checked={systemStatus.primaryPower}
                  onCheckedChange={() => toggleSystem("primaryPower")}
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="backup-power">Backup Power</Label>
                  <div className="text-sm text-gray-400">Emergency systems</div>
                </div>
                <Switch
                  id="backup-power"
                  checked={systemStatus.backupPower}
                  onCheckedChange={() => toggleSystem("backupPower")}
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="communications">Communications</Label>
                  <div className="text-sm text-gray-400">Radio and data links</div>
                </div>
                <Switch
                  id="communications"
                  checked={systemStatus.communications}
                  onCheckedChange={() => toggleSystem("communications")}
                />
              </div>
            </TabsContent>
            <TabsContent value="life-support" className="space-y-4 mt-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="life-support-primary">Primary Life Support</Label>
                  <div className="text-sm text-gray-400">Main oxygen and pressure</div>
                </div>
                <Switch
                  id="life-support-primary"
                  checked={systemStatus.lifeSupportPrimary}
                  onCheckedChange={() => toggleSystem("lifeSupportPrimary")}
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="life-support-backup">Backup Life Support</Label>
                  <div className="text-sm text-gray-400">Emergency systems</div>
                </div>
                <Switch
                  id="life-support-backup"
                  checked={systemStatus.lifeSupportBackup}
                  onCheckedChange={() => toggleSystem("lifeSupportBackup")}
                />
              </div>
              <div className="space-y-2">
                <Label>Oxygen Level</Label>
                <Slider
                  defaultValue={[telemetryData.oxygen]}
                  max={100}
                  step={1}
                  onValueChange={(value) => setTelemetryData((prev) => ({ ...prev, oxygen: value[0] }))}
                />
              </div>
              <div className="space-y-2">
                <Label>Temperature Control</Label>
                <Slider
                  defaultValue={[telemetryData.temperature]}
                  min={15}
                  max={30}
                  step={0.5}
                  onValueChange={(value) => setTelemetryData((prev) => ({ ...prev, temperature: value[0] }))}
                />
              </div>
            </TabsContent>
            <TabsContent value="propulsion" className="space-y-4 mt-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="propulsion-main">Main Engines</Label>
                  <div className="text-sm text-gray-400">Primary thrust</div>
                </div>
                <Switch
                  id="propulsion-main"
                  checked={systemStatus.propulsionMain}
                  onCheckedChange={() => toggleSystem("propulsionMain")}
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="propulsion-secondary">Maneuvering Thrusters</Label>
                  <div className="text-sm text-gray-400">Attitude control</div>
                </div>
                <Switch
                  id="propulsion-secondary"
                  checked={systemStatus.propulsionSecondary}
                  onCheckedChange={() => toggleSystem("propulsionSecondary")}
                />
              </div>
              <div className="space-y-2">
                <Label>Thrust Level</Label>
                <Slider defaultValue={[0]} max={100} step={1} disabled={!systemStatus.propulsionMain} />
              </div>
              <div className="space-y-2">
                <Label>Fuel Flow Rate</Label>
                <Slider defaultValue={[50]} max={100} step={1} disabled={!systemStatus.propulsionMain} />
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}

// Helper component for progress bars
function Progress({ value, className }: { value: number; className?: string }) {
  return (
    <div className={`h-2 w-full bg-gray-700 rounded-full overflow-hidden ${className}`}>
      <div className="h-full bg-blue-500 rounded-full" style={{ width: `${Math.min(Math.max(value, 0), 100)}%` }} />
    </div>
  )
}

