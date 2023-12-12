
import './App.css'
import CounterTwo from './components/counter/CounterTwo';
import Counter2OnHover from './components/counter/Counter2OnHover';
import TitleOnClick from './components/title/TitleOnClick';
import TitleOnHover from './components/title/TitleOnHover';
import TimerOnClick from './components/timer/TimerOnClick';
import TimerOnMount from './components/timer/TimerOnMount';

function App() {

  return (
    <>
      {/* task 1 */}
      <TitleOnClick />
      <TitleOnHover />

      {/* followup */}
      <CounterTwo />
      <Counter2OnHover />

      {/* task 2 */}
      <TimerOnClick />
      <TimerOnMount />
    </>
  )
}

export default App
