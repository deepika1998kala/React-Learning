import { useState } from "react";

function Counter(props){
    
    const [counter , setCounter] = useState(props.counter);
    return (
        <>
            
            <button type="button" onClick={()=>{
                setCounter(counter + 1);
                console.log(`The value of counter is ${counter}`);

            }

            }>Add Counter</button>

            <button type="button" onClick={()=>{
                setCounter(counter-1);
                console.log(`The value of counter is ${counter}`);
            }}>Reduce Counter</button>
            <h1>Value of counter is: {counter}</h1>
        </>
    )
}
export default Counter;