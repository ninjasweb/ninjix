import React from "react"

interface CircularTicketSalesProgressProps {
  percentageSold: number
}

export default function CircularTicketSalesProgress({
  percentageSold = 0,
}: CircularTicketSalesProgressProps) {
  // Ensure the percentage is between 0 and 100
  const clampedPercentage = Math.max(0, Math.min(100, percentageSold))

  // Determine the color based on the percentage sold
  const getColor = () => {
    if (clampedPercentage >= 80) return "text-red-500"
    if (clampedPercentage >= 50) return "text-orange-500"
    return "text-green-500"
  }

  // Calculate the circumference and offset of the circle
  const circumference = 2 * Math.PI * 90 // 90 is the radius of the circle
  const strokeDasharray = circumference
  const strokeDashoffset =
    circumference - (clampedPercentage / 100) * circumference

  return (
    <div className="w-full max-w-xs mx-auto mt-8">
      <div className="relative">
        <svg className="w-64 h-64 mx-auto" viewBox="0 0 200 200">
          <circle
            className="text-gray-200"
            strokeWidth="10"
            stroke="currentColor"
            fill="transparent"
            r="90"
            cx="100"
            cy="100"
          />
          <circle
            className={getColor()}
            strokeWidth="10"
            strokeDasharray={strokeDasharray}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            stroke="currentColor"
            fill="transparent"
            r="90"
            cx="100"
            cy="100"
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-3xl font-bold">{clampedPercentage}%</span>
          <span className="text-sm text-gray-400">Tickets Sold</span>
        </div>
      </div>
      <p className="mt-4 text-center text-sm text-gray-400">
        {clampedPercentage < 50 &&
          "Tickets are still available - don't miss out!"}
        {clampedPercentage >= 50 &&
          clampedPercentage < 80 &&
          "Hurry! Over half of the tickets are already gone!"}
        {clampedPercentage >= 80 && "Last chance! Only a few tickets left!"}
      </p>
    </div>
  )
}
