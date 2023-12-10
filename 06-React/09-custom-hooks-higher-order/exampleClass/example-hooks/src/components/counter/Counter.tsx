
import useCounter from '../../hooks/useCounter'

const Counter = () => {
    const {counter, handleAddOne} = useCounter() 
    
  return (
    <div>{counter}
    <button onClick={handleAddOne}>+</button>
    </div>
  )
}

export default Counter

