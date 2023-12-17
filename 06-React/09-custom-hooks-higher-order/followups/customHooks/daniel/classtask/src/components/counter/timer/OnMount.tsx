import useTimer from '../../../hooks/useTimer'

const OnMount = () => {
    const timer = useTimer(null)

  return (
    <>
    <h1>On Mount</h1>
    <p>Time: {timer}</p>
    </>
  )
}

export default OnMount