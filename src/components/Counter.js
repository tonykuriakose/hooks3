import React,{useRef} from "react";

const Counter = () => {

    const counterRef = useRef(0);
    const incrementCounter = ()=>{
        counterRef.current+=1;
        alert(`Counter value is now: ${counterRef.current}`);
    }

    const resetCounter = ()=>{
        counterRef.current = 0;
        alert('Counter has been reset to 0')
    }
  return (
    <div style={{textAlign:'center',marginTop:'50px'}}>
      <h5>Counter Component</h5>
      <button onClick={incrementCounter}>Increment Counter</button>
      <button onClick={resetCounter}>Reset Counter</button>
    </div>
  );
};

export default Counter;
