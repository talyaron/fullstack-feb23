
import { useEffect, useState } from 'react'

const Timer = () => {
    const [timer, setTimer] = useState(8)
    useEffect(() => {
        const interval = setInterval(() => {
            if (timer > 0) {
                setTimer((prev) => prev - 1)

            }
        }, 1000)
        return () => clearInterval(interval)
    }, [])
    console.log(timer)
    return (
        <div>
            <p>Time remaining: {timer} second</p>
        </div>
    )
}

export default Timer