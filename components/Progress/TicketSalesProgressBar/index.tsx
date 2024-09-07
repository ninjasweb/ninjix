import React from "react"

interface TicketSalesProgressProps {
  percentageSold: number
}

export default function TicketSalesProgress({
  percentageSold = 0,
}: TicketSalesProgressProps) {
  // Ensure the percentage is between 0 and 100
  const clampedPercentage = Math.max(0, Math.min(100, percentageSold))

  // Determine the color based on the percentage sold
  const getColor = () => {
    if (clampedPercentage >= 80) return "bg-red-500"
    if (clampedPercentage >= 50) return "bg-orange-500"
    return "bg-green-500"
  }

  return (
    <div className="w-full max-w-md mx-auto mt-8">
      <div className="mb-2 flex justify-between items-center">
        <span className="text-sm font-medium text-gray-400">Tickets Sold</span>
        <span className="text-sm font-medium text-gray-400">
          {clampedPercentage}%
        </span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div
          className={`h-2.5 rounded-full ${getColor()}`}
          style={{ width: `${clampedPercentage}%` }}
          role="progressbar"
          aria-valuenow={clampedPercentage}
          aria-valuemin={0}
          aria-valuemax={100}
        ></div>
      </div>
      <p className="mt-2 text-sm text-gray-400">
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
