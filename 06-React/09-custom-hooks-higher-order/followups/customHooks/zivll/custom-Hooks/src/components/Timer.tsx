
const Timer = ({ minutes, seconds }: { minutes: number, seconds: number }) => {

    return (
        <div>
            {seconds < 10 ? <p>{minutes} : 0{seconds}</p> : <p>{minutes} : {seconds === 0 ? "00" : seconds}</p>}
        </div>
    )
}

export default Timer