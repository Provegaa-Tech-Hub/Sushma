import { useState, useEffect } from "react";
function Timer() {
    const [seconds, setSeconds] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {

        let timer;

        if (isRunning) {

            timer = setInterval(() => {

                setSeconds((prev) => prev + 1);

            }, 1000);

        }
        return () => clearInterval(timer);

    }, [isRunning]);

    function handleStart() {

        setIsRunning(true);
    }

    function handleStop() {

        setIsRunning(false);
    }

    function handleReset() {

        setSeconds(0);
        setIsRunning(false);
    }

    return (

        <div className="timer-container">

            <h1>Timer App</h1>

            <h2>{seconds} Seconds</h2>

            <button onClick={handleStart}>
                Start
            </button>

            <button onClick={handleStop}>
                Stop
            </button>

            <button onClick={handleReset}>
                Reset
            </button>

        </div>

    );

}
export default Timer;