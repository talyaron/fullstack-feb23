import useCounterTwo from "../../hooks/useCounerTwo"

const CounterTwo = () => {
    const { counter2, handleAddTwo } = useCounterTwo()

    return (
        <div>{counter2}
            <button onClick={handleAddTwo}>+2</button>
        </div>
    )
}

export default CounterTwo