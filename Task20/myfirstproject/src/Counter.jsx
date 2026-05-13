import { useState } from "react";

function Counter() {

    const [count, setCount] = useState(0);

    // Increase
    const increase = () => {
        setCount(count + 1);
    };

    // Decrease
    const decrease = () => {
        setCount(count - 1);
    };

    // Reset
    const reset = () => {
        setCount(0);
    };

    return (
        <div className="counter-container">

            <h1>{count}</h1>

            <button onClick={increase}>
                Increase
            </button>

            <button onClick={decrease}>
                Decrease
            </button>

            <button onClick={reset}>
                Reset
            </button>

        </div>
    );
}

export default Counter;