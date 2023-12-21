import useCounter from '../../hooks/useCounter'

const UseAddTwo = () => {
    const { counter, addTwo } = useCounter(0)
    return (
        <div>
            {counter}
            < button onClick={addTwo} > ADD 2</button >
            {/* < button onClick={addTwo} > ADD 2</button > */}
        </div>)
}

export default UseAddTwo