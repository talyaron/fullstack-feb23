
import useCounter from '../../hooks/useCounter'

const CounterOnHover = () => {
    const {counter, handleAddTwo} = useCounter()

  return (
    <div>
        {counter}
        <button onMouseEnter={handleAddTwo}>+2</button>
    </div>
  )
}

export default CounterOnHover