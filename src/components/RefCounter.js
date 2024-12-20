import React,{useRef} from "react";

const RefCounter = () => {
    const counterRef = useRef(0);

    const increment = ()=>{
        counterRef.current+=1;
        alert(`${counterRef.current}`)
    }
    const reset = ()=>{
        counterRef.current=0;
        alert(`counter value reset to zero`)
    }
    console.log('Render RefCounter');
    

  return (
    <div>
      <h5>RefCounter Component</h5>
      <button onClick={increment}>Increment</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default RefCounter;
