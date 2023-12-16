import './app.scss'
import ConterOnHover from './components/counter/ConterOnHover'
import Counter from './components/counter/Counter'
import useCounter from './hooks/useCounter'

function App() {
  const {counter, handleAddOne} = useCounter()

  return (
    <>
     <Counter />
     <ConterOnHover/>
    </>
  )
}

export default App
