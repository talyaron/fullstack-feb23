import useTimer from "../hooks/useTimer";

const { decrement } = useTimer();

const TimerOnClick = ({ minutesStartOnClick, secondsStartOnClick, setTimerInSeconds }: { minutesStartOnClick: number, secondsStartOnClick: number, setTimerInSeconds: React.Dispatch<React.SetStateAction<number>> }) => {
    let buttonClicked;

    const start = (ev: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        ev.target ? decrement(setTimerInSeconds, 1) : ""

    }
    return (
        <div>
            <button onClick={start}>start</button>
            {buttonClicked === 1 ? <p> {minutesStartOnClick} : {secondsStartOnClick === 0 ? "00" : secondsStartOnClick}</p> : <p>10:00</p>}
        </div>
    )
}

export default TimerOnClick