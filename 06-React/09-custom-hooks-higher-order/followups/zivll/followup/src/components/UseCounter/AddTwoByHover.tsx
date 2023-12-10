import useCounter from '../../hooks/useCounter'

const addTwoByHover = () => {
    const { counter, addTwo } = useCounter(0)
    return (
        <div>
            {counter}
            {/* < button onClick={addTwo} > ADD 2</button > */}
            < button onMouseEnter={addTwo} > ADD 2</button >
        </div>)
}

export default addTwoByHover