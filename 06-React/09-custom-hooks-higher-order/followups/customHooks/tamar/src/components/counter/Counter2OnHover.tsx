
import useCounterTwo from '../../hooks/useCounerTwo';
const Counter2OnHover = () => {
    const { counter2, handleAddTwo } = useCounterTwo()

    return (
        <div>{counter2}
            <button onMouseEnter={handleAddTwo}>+2</button>
        </div>
    )
}

export default Counter2OnHover