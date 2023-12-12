import React, { useState } from "react";

function useCounter(defaultValue=0 , numToChange=2) { 
    const [counter, setCounter] = React.useState(defaultValue);

    const increase = () => {
        setCounter(counter+numToChange);
    };

    const decrease =() => {
        setCounter(counter-numToChange);
    };
    return {counter,increase, decrease}

}

export default useCounter