import React,{lazy,Suspense} from "react";
import RefCounter from "./components/RefCounter";
const Counter = lazy(()=>import("./components/LazyCounter"));

const App = () => {
  return (
    <div>
      <h5>App Component</h5>
      console.log('Render App');
      
      <Suspense fallback={<div>Loading.....</div>}>

      <Counter />

      </Suspense>
      <RefCounter />
    </div>
  );
};

export default App;
