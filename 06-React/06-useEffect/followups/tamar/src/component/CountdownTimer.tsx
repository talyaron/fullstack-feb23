import React from 'react'
import { useEffect, useState} from "react";

export default function CountdownTimer() {
    const [timedown, setTimedown] = useState(10)

    useEffect(() => {
        const timeInterval = setInterval(() => {
            if (timedown > 0) {
                setTimedown((prev) => prev - 1)
            }
        }, 1000)
        return () => {
            clearInterval(timeInterval)
        }
    }, [timedown])

  return (
    <div>
      <p>Time Remaining: {timedown}</p>
    </div>
  )
}
