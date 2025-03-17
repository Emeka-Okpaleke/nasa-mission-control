"use client"

import { Badge } from "@/components/ui/badge"

export function MissionStatus() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <span className="text-sm">Mission Status</span>
        <Badge variant="outline" className="bg-green-900/30 text-green-400 border-green-800">
          Active
        </Badge>
      </div>
      <div className="space-y-2">
        <div className="flex justify-between">
          <span className="text-sm text-gray-400">Telemetry</span>
          <span className="text-sm text-green-400">Online</span>
        </div>
        <div className="flex justify-between">
          <span className="text-sm text-gray-400">Communication</span>
          <span className="text-sm text-green-400">Stable</span>
        </div>
        <div className="flex justify-between">
          <span className="text-sm text-gray-400">Propulsion</span>
          <span className="text-sm text-green-400">Nominal</span>
        </div>
        <div className="flex justify-between">
          <span className="text-sm text-gray-400">Life Support</span>
          <span className="text-sm text-green-400">Optimal</span>
        </div>
        <div className="flex justify-between">
          <span className="text-sm text-gray-400">Payload</span>
          <span className="text-sm text-yellow-400">Standby</span>
        </div>
      </div>
    </div>
  )
}

