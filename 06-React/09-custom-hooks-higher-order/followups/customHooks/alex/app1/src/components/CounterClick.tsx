import React from "react"
import useCounter from "../hooks/useCounter" 

const CounterClick = () => {
    
    const {counter, increase,decrease} = useCounter()

    return ( 
        <div>
            {counter}
            <button onClick={increase}>Increase by 2</button>
            <button onClick={decrease}>Decrease by 2</button>
        </div>
    )

}

export default CounterClick