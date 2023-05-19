"use client";

const error = ({
    error,
    reset
}: { error: Error, reset: () => void }) => {
    return <div>
        <h1>{error.message || "Error"}</h1>
        Error. <button onClick={reset}>Try Again</button> 
        </div>
};

export default error;