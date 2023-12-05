
import './App.css'
import WindowSize from './components/windowSize/WindowSize'
import CountdownTimer from './components/countdownTimer/CountdownTimer'
import TitleTask from './components/titleTask/TitleTask';
import Practice from './components/practice/Practice';




function App() {
 
  return (
    <>
    {/* < TitleTask />
    <br />
    <br />
    <br />
    < CountdownTimer />
    <br />
    <br />
    <br />
    <WindowSize /> */}

    <Practice/>
    </>
  )
}




export default App





















// function App() {
//   const [title, setTitle] = useState("Hello user")
//   const [counter, setCounter] = useState(0)

//   useEffect(() => {
//     document.title = `${title}`
//     console.log("Hello Doriel")
//   }, [counter])

 
//   useEffect(() => {
//     console.log("on Mount")
//     setCounter((prev) => prev + 1)
//     document.title += {prev}
//   }, [setTitle])

//   return (
//     <>
      
//       {/* <input value={title} onInput={(ev) => { setTitle((ev.target as HTMLInputElement).value) }} /> */}
//       <button onClick={() => {setCounter(counter + 1)}}>+</button>
//     </>
//   )
// }

// export default App
