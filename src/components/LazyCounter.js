import React,{useState} from "react";

const LazyCounter = () => {
    const [count,setCount] = useState(0);

    const increment = ()=>{
        setCount(count+1)

    }

    const decrement = ()=>{

        setCount(count-1)

    }

  return (
    <div>
      <h5>LazyCounter Component</h5>
      <h1>Count:{count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default LazyCounter;
