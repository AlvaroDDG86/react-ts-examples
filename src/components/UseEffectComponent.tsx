import { useState, useEffect } from 'react'

const UseEffectComponent = () => {
    const [ time, setTime ] = useState<number>(0)

    useEffect(() => {
        const interval = window.setInterval(() => {
            setTime(old => old + 1)
        }, 1000)
        return () => window.clearInterval(interval)
    }, [])

    return (
        <div>
            <p>
                { time }
            </p>
        </div>
    )
}

export default UseEffectComponent