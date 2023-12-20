
import useCounter from '../../hooks/useCounter'

const Counter = () => {
    const {counter, handleAddTwo} = useCounter()
    
  return (
    <div>{counter}
    <button onClick={handleAddTwo}>+2</button>
    </div>
  )
}

export default Counter