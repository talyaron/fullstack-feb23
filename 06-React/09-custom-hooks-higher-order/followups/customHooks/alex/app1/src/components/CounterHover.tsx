import useCounter from "../hooks/useCounter"


const CounterHover = () => {
    const { counter, increase, decrease } = useCounter();
    return (
        <div>
            <div onMouseEnter={increase}>Add 2 by Hover</div>
            <p>{counter}</p>
            <div onMouseEnter={decrease}>Decrease 2 by Hover</div>
        </div>
    )
}

export default CounterHover