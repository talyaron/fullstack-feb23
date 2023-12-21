const useTimer = () => {
    const decrement = (setTimerInSeconds: React.Dispatch<React.SetStateAction<number>>) => {

        setTimerInSeconds((prevTime) => prevTime - 1);
    };
    return { decrement };
};
export default useTimer;
