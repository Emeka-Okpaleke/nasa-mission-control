"use client"

import { useEffect, useState } from "react"
import { Progress } from "@/components/ui/progress"

export function LaunchCountdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    // Set a future date for the next launch (example: 7 days from now)
    const launchDate = new Date()
    launchDate.setDate(launchDate.getDate() + 7)

    const timer = setInterval(() => {
      const now = new Date()
      const difference = launchDate.getTime() - now.getTime()

      if (difference <= 0) {
        clearInterval(timer)
        return
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24))
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((difference % (1000 * 60)) / 1000)

      setTimeLeft({ days, hours, minutes, seconds })

      // Calculate progress (inverse - starts at 100 and goes to 0)
      const totalSeconds = 7 * 24 * 60 * 60 // 7 days in seconds
      const secondsLeft = days * 24 * 60 * 60 + hours * 60 * 60 + minutes * 60 + seconds
      const progressValue = 100 - (secondsLeft / totalSeconds) * 100
      setProgress(progressValue)
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-4 gap-2 text-center">
        <div className="bg-gray-800 rounded-md p-2">
          <div className="text-2xl font-bold text-cyan-300">{timeLeft.days}</div>
          <div className="text-xs text-gray-400">Days</div>
        </div>
        <div className="bg-gray-800 rounded-md p-2">
          <div className="text-2xl font-bold text-cyan-300">{timeLeft.hours}</div>
          <div className="text-xs text-gray-400">Hours</div>
        </div>
        <div className="bg-gray-800 rounded-md p-2">
          <div className="text-2xl font-bold text-cyan-300">{timeLeft.minutes}</div>
          <div className="text-xs text-gray-400">Minutes</div>
        </div>
        <div className="bg-gray-800 rounded-md p-2">
          <div className="text-2xl font-bold text-cyan-300">{timeLeft.seconds}</div>
          <div className="text-xs text-gray-400">Seconds</div>
        </div>
      </div>
      <Progress value={progress} className="h-2 bg-gray-800" />
      <div className="flex justify-between text-xs text-gray-400">
        <span>
          T-{timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
        </span>
        <span>Launch Day</span>
      </div>
    </div>
  )
}

